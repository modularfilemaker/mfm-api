import { Filemaker } from "fms-api-client";

const create = (req, res) =>
	Filemaker.findOne()
		.then(client => client.script("PublishAPI", "DBTransactions", req.body))
		.then(response => res.status(200).json(response))
		.catch(error => res.boom.BadRequest(error.message));

export { create };
