import mongoose from "mongoose";

// info: creates schema
const filmSchema = new mongoose.Schema({});

// info: creates model, also creates collection (if it doesn't exist)
const Film = mongoose.model("Film", filmSchema);

export default Film;
