import { Filemaker } from "fms-api-client";

const list = (req, res) =>
  Filemaker.findOne()
    .then(client => {
      return client
        .list("ModuleAPI")
        .then(response => client.fieldData(response.data));
    })
    .then(data =>
      data.map(record => {
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
      })
    );

export { list };
