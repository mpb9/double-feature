import mongoose from "mongoose";
const { Schema, model } = mongoose;

// ! inactive
const boxdSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

const Boxd = model("Boxd", boxdSchema);
export default Boxd;
