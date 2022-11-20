import { ObjectId } from "mongodb";
import client, { videoCollection } from "../../../src/utils/dbConnection";


export default async function handler(req, res) {
  client.connect();
  if (req.method === "PUT") {
    const {id} = req.body;
    const thisVideo = await videoCollection.findOne({_id : new ObjectId(id)})
    const video = await videoCollection.find({tags : { $in : thisVideo.tags} , _id: {$ne : new ObjectId(id)}})
    const result = await video.toArray()
    res.status(200).json({ status: true, data: result });
  }
  
}