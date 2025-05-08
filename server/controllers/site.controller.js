import db from "../db/connection.js";
import Site from "../models/site.model.js";

const DEFAULT_SORT = { cat: 1, _id: 1 };

// MARK: GET
export async function getSites(filter = {}, sort = DEFAULT_SORT) {
  let collection = db.collection("sites");
  let sites = await collection.find(filter).sort(sort).toArray();

  if (!sites) {
    console.error("No sites found");
    return 0;
  }

  console.log("Sites Found");
  return sites;
}

// MARK: POST
export async function createSite(doc = {}) {
  let siteExists = await validateSiteExists({ name: doc.name });
  if (siteExists) {
    console.error("Site Already Exists", doc);
    return 0;
  }

  try {
    const newSite = new Site(doc);
    const savedSite = await newSite.save();
    console.log("New site saved", savedSite);
  } catch (err) {
    console.error("Error saving new site", err);
  }
}

export async function addSite(doc = {}) {
  let siteExists = await validateSiteExists({ name: doc.name });
  if (siteExists) {
    console.error("Site Already Exists", doc);
    return 0;
  }

  let collection = db.collection("sites");
  let results = await collection
    .insertOne(doc)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Added", doc));

  return results;
}

// MARK: PUT
export async function updateSite(filter = {}, doc = {}) {
  let existingSite = await getSites(filter);
  if (!existingSite) {
    console.error("Site Doesn't Exists");
    return 0;
  } else if (existingSite.length > 1) {
    console.error("Multiple Sites Found");
    return 0;
  }

  let set = {};
  let unset = {};

  for (let key in doc) {
    if (key !== "_id" && doc[key] !== null) set = { ...set, [key]: doc[key] };
    else if (doc[key] === null) unset = { ...unset, [key]: "" };
  }

  let collection = db.collection("sites");
  let results = await collection
    .updateOne(filter, { $set: set, $unset: unset })
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Updated"));

  return results;
}

// MARK: DELETE
export async function deleteSite(filter = { name: "" }) {
  let collection = db.collection("sites");
  let results = await collection
    .deleteOne(filter)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Deleted"));

  return results;
}

export async function deleteAllSites() {
  let collection = db.collection("sites");
  let results = await collection
    .deleteMany({})
    .catch((err) => console.error(err))
    .finally(() => console.log("Sites Deleted"));

  return results;
}

// MARK: VALIDATORS
async function validateSiteExists(filter = { name: "" }) {
  let collection = db.collection("sites");
  let siteExists;
  try {
    siteExists = await collection.findOne(filter);
  } catch (err) {
    console.error(err);
  }
  if (siteExists) return 1;
  return 0;
}
