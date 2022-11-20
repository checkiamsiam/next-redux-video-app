import { ObjectId } from "mongodb";
import client, { videoCollection } from "../../../src/utils/dbConnection";

export default async function handler(req, res) {
  client.connect();
  if (req.method === "GET") {
    const { searchText } = req.query;
    const video = await videoCollection.find({ $or: [{ tags: { $in: [searchText] } }, { title: { $regex: new RegExp(searchText, "i") } }] });
    const result = await video.toArray();
    res.status(200).json({ status: true, data: result });
  }
}
