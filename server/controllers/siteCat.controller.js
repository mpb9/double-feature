import db from "../db/connection.js";
import SiteCat from "../models/siteCat.model.js";

const DEFAULT_SORT = { name: 1 };

// MARK: GET
export async function getSiteCats(filter = {}, sort = DEFAULT_SORT) {
  let collection = db.collection("sitecats");
  let siteCats = await collection.find(filter).sort(sort).toArray();

  if (!siteCats) {
    console.error("No site categories found");
    return 0;
  }

  console.log("Site Categories Found");
  return siteCats;
}

// MARK: POST
// info: Add Site Category
export async function addSiteCat(doc = {}) {
  let siteCatExists = await validateSiteCatExists({ name: doc.name });
  if (siteCatExists) {
    console.error("Site Category Already Exists", doc);
    return 0;
  }

  let collection = db.collection("sitecats");
  let results = await collection
    .insertOne(doc)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Category Added"));

  return results;
}
// info: Create Site Category
export async function createSiteCat(doc = {}) {
  let siteCatExists = await validateSiteCatExists({ name: doc.name });
  if (siteCatExists) {
    console.error("Site Category Already Exists");
    return 0;
  }

  try {
    const newSiteCat = new SiteCat(doc);
    const savedSiteCat = await newSiteCat.save();
    console.log("New site category saved", savedSiteCat);
  } catch (err) {
    console.error("Error saving new site category", err);
  }
}

// MARK: PUT
// info: Update Site Category
export async function updateSiteCat(filter = {}, doc = {}) {
  let existingSiteCat = await getSiteCats(filter);
  if (!existingSiteCat) {
    console.error("Site Category Doesn't Exists");
    return 0;
  } else if (existingSiteCat.length > 1) {
    console.error("Multiple Site Categories Found");
    return 0;
  }

  let set = {};
  let unset = {};

  for (let key in doc) {
    if (key !== "_id" && doc[key] !== null) set = { ...set, [key]: doc[key] };
    else if (doc[key] === null) unset = { ...unset, [key]: "" };
  }

  let collection = db.collection("sitecats");
  let results = await collection
    .updateOne(filter, { $set: set, $unset: unset })
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Category Updated"));
  return results;
}

// MARK: DELETE
// info: Delete Site Category by Name
export async function deleteSiteCat(filter = { name: "" }) {
  let siteCatExists = await validateSiteCatExists(filter);
  if (!siteCatExists) {
    console.error("Site Category Doesn't Exists");
    return 0;
  }

  let collection = db.collection("sitecats");
  let results = await collection
    .deleteOne(filter)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Category Deleted"));

  return results;
}
// info: Delete All Site Categories
export async function deleteAllSiteCats() {
  let collection = db.collection("sitecats");
  let results = await collection
    .deleteMany()
    .catch((err) => console.error(err))
    .finally(() => console.log("All Site Categories Deleted"));

  return results;
}

// MARK: VALIDATORS
// info: Validate Site Category Exists
async function validateSiteCatExists(filter = { name: "" }) {
  let collection = db.collection("sitecats");
  let siteCatExists;
  try {
    siteCatExists = await collection.findOne(filter);
  } catch (err) {
    console.error(err);
  }
  if (siteCatExists) return 1;
  return 0;
}
