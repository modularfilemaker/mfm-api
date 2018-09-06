import { Filemaker } from "fms-api-client";

const create = (req, res) =>
  Filemaker.findOne().then(client =>
    client.script("PublishAPI", "DBTransactions", req.body)
  );

export { create };
