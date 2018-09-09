import { Filemaker } from "fms-api-client";

const list = (req, res) =>
  Filemaker.findOne()
    .then(client =>
      client.list("Module", req.query).then(response => response.data)
    )
    .then(data =>
      data.map(record => {
        const result = {};
        const currentVersion = record.portalData.versions[0];
        result.id = record.fieldData.Id;
        result.authorId = record.fieldData.AuthorId;
        result.short = currentVersion["versions::Short"] || "";
        result.description = currentVersion["versions::Description"] || "";
        result.hasXML = currentVersion["versions::HasXML"] || "";
        result.currentVersionId = currentVersion["versions::Id"] || "";
        result.author = currentVersion["versions::Author"] || "";
        result.lastUpdate = currentVersion["versions::CreationTimestamp"] || "";
        return result;
      })
    )
    .then(records => res.status(200).json(records))
    .catch(error => res.boom.badRequest(error.message));

export { list };
