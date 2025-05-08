import mongoose from "mongoose";
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

const siteCatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: colorSchema,
    required: false,
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

const SiteCat = mongoose.model("SiteCat", siteCatSchema);

export default SiteCat;
