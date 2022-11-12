import { MongoClient } from "mongodb";
const connectionString = process.env.DB_URI_ATLAS;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default client;

export const videoCollection = client.db("video-application").collection("videos");
export const tagCollection = client.db("video-application").collection("tags");
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (err || !db) {
//         return callback(err);
//       }
//       return callback();
//     });
//   },

//   dbConnect: function (video) {
//     return client.db("video-application").collection(video)
//   },
// };
