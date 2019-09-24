const util = require("util");
const fs = require("fs");
const readdir = util.promisify(fs.readdir);
const path = require("path");
const messages = require("./grpc/webcache_pb");
const { readFileLines } = require("./helpers");
const { MonthNames, tld_pattern1, tld_pattern2 } = require("./webcache-helpers");
const { InvalidArgumentError } = require("./errors");

class WebcacheReporter {
  constructor(webcachePath) {
    this.webcachePath = webcachePath;
  }

  async getDates() {
    let result = new messages.WebcacheDates();
    let years = [];
    // Get years
    let yearDirs = await this._getDirNames(this.webcachePath, /^\d{4}$/);
    for (let yearDir of yearDirs) {
      let yearPath = path.join(this.webcachePath, yearDir);

      // Get months in year
      let months = [];
      let monthDirs = await this._getDirNames(yearPath, /^\d{2}$/);
      for (let monthDir of monthDirs) {
        let monthPath = path.join(yearPath, monthDir);

        // Get days in month
        let dayDirs = await this._getDirNames(monthPath, /^\d{2}$/);

        let month = new messages.WebcacheMonth();
        month.setMonth(MonthNames[Number(monthDir) - 1]);
        month.setVal(Number(monthDir));
        month.setDayList(dayDirs.map(x => Number(x)));

        months.push(month);
      }

      // Get weeks in year
      let weekDirs = await this._getDirNames(yearPath, /^week\d{2}$/);

      let year = new messages.WebcacheYear();
      year.setYear(Number(yearDir));
      year.setMonthList(months);
      year.setWeekList(weekDirs.map(x => Number(x.replace("week", ""))));

      years.push(year);
    }
    result.setYearList(years);
    return result;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @returns {Promise<messages.WebcacheTotals>}
   */
  async getTotals(dateFilter) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let totals = await this._parseStatCode(reportPath, type);
    let { users, sites, domains } = await this._parseUrlTotals(reportPath);
    totals.setUsers(users.size);
    totals.setSites(sites.size);
    totals.setDomains(domains.size);
    return totals;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Promise<messages.WebcacheDomains>}
   */
  async getDomains(dateFilter, orderBy) {
    let { reportPath } = this._getReportPath(dateFilter);
    let domainList = await this._parseDomains(reportPath);
    domainList = this._sortList(domainList, orderBy)
      .slice(0, 100);
    let domains = new messages.WebcacheDomains();
    domains.setDomainList(domainList);
    return domains;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Promise<messages.WebcacheUrls>}
   */
  async getUrls(dateFilter, orderBy) {
    let { reportPath } = this._getReportPath(dateFilter);
    let urlList = await this._parseUrls(reportPath);
    urlList = this._sortList(urlList, orderBy)
      .slice(0, 100);
    let urls = new messages.WebcacheUrls();
    urls.setUrlList(urlList);
    return urls;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @returns {Promise<messages.WebcacheDenied>}
   */
  async getDenied(dateFilter) {
    let { reportPath } = this._getReportPath(dateFilter);
    let deniedUrlList = await this._parseDenied(reportPath);
    deniedUrlList = this._sortList(deniedUrlList, messages.WebcacheOrderByEnum.REQUESTS)
      .slice(0, 100);
    let denied = new messages.WebcacheDenied();
    denied.setDeniedUrlList(deniedUrlList);
    return denied;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Promise<messages.WebcacheUsers>}
   */
  async getUsers(dateFilter, orderBy) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let userList = await this._parseUsers(reportPath, type);
    userList = this._sortList(userList, orderBy)
      .slice(0, 100);
    let users = new messages.WebcacheUsers();
    users.setUserList(userList);
    return users;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @param {string} user
   * @returns {Promise<messages.WebcacheUserDetail>}
   */
  async getUserDetail(dateFilter, orderBy, user) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let urlList = await this._parseUrls(reportPath, user);
    let periodList = await this._parseUserDetailPeriods(reportPath, type, user);
    urlList = this._sortList(urlList, orderBy)
      .slice(0, 100);
    let userDetail = new messages.WebcacheUserDetail();
    userDetail.setUrlList(urlList);
    userDetail.setPeriodList(periodList);
    return userDetail;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Promise<messages.WebcacheNetworks>}
   */
  async getNetworks(dateFilter, orderBy) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let networkList = await this._parseNetworks(reportPath, type);
    networkList = this._sortList(networkList, orderBy)
      .slice(0, 100);
    let networks = new messages.WebcacheNetworks();
    networks.setNetworkList(networkList);
    return networks;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @param {string} network
   * @returns {Promise<messages.WebcacheNetworkDetail>}
   */
  async getNetworkDetail(dateFilter, orderBy, network) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let userList = await this._parseNetworkUsers(reportPath, network);
    let periodList = await this._parseNetworkDetailPeriods(reportPath, type, network);
    userList = this._sortList(userList, orderBy)
      .slice(0, 100);
    let networkDetail = new messages.WebcacheNetworkDetail();
    networkDetail.setUserList(userList);
    networkDetail.setPeriodList(periodList);
    return networkDetail;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Promise<messages.WebcacheMimeTypes>}
   */
  async getMimeTypes(dateFilter, orderBy) {
    let { reportPath, type } = this._getReportPath(dateFilter);
    let mimeTypeList = await this._parseMimeTypes(reportPath, type);
    mimeTypeList = this._sortList(mimeTypeList, orderBy)
      .slice(0, 100);
    let mimeTypes = new messages.WebcacheMimeTypes();
    mimeTypes.setMimeTypeList(mimeTypeList);
    return mimeTypes;
  }

  async _parseMimeTypes(reportPath) {
    // text/html hits=27;bytes=606601
    let lines = await readFileLines(path.join(reportPath, "stat_mime_type.dat"));
    let mimeTypeList = [];

    for (let line of lines) {
      let [type, data] = line.split(" ");
      let [hitsData, bytesData] = data.split(";");

      let hits = Number(hitsData.replace("hits=", ""));
      let bytes = Number(bytesData.replace("bytes=", ""));
      let mimeType = new messages.WebcacheMimeType();
      mimeType.setMimeType(type);
      mimeType.setRequests(hits);
      mimeType.setBytes(bytes);
      mimeTypeList.push(mimeType);
    }

    return mimeTypeList;
  }

  async _parseNetworkUsers(reportPath, network) {
    // 10.1.10.0       10.1.10.133     hits=208;bytes=576074937;duration=3669488;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let lines = await readFileLines(path.join(reportPath, "stat_netuser.dat"));
    let userList = [];

    for (let line of lines) {
      if (!line.startsWith(`${network}\t`)) {
        continue;
      }
      let [, username, data] = line.split("\t");
      let [hitsData, bytesData, durationData, largestFileSizeData, largestFileUrlData] = data.split(";");

      let hits = Number(hitsData.replace("hits=", ""));
      let bytes = Number(bytesData.replace("bytes=", ""));
      let duration = Number.parseInt(Number(durationData.replace("duration=", "")) / 1000);
      let largestFileSize = Number(largestFileSizeData.replace("largest_file_size=", ""));
      let largestFileUrl = largestFileUrlData.replace("largest_file_url=", "");

      let user = new messages.WebcacheUser();
      user.setUser(username);
      user.setRequests(hits);
      user.setBytes(bytes);
      user.setDuration(duration);
      user.setLargestFileBytes(largestFileSize);
      user.setLargestFileUrl(largestFileUrl);
      userList.push(user);
    }

    return userList;
  }

  async _parseNetworkDetailPeriods(reportPath, type, network) {
    // 10.1.10.0       hits_month=02:208,;bytes_month=02:576074937,;duration_month=02:3669488,;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let lines = await readFileLines(path.join(reportPath, "stat_network.dat"));
    let periodMap = new Map();

    const getPeriod = (periodNumber) => {
      let period = periodMap.get(periodNumber);
      if (!period) {
        period = new messages.WebcacheNetworkPeriod();
        periodMap.set(periodNumber, period);
        period.setPeriod(periodNumber);
        period.setRequests(0);
        period.setBytes(0);
      }
      return period;
    };

    for (let line of lines) {
      if (!line.startsWith(`${network}\t`)) {
        continue;
      }
      let [, data] = line.split("\t");
      let [hitsData, bytesData] = data.split(";");

      hitsData
        .replace(`hits_${type}=`, "")
        .split(",")
        .filter(x => x !== "")
        .forEach(x => {
          let [key, value] = x.split(":").map(y => Number(y));
          if (type === "hour") {
            key++;
          }
          let period = getPeriod(key);
          period.setRequests(value);
        });

      bytesData
        .replace(`bytes_${type}=`, "")
        .split(",")
        .filter(x => x !== "")
        .forEach(x => {
          let [key, value] = x.split(":").map(y => Number(y));
          if (type === "hour") {
            key++;
          }
          let period = getPeriod(key);
          period.setBytes(value);
        });

      break;
    }

    return Array.from(periodMap.values());
  }

  /**
   * @param {string} reportPath
   * @param {string} type
   */
  async _parseNetworks(reportPath, type) {
    // 10.1.10.0       hits_month=02:208,;bytes_month=02:576074937,;duration_month=02:3669488,;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let networkUserMap = await this._parseNetworksUserCount(reportPath);
    let lines = await readFileLines(path.join(reportPath, "stat_network.dat"));
    let networkList = [];

    for (let line of lines) {
      let [networkName, data] = line.split("\t");
      let [hitsData, bytesData, durationData, largestFileSizeData, largestFileUrlData] = data.split(";");

      let hits = this._sumPeriodData(hitsData.replace(`hits_${type}=`, ""));
      let bytes = this._sumPeriodData(bytesData.replace(`bytes_${type}=`, ""));
      let duration = this._sumPeriodData(durationData.replace(`bytes_${type}=`, ""));
      // convert duration to seconds
      duration = Number.parseInt(duration / 1000);

      let largestFileSize = Number(largestFileSizeData.replace("largest_file_size=", ""));
      let largestFileUrl = largestFileUrlData.replace("largest_file_url=", "");

      let users = networkUserMap.get(networkName) || { count: 0 };

      let network = new messages.WebcacheNetwork();
      network.setNetwork(networkName);
      network.setRequests(hits);
      network.setBytes(bytes);
      network.setDuration(duration);
      network.setUsers(users.count);
      network.setLargestFileBytes(largestFileSize);
      network.setLargestFileUrl(largestFileUrl);
      networkList.push(network);
    }

    return networkList;
  }

  /**
   * @param {string} reportPath
   * @returns {Promise<Map<string, any>>}
   */
  async _parseNetworksUserCount(reportPath) {
    // 10.1.10.0       10.1.10.133     hits=208;bytes=576074937;duration=3669488;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let lines = await readFileLines(path.join(reportPath, "stat_netuser.dat"));
    let networkUserMap = new Map();

    for (let line of lines) {
      let [networkName, , ] = line.split("\t");
      let users = networkUserMap.get(networkName);
      if (!users) {
        users = { count: 0 };
        networkUserMap.set(networkName, users);
      }
      users.count++;
    }
    return networkUserMap;
  }

  /**
   * @param {string} reportPath
   * @param {string} type
   */
  async _parseUserDetailPeriods(reportPath, type, user) {
    // 10.1.10.133 hits_month=02:208,;bytes_month=02:576074937,;duration_month=02:3669488,;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let lines = await readFileLines(path.join(reportPath, "stat_user.dat"));
    let periodMap = new Map();

    const getPeriod = (periodNumber) => {
      let period = periodMap.get(periodNumber);
      if (!period) {
        period = new messages.WebcacheUserDetailPeriod();
        periodMap.set(periodNumber, period);
        period.setPeriod(periodNumber);
        period.setRequests(0);
        period.setBytes(0);
      }
      return period;
    };

    for (let line of lines) {
      if (!line.startsWith(`${user} `)) {
        continue;
      }
      let [, data] = line.split(" ");
      let [hitsData, bytesData] = data.split(";");

      hitsData
        .replace(`hits_${type}=`, "")
        .split(",")
        .filter(x => x !== "")
        .forEach(x => {
          let [key, value] = x.split(":").map(y => Number(y));
          if (type === "hour") {
            key++;
          }
          let period = getPeriod(key);
          period.setRequests(value);
        });

      bytesData
        .replace(`bytes_${type}=`, "")
        .split(",")
        .filter(x => x !== "")
        .forEach(x => {
          let [key, value] = x.split(":").map(y => Number(y));
          if (type === "hour") {
            key++;
          }
          let period = getPeriod(key);
          period.setBytes(value);
        });

      break;
    }

    return Array.from(periodMap.values());
  }

  /**
   * @param {string} reportPath
   * @param {string} type
   */
  async _parseUsers(reportPath, type) {
    // 10.1.10.133 hits_month=02:208,;bytes_month=02:576074937,;duration_month=02:3669488,;largest_file_size=262381524;largest_file_url=http://wanos.co/updateinfo/wanos-3.2.3-ub-lxd.tar.gz
    let lines = await readFileLines(path.join(reportPath, "stat_user.dat"));
    let userList = [];

    for (let line of lines) {
      let [username, data] = line.split(" ");
      let [hitsData, bytesData, durationData, largestFileSizeData, largestFileUrlData] = data.split(";");

      let hits = this._sumPeriodData(hitsData.replace(`hits_${type}=`, ""));
      let bytes = this._sumPeriodData(bytesData.replace(`bytes_${type}=`, ""));
      let duration = this._sumPeriodData(durationData.replace(`bytes_${type}=`, ""));
      // convert duration to seconds
      duration = Number.parseInt(duration / 1000);

      let largestFileSize = Number(largestFileSizeData.replace("largest_file_size=", ""));
      let largestFileUrl = largestFileUrlData.replace("largest_file_url=", "");

      let user = new messages.WebcacheUser();
      user.setUser(username);
      user.setRequests(hits);
      user.setBytes(bytes);
      user.setDuration(duration);
      user.setLargestFileBytes(largestFileSize);
      user.setLargestFileUrl(largestFileUrl);
      userList.push(user);
    }

    return userList;
  }

  /**
   * @param {string} reportPath
   */
  async _parseDenied(reportPath) {
    // 10.1.10.133 hits=6;first=1549886712.186;last=1549886740.681;url=www.telkom.co.za;blacklist=
    let lines = await readFileLines(path.join(reportPath, "stat_denied_url.dat"));
    let urlMap = new Map();
    let urlUserMap = new Map();
    let urlBlacklistAclMap = new Map();

    for (let line of lines) {
      let [user, data] = line.split(" ");
      let [hitsData, , , urlData, blacklistData] = data.split(";");

      let hits = Number(hitsData.replace("hits=", ""));
      let urlString = urlData.replace("url=", "");
      let blacklistString = blacklistData.replace("blacklist=", "");

      let url = urlMap.get(urlString);
      if (!url) {
        url = new messages.WebcacheDeniedUrl();
        url.setUrl(urlString);
        url.setRequests(0);
        urlMap.set(urlString, url);
      }
      // Increment url values
      url.setRequests(url.getRequests() + hits);

      let urlUsers = urlUserMap.get(urlString);
      if (!urlUsers) {
        urlUsers = new Map();
        urlUserMap.set(urlString, urlUsers);
      }
      let urlUser = urlUsers.get(user);
      if (!urlUser) {
        urlUser = new messages.WebcacheDomainUser();
        urlUser.setUser(user);
        urlUser.setRequests(0);
        urlUsers.set(user, urlUser);
      }
      // Increment user values
      urlUser.setRequests(urlUser.getRequests() + hits);

      let urlBlacklistAcls = urlBlacklistAclMap.get(urlString);
      if (!urlBlacklistAcls) {
        urlBlacklistAcls = new Set();
        urlBlacklistAclMap.set(urlString, urlBlacklistAcls);
      }
      if (blacklistString) {
        let blacklistArray = blacklistString.split(",");
        for (let acl of blacklistArray) {
          urlBlacklistAcls.add(acl);
        }
      }
    }

    for (var [key, value] of urlMap) {
      value.setUserList(Array.from(urlUserMap.get(key).values()));
      value.setBlacklistAclList(Array.from(urlBlacklistAclMap.get(key).values()));
    }

    return Array.from(urlMap.values());
  }

  /**
   * @param {string} reportPath
   */
  async _parseUrls(reportPath, userFilter = undefined) {
    // 10.1.10.133 hits=50;bytes=22880835;duration=174015;first=1549876235.433;last=1551390405.873;url=security.ubuntu.com;cache_hit=0;cache_bytes=0
    let lines = await readFileLines(path.join(reportPath, "stat_user_url.dat"));
    let urlMap = new Map();

    for (let line of lines) {
      if (userFilter && !line.startsWith(`${userFilter} `)) {
        continue;
      }
      let [, data] = line.split(" ");
      let [hitsData, bytesData, durationData, , , urlData] = data.split(";");

      let hits = Number(hitsData.replace("hits=", ""));
      let bytes = Number(bytesData.replace("bytes=", ""));
      let duration = Number.parseInt(Number(durationData.replace("duration=", "")) / 1000);
      let urlString = urlData.replace("url=", "");

      let url = urlMap.get(urlString);
      if (!url) {
        url = new messages.WebcacheUrl();
        url.setUrl(urlString);
        url.setRequests(0);
        url.setBytes(0);
        url.setDuration(0);
        urlMap.set(urlString, url);
      }
      // Increment url values
      url.setRequests(url.getRequests() + hits);
      url.setBytes(url.getBytes() + bytes);
      url.setDuration(url.getDuration() + duration);
    }

    return Array.from(urlMap.values());
  }

  /**
   * @param {string} reportPath
   */
  async _parseDomains(reportPath) {
    // 10.1.10.133 hits=50;bytes=22880835;duration=174015;first=1549876235.433;last=1551390405.873;url=security.ubuntu.com;cache_hit=0;cache_bytes=0
    let domainMap = new Map();
    let domainUserMap = new Map();
    let lines = await readFileLines(path.join(reportPath, "stat_user_url.dat"));

    for (let line of lines) {
      let [user, data] = line.split(" ");
      let [hitsData, bytesData, durationData, , , urlData] = data.split(";");

      let hits = Number(hitsData.replace("hits=", ""));
      let bytes = Number(bytesData.replace("bytes=", ""));
      let duration = Number.parseInt(Number(durationData.replace("duration=", "")) / 1000);
      let urlString = urlData.replace("url=", "");

      let domainSearch = urlString.match(tld_pattern1) || urlString.match(tld_pattern2);
      let domainName = "unknown";
      if (domainSearch) {
        domainName = domainSearch[0];
      }
      let domain = domainMap.get(domainName);
      if (!domain) {
        domain = new messages.WebcacheDomain();
        domain.setDomain(domainName);
        domain.setRequests(0);
        domain.setBytes(0);
        domain.setDuration(0);
        domainMap.set(domainName, domain);
      }
      // Increment domain values
      domain.setRequests(domain.getRequests() + hits);
      domain.setBytes(domain.getBytes() + bytes);
      domain.setDuration(domain.getDuration() + duration);

      let domainUsers = domainUserMap.get(domainName);
      if (!domainUsers) {
        domainUsers = new Map();
        domainUserMap.set(domainName, domainUsers);
      }
      let domainUser = domainUsers.get(user);
      if (!domainUser) {
        domainUser = new messages.WebcacheDomainUser();
        domainUser.setUser(user);
        domainUser.setRequests(0);
        domainUser.setBytes(0);
        domainUsers.set(user, domainUser);
      }
      // Increment user values
      domainUser.setRequests(domainUser.getRequests() + hits);
      domainUser.setBytes(domainUser.getBytes() + bytes);
    }

    for (var [key, value] of domainMap) {
      value.setUserList(Array.from(domainUserMap.get(key).values()));
    }

    return Array.from(domainMap.values());
  }

  /**
   * @param {string} reportPath
   */
  async _parseUrlTotals(reportPath) {
    // 10.1.10.133 hits=1;bytes=878;duration=371;first=1549453944.857;last=1549453944.857;url=stackoverflow.com;cache_hit=0;cache_bytes=0
    let users = new Set();
    let sites = new Set();
    let domains = new Set();
    let lines = await readFileLines(path.join(reportPath, "stat_user_url.dat"));

    for (let line of lines) {
      let [user, data] = line.split(" ");
      users.add(user);
      let [, , , , , urlData] = data.split(";");
      let urlString = urlData.replace("url=", "");
      sites.add(urlString);
      let url = urlString.match(tld_pattern1) || urlString.match(tld_pattern2);
      if (url) {
        domains.add(url[0]);
      } else {
        domains.add("unknown");
      }
    }
    return { users, sites, domains };
  }

  /**
   * @param {string} reportPath
   * @param {string} type
   */
  async _parseStatCode(reportPath, type) {
    // DENIED hits_month=02:6,;bytes_month=02:21516,;thp_bytes_month=02:21516,;thp_duration_month=02:68,
    // HIT hits_month=02:4,;bytes_month=02:81247,;thp_bytes_month=02:81247,;thp_duration_month=02:0,
    // MISS hits_month=02:98,;bytes_month=02:540789633,;thp_bytes_month=02:540789633,;thp_duration_month=02:3415431,
    let totals = new messages.WebcacheTotals();
    let periodMap = new Map();

    let parseKeyValues = (kvArray, property) => {
      kvArray.forEach(x => {
        let [key, value] = x.split(":").map(y => Number(y));
        if (type === "hour") {
          key++;
        }
        let period = periodMap.get(key);
        if (!period) {
          period = new messages.WebcacheTotalsPeriod();
          period.setPeriod(key);
          periodMap.set(key, period);
        }
        let capitalizeProperty = property.replace(/^./, str => str.toUpperCase());
        let setFuncName = `set${capitalizeProperty}`;
        let getFuncName = `get${capitalizeProperty}`;
        period[setFuncName](value);
        let currentVal = totals[getFuncName]() || 0;
        totals[setFuncName](currentVal + value);
      });
    };

    let lines = await readFileLines(path.join(reportPath, "stat_code.dat"));
    for (let line of lines) {

      let [code, data] = line.split(" ");
      let [hitsData, bytesData] = data.split(";");
      code = code === "HIT" ? "hits" : code === "MISS" ? "misses" : "denied";

      let tmpHits = hitsData
        .replace(`hits_${type}=`, "")
        .split(",")
        .filter(x => x !== "");

      let tmpBytes = bytesData
        .replace(`bytes_${type}=`, "")
        .split(",")
        .filter(x => x !== "");

      parseKeyValues(tmpHits, code);
      parseKeyValues(tmpBytes, `${code}Bytes`);
    }

    // Sort the array ascending order
    let periods = Array.from(periodMap.values())
      .sort((a, b) => a.getPeriod() - b.getPeriod());
    totals.setPeriodList(periods);
    return totals;
  }

  /**
   * @param {messages.WebcacheDateFilter} dateFilter
   */
  _getReportPath(dateFilter) {
    if (!dateFilter.getYear()) {
      throw new InvalidArgumentError("year", "Year is required.");
    }
    let reportPath = `${this.webcachePath}/${dateFilter.getYear()}`;
    if (!fs.existsSync(reportPath)) {
      throw new InvalidArgumentError("year", "No data for year.");
    }
    let type = "month";
    if (dateFilter.getMonth()) {
      reportPath += `/${dateFilter.getMonth().toString().padStart(2, "0")}`;
      if (!fs.existsSync(reportPath)) {
        throw new InvalidArgumentError("month", "No data for month.");
      }
      type = "day";
      if (dateFilter.getDay()) {
        reportPath += `/${dateFilter.getDay().toString().padStart(2, "0")}`;
        if (!fs.existsSync(reportPath)) {
          throw new InvalidArgumentError("day", "No data for day.");
        }
        type = "hour";
      }
    } else if (dateFilter.getWeek()) {
      // Find report for week of year
      reportPath += `/week${dateFilter.getWeek().toString().padStart(2, "0")}`;
      if (!fs.existsSync(reportPath)) {
        throw new InvalidArgumentError("week", "No data for week.");
      }
      type = "day";
    }
    return {
      reportPath,
      type
    };
  }

  async _getDirNames(path, regexFilter) {
    regexFilter = regexFilter || new RegExp();
    let dirs = await readdir(path, { withFileTypes: true });
    return dirs
      .filter(x => x.isDirectory() && x.name.match(regexFilter))
      .map(x => x.name);
  }

  /**
   * @param {Array} list
   * @param {messages.WebcacheOrderByEnum} orderBy
   * @returns {Array}
   */
  _sortList(list, orderBy) {
    return list.sort((a, b) => {
      switch (orderBy) {
        case messages.WebcacheOrderByEnum.BYTES:
          return b.getBytes() - a.getBytes();
        case messages.WebcacheOrderByEnum.REQUESTS:
          return b.getRequests() - a.getRequests();
        case messages.WebcacheOrderByEnum.DURATION:
          return b.getDuration() - a.getDuration();
        case messages.WebcacheOrderByEnum.LARGEST:
          return b.getLargestFileBytes() - a.getLargestFileBytes();
        default:
          return b.getBytes() - a.getBytes();
      }
    });
  }

  /**
   * Sums the values of a comma seperated string of period:value pairs.
   * Example data: 02:10,03:15,05:100 will return 125
   * @param {string} data - Data should be in the format p:v,p:v,.... where v has to be parsable to a number.
   * @returns {number} Sum of number values in the period:value pairs comma seperated string.
   */
  _sumPeriodData(data) {
    return data
      .split(",")
      .filter(x => x !== "")
      .map(x => x.split(":").map(y => Number(y))[1]) // [0] is key and [1] is value
      .reduce((acc, value) => acc + value, 0);
  }
}

