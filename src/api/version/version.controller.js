import { Filemaker } from "fms-api-client";

const recordDownload = record =>
  Filemaker.findOne().then(client =>
    client.script("Record Download  Of Version(Id)", "VersionAPI", record.id)
  );

const get = (req, res) =>
  Filemaker.findOne()
    .then(client => {
      return client
        .find("VersionAPI", { Id: `=${req.params.id}` })
        .then(response => client.recordData(response.data));
    })
    .then(record => {
      recordDownload(record);
      return record;
    });

export { get };
