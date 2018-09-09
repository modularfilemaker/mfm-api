import { Filemaker } from "fms-api-client";

const list = (req, res) =>
  Filemaker.findOne()
    .then(client =>
      client.list("Module", req.query).then(response => response.data)
    )
    .then(data =>
      data.map(record => {
        const result = {};
        let currentVersion = record.portalData.versions[0];
        result.id = record.fieldData.Id;
        result.authorId = record.fieldData.AuthorId;
        result.short = currentVersion ? currentVersion["Version::Short"] : "";
        result.description = currentVersion
          ? currentVersion["Version::Description"]
          : "";
        result.hasXML = currentVersion ? currentVersion["Version::HasXML"] : "";
        result.currentVersionId = currentVersion
          ? currentVersion["Version::Id"]
          : "";
        result.author = currentVersion ? currentVersion["Version::Author"] : "";
        result.lastUpdate = currentVersion
          ? currentVersion["Version::CreationTimestamp"]
          : "";

        return result;
      })
    )
    .then(records => res.status(200).json(records))
    .catch(error => res.boom.badRequest(error.message));

export { list };
