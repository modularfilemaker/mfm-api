import axios from "axios";

const BASE_URL = process.env.FMS_SERVER;

const newOpts = () => {
  return {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.DB_APIKEY}`
    },
    validateStatus: function(status) {
      return status >= 200 && status <= 500; // default
    }
  };
};

export const publish = payload => {
  const opts = newOpts();
  opts.url = "/layouts/DBTransactions/records";
  opts.params = {
    _limit: 1,
    script: "PublishAPI",
    "script.param": JSON.stringify(payload)
  };
  return axios(opts).then(r => {
    const code = r.data.message.code;
    return code;
  });
};

export const searchData = () => {
  const opts = newOpts();
  opts.url = "/layouts/ModuleAPI/records";
  return axios(opts).then(r => {
    let { status, data } = r;
    const code = data.messages[0].code;

    let result = data.response.data.map(record => {
      const result = record.fieldData;
      result.modId = record.modId;
      result.recordId = record.recordId;
      let currentVersion = record.portalData.Version[0];

      result.Short = currentVersion ? currentVersion["Version::Short"] : "";
      result.Description = currentVersion
        ? currentVersion["Version::Description"]
        : "";
      result.HasXML = currentVersion ? currentVersion["Version::HasXML"] : "";
      result.CurrentVersionId = currentVersion
        ? currentVersion["Version::Id"]
        : "";
      result.Author = currentVersion ? "toddgeist" : "";
      result.LastUpdate = currentVersion
        ? currentVersion["Version::CreationTimestamp"]
        : "";

      return result;
    });

    return result;
  });
};

const countAsDownload = versionId => {
  const opts = newOpts();
  opts.method = "GET";
  opts.url = `/layouts/VersionAPI/records`;
  opts.params = {
    _limit: 1,
    script: "Record Download  Of Version(Id)",
    "script.param": versionId
  };
  return axios(opts).catch(e => {
    console.error(e.toString());
  });
};

export const getVersion = id => {
  const opts = newOpts();
  opts.method = "POST";
  opts.url = `/layouts/VersionAPI/_find`;
  opts.data = { query: [{ Id: `=${id}` }] };

  return axios(opts).then(response => {
    let { status, data } = response;
    const record = data.response.data[0];

    const code = data.messages[0].code;
    const result = record.fieldData;

    setImmediate(() => {
      countAsDownload(id);
    });

    return result;
  });
};