class WebcacheRpcController {
  constructor(setupRpcCall, handleError, webcachePath) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.webcacheReporter = new WebcacheReporter(webcachePath);
  }

  rpcGetWebcacheDates() {
    const handleRequest = async () => {
      try {
        return await this.webcacheReporter.getDates();
      } catch (error) {
        return this.handleError(error, new messages.WebcacheDates());
      }
    };
    this.setupRpcCall("getWebcacheDates", handleRequest);
  }

  rpcGetWebcacheTotals() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getTotals(request.getDateFilter());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheTotals());
      }
    };
    this.setupRpcCall("getWebcacheTotals", handleRequest);
  }

  rpcGetWebcacheDomains() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getDomains(request.getDateFilter(), request.getOrderBy());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheDomains());
      }
    };
    this.setupRpcCall("getWebcacheDomains", handleRequest);
  }

  rpcGetWebcacheUrls() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getUrls(request.getDateFilter(), request.getOrderBy());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheUrls());
      }
    };
    this.setupRpcCall("getWebcacheUrls", handleRequest);
  }

  rpcGetWebcacheDenied() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getDenied(request.getDateFilter());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheDenied());
      }
    };
    this.setupRpcCall("getWebcacheDenied", handleRequest);
  }

  rpcGetWebcacheUsers() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getUsers(request.getDateFilter(), request.getOrderBy());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheUsers());
      }
    };
    this.setupRpcCall("getWebcacheUsers", handleRequest);
  }

  rpcGetWebcacheUserDetail() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getUserDetail(request.getDateFilter(), request.getOrderBy(), request.getUser());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheUserDetail());
      }
    };
    this.setupRpcCall("getWebcacheUserDetail", handleRequest);
  }

  rpcGetWebcacheNetworks() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getNetworks(request.getDateFilter(), request.getOrderBy());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheNetworks());
      }
    };
    this.setupRpcCall("getWebcacheNetworks", handleRequest);
  }

  rpcGetWebcacheNetworkDetail() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getNetworkDetail(request.getDateFilter(), request.getOrderBy(), request.getNetwork());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheNetworkDetail());
      }
    };
    this.setupRpcCall("getWebcacheNetworkDetail", handleRequest);
  }

  rpcGetWebcacheMimeTypes() {
    const handleRequest = async (request) => {
      try {
        return await this.webcacheReporter.getMimeTypes(request.getDateFilter(), request.getOrderBy());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheMimeTypes());
      }
    };
    this.setupRpcCall("getWebcacheMimeTypes", handleRequest);
  }

  setupRpc() {
    this.rpcGetWebcacheDates();
    this.rpcGetWebcacheTotals();
    this.rpcGetWebcacheDomains();
    this.rpcGetWebcacheUrls();
    this.rpcGetWebcacheDenied();
    this.rpcGetWebcacheUsers();
    this.rpcGetWebcacheUserDetail();
    this.rpcGetWebcacheNetworks();
    this.rpcGetWebcacheNetworkDetail();
    this.rpcGetWebcacheMimeTypes();
  }
}

// (async () => {
//   let wr = new WebcacheReporter("/wanos/sa2");
//   let dateFilter = new messages.WebcacheDateFilter();
//   dateFilter.setYear(2019);
//   //dateFilter.setMonth(2);
//   //dateFilter.setDay(11);
//   let mimeTypes = await wr.getMimeTypes(dateFilter, messages.WebcacheOrderByEnum.BYTES);
//   console.log(JSON.stringify(mimeTypes.toObject()));
// })();

module.exports.WebcacheRpcController = WebcacheRpcController;