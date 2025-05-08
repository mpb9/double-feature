import db from "../db/connection.js";
import Color from "../models/color.model.js";

const DEFAULT_SORT = { name: 1 };

// MARK: GET
export async function getColors(filter = {}, sort = DEFAULT_SORT) {
  let collection = db.collection("colors");
  let colors = await collection.find(filter).sort(sort).toArray();

  if (!colors) {
    console.error("No colors found");
    return 0;
  }

  console.log("Colors Found");
  return colors;
}

// MARK: POST
export async function createColor(doc = {}) {
  let colorExists = await validateColorExists({ name: doc.name });
  if (colorExists) {
    console.error("Color Already Exists");
    return 0;
  }

  try {
    const newColor = new Color(doc);
    const savedColor = await newColor.save();
    console.log("New color saved", savedColor);
  } catch (err) {
    console.error("Error saving new color", err);
  }
}

export async function addColor(doc = {}) {
  let colorExists = await validateColorExists({ name: doc.name });
  if (colorExists) {
    console.error("Color Already Exists", doc);
    return 0;
  }

  let collection = db.collection("colors");
  let results = await collection
    .insertOne(doc)
    .catch((err) => console.error(err))
    .finally(() => console.log("Color Added", doc));

  return results;
}

// MARK: PUT
export async function updateColor(filter = {}, doc = {}) {
  let existingColor = await getColors(filter);
  if (!existingColor) {
    console.error("Color Doesn't Exists");
    return 0;
  } else if (existingColor.length > 1) {
    console.error("Multiple Colors Found");
    return 1;
  }

  let collection = db.collection("colors");
  let results = await collection
    .updateOne(filter, { $set: doc })
    .catch((err) => console.error(err))
    .finally(() => console.log("Color Updated", doc));

  return results;
}

// MARK: DELETE
export async function deleteColor(filter = {}) {
  let collection = db.collection("colors");
  let results = await collection
    .deleteOne(filter)
    .catch((err) => console.error(err))
    .finally(() => console.log("Color Deleted"));

  return results;
}

export async function deleteAllColors() {
  let collection = db.collection("colors");
  let results = await collection
    .deleteMany({})
    .catch((err) => console.error(err))
    .finally(() => console.log("All colors deleted"));

  return results;
}

// MARK: VALIDATORS
export async function validateColorExists(filter = {}) {
  let collection = db.collection("colors");
  let color = await collection
    .findOne(filter)
    .catch((err) => console.error(err));

  if (color) {
    console.error("Color Already Exists", color);
    return 1;
  }
  return 0;
}
