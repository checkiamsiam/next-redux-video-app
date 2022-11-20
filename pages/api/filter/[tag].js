import client, { videoCollection } from "../../../src/utils/dbConnection";


export default async function handler(req, res) {
  client.connect();
  if (req.method === "GET") {
    const {tag} = req.query;
    const video = await videoCollection.find({tags : { $in : [tag] }})
    const result = await video.toArray()
    res.status(200).json({ status: true, data: result });
  }
  
}