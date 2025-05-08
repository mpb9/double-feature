import mongoose from "mongoose";

// info: creates schema
const byMeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: false,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
    default: "archive",
  },
  tags: {
    type: [String],
    required: false,
  },
});

// info: creates model, also creates collection (if it doesn't exist)
const ByMe = mongoose.model("ByMe", byMeSchema);
export default ByMe;
