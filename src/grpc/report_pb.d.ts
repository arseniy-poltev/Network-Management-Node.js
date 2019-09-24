// package: 
// file: report.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class ReportSummary extends jspb.Message { 
    clearColumnList(): void;
    getColumnList(): Array<ReportSummaryColumn>;
    setColumnList(value: Array<ReportSummaryColumn>): void;
    addColumn(value?: ReportSummaryColumn, index?: number): ReportSummaryColumn;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportSummary.AsObject;
    static toObject(includeInstance: boolean, msg: ReportSummary): ReportSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportSummary;
    static deserializeBinaryFromReader(message: ReportSummary, reader: jspb.BinaryReader): ReportSummary;
}

export namespace ReportSummary {
    export type AsObject = {
        columnList: Array<ReportSummaryColumn.AsObject>,
    }
}

export class ReportSummaryColumn extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getUnit(): string;
    setUnit(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportSummaryColumn.AsObject;
    static toObject(includeInstance: boolean, msg: ReportSummaryColumn): ReportSummaryColumn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportSummaryColumn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportSummaryColumn;
    static deserializeBinaryFromReader(message: ReportSummaryColumn, reader: jspb.BinaryReader): ReportSummaryColumn;
}

export namespace ReportSummaryColumn {
    export type AsObject = {
        name: string,
        unit: string,
    }
}

export class ReportSeries extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): void;
    addValue(value: number, index?: number): number;

    clearSummaryValueList(): void;
    getSummaryValueList(): Array<number>;
    setSummaryValueList(value: Array<number>): void;
    addSummaryValue(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportSeries.AsObject;
    static toObject(includeInstance: boolean, msg: ReportSeries): ReportSeries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportSeries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportSeries;
    static deserializeBinaryFromReader(message: ReportSeries, reader: jspb.BinaryReader): ReportSeries;
}

export namespace ReportSeries {
    export type AsObject = {
        name: string,
        valueList: Array<number>,
        summaryValueList: Array<number>,
    }
}

export class Report extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getUnit(): string;
    setUnit(value: string): void;


    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): ReportSummary | undefined;
    setSummary(value?: ReportSummary): void;

    clearTimeList(): void;
    getTimeList(): Array<string>;
    setTimeList(value: Array<string>): void;
    addTime(value: string, index?: number): string;

    clearSeriesList(): void;
    getSeriesList(): Array<ReportSeries>;
    setSeriesList(value: Array<ReportSeries>): void;
    addSeries(value?: ReportSeries, index?: number): ReportSeries;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report.AsObject;
    static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report;
    static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
    export type AsObject = {
        name: string,
        unit: string,
        summary?: ReportSummary.AsObject,
        timeList: Array<string>,
        seriesList: Array<ReportSeries.AsObject>,
    }
}

export enum ReportPeriod {
    PERIOD_HOUR = 0,
    PERIOD_DAY = 1,
    PERIOD_WEEK = 2,
    PERIOD_MONTH = 3,
    PERIOD_YEAR = 4,
}

export enum ReportUnit {
    UNIT_RATE = 0,
    UNIT_BYTES = 1,
    UNIT_PERCENTAGE = 2,
}
