import { ObjectId } from "mongodb";
import client, { videoCollection } from "../../../src/utils/dbConnection";

export default async function handler(req, res) {
  client.connect();
  if (req.method === "GET") {
    const id = req.query.id;
    const video = await videoCollection.findOne({ _id: new ObjectId(id) });
    res.status(200).json({ status: true, data: video });
  }
  if(req.method === "PUT"){
    const id = req.query.id;
    const {doLike } = req.body
    if(doLike){
      const video = await videoCollection.updateOne({ _id: new ObjectId(id) } , {$inc : {likes : 1}} , {upsert: true});
      res.status(200).json({ status: true, data: video });
    }else{
      const video = await videoCollection.updateOne({ _id: new ObjectId(id) } , {$inc : {unlikes : 1}} , {upsert: true});
      res.status(200).json({ status: true, data: video });
    }
  }
}
