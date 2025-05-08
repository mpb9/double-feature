import mongoose from "mongoose";

// info: creates schema
const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  iconSrc: {
    type: String,
    required: false,
  },
  subscribed: {
    type: Boolean,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

// info: creates model, also creates collection (if it doesn't exist)
const Site = mongoose.model("Site", siteSchema);
export default Site;
