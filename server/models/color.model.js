import mongoose from "mongoose";

// info: creates schema
const lColorSchema = new mongoose.Schema({
  hex: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    required: true,
  },
});

const dColorSchema = new mongoose.Schema({
  hex: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    required: true,
  },
});

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hex: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    required: true,
  },
  l: {
    type: lColorSchema,
    required: false,
  },
  d: {
    type: dColorSchema,
    required: false,
  },
});

// info: creates model, also creates collection (if it doesn't exist)
const Color = mongoose.model("Color", colorSchema);

export default Color;
