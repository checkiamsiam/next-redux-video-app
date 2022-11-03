import { connectToServer, dbConnect } from "../../../src/utils/dbConnection";

export default function handler(req, res) {
  connectToServer(async () => {
    if (req.method === "GET") {
      const db = await dbConnect();
      const videoCollection = await db.collection("videos");
      const videos = await videoCollection.find({});
      const result = await videos.toArray();
      res.status(200).json({ status: true, data: result });
    }
  });
}
