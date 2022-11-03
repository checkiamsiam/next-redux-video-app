import { MongoClient } from "mongodb";
const connectionString = process.env.DB_URI_ATLAS;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      return callback();
    });
  },

  dbConnect: function () {
    return client.db("video-application");
  },
};
