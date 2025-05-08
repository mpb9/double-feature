import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "movies",
  });
} catch (err) {
  console.error(err);
}

let db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to MongoDB"));
export default db;
