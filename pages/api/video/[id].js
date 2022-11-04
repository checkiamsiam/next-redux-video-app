import { ObjectId } from "mongodb";
import client, { videoCollection } from "../../../src/utils/dbConnection";

export default async function handler(req, res) {
  client.connect();
  if (req.method === "GET") {
    const id = req.query.id;
    const video = await videoCollection.findOne({ _id: new ObjectId(id) });
    res.status(200).json({ status: true, data: video });
  }
}
