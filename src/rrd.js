const reportMessages = require("./grpc/report_pb");

/**
 * @parm {Object} rrdReport
 * @parm {string} name - Name of report
 * @parm {string} unit - Unit of report
 * @parm {function} [valueParser] - Optional function to parse the value string
 * @returns {Promise<reportMessages.Report>}
 */
const parseRrdReport = (rrdReport, name, unit, valueParser = null) => {
  const ParseState = {
    COLUMNS: 1,
    DATA: 2
  };
  let state = ParseState.COLUMNS;

  let seriesNames = rrdReport.meta.legend.map(x => x.trim()).filter(x => x.length > 0);
  let columns = [];
  let summaryValuesMap = new Map();
  let currentSeriesSummaryValues = null;
  let currentSeries = 0;
  let currentColumnIndex = 0;
  for (let item of rrdReport.meta.gprints) {
    if (state === ParseState.COLUMNS) {
      if (item.comment !== undefined) {
        let comment = item.comment.replace(/(\\t|\\l)/g, "").trim();
        if (comment.length > 0) {
          columns.push({
            name: comment
          });
        }
        continue;
      } else {
        state = ParseState.DATA;
      }
    }
    if (state === ParseState.DATA) {
      if (item.area !== undefined) {
        // Start of new series summary data
        currentSeriesSummaryValues = [];
        summaryValuesMap.set(seriesNames[currentSeries], currentSeriesSummaryValues);
        currentSeries++;
        currentColumnIndex = 0;
        continue;
      }
      if (item.gprint !== undefined) {
        let valueString = item.gprint.replace(/(\\t|\\l)/g, "").trim();
        let column = columns[currentColumnIndex];
        if (column.unit === undefined) {
          if (valueString.endsWith("b/s")) {
            column.unit = "rate";
          } else if (valueString.endsWith("B")) {
            column.unit = "bytes";
          } else if (valueString.endsWith("X")) {
            column.unit = "percentage";
            column.multiplyBy100 = true;
          } else {
            column.unit = "percentage";
          }
        }
        let value = column.multiplyBy100 ? parseInt(parseFloat(valueString) * 100) : parseInt(valueString);
        value = isNaN(value) || value === null ? 0 : value;
        if (column.name === "Saved" && value < 0) {
          value = 0;
        }
        currentSeriesSummaryValues.push(value);
        currentColumnIndex++;
      }
    }
  }

  let timeList = [];
  let seriesList = [];
  for (let seriesName of seriesNames) {
    let series = new reportMessages.ReportSeries();
    let summaryValueList = summaryValuesMap.get(seriesName);
    series.setName(seriesName);
    series.setSummaryValueList(summaryValueList);
    seriesList.push(series);
  }

  const defaultValueParser = (valueString) => {
    let value = parseInt(valueString);
    value = isNaN(value) || value === null ? 0 : value;
    if (value < 0) {
      value *= -1;
    }
    return value;
  };
  const getValue = valueParser || defaultValueParser;

  for (let i = 0; i < rrdReport.data.length; i++) {
    let data = rrdReport.data[i];
    let time = new Date(parseInt(data[0]) * 1000);
    timeList.push(time.toISOString());
    for (let j = 2, k = 0; j < data.length; j += 2, k++) {
      let value = getValue(data[j]);
      seriesList[k].getValueList().push(value);
    }
  }

  let summary = new reportMessages.ReportSummary();
  let columnList = columns.map(x => {
    let summaryColumn = new reportMessages.ReportSummaryColumn();
    summaryColumn.setName(x.name);
    summaryColumn.setUnit(x.unit);
    return summaryColumn;
  });
  summary.setColumnList(columnList);

  let report = new reportMessages.Report();
  report.setName(name);
  report.setUnit(unit);
  report.setSummary(summary);
  report.setTimeList(timeList);
  report.setSeriesList(seriesList);

  return report;
};

/**
 * @parm {reportMessages.ReportPeriod} period
 * @returns {string} Period string
 */
const getPeriodString = (period) => {
  let periodString = "";
  switch (period) {
    case reportMessages.ReportPeriod.PERIOD_HOUR:
      periodString = "Hour";
      break;
    case reportMessages.ReportPeriod.PERIOD_DAY:
      periodString = "Day";
      break;
    case reportMessages.ReportPeriod.PERIOD_WEEK:
      periodString = "Week";
      break;
    case reportMessages.ReportPeriod.PERIOD_MONTH:
      periodString = "Month";
      break;
    case reportMessages.ReportPeriod.PERIOD_YEAR:
      periodString = "Year";
      break;
    default:
      periodString = "Hour";
      break;
  }
  return periodString;
};

module.exports = {
  parseRrdReport,
  getPeriodString
};