import { ObjectId } from "mongodb";
import { videoCollection } from "../../../src/utils/dbConnection";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;
    const video = await videoCollection.findOne({ _id: new ObjectId(id) });
    res.status(200).json({ status: true, data: video });
  }
}
