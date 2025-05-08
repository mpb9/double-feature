import mongoose from "mongoose";

const byMeCatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  navLink: {
    type: String,
    required: false,
  },
});

const ByMeCat = mongoose.model("ByMeCat", byMeCatSchema);
export default ByMeCat;
