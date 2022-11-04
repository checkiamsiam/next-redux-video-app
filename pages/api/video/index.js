import client, { videoCollection } from "../../../src/utils/dbConnection";

export default async function handler(req, res) {
  client.connect();
  if (req.method === "GET") {
    const videos = await videoCollection.find({});
    const result = await videos.toArray();
    res.status(200).json({ status: true, data: result });
  }
}
