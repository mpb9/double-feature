import express from "express";
import {
  addSiteCat,
  createSiteCat,
  deleteAllSiteCats,
  deleteSiteCat,
  getSiteCats,
  updateSiteCat,
} from "../controllers/siteCat.controller.js";
import { initialSiteCatColl } from "../models/data/siteCat.data.js";
import { HttpStatus } from "./util/httpStatus.js";

const router = express.Router();

// MARK: GET
// info: All site categories
router.get("/", async (req, res) => {
  let siteCats = await getSiteCats();

  if (!siteCats)
    res.status(HttpStatus.NotFound).json("No site categories found");
  else res.status(HttpStatus.Ok).json({ siteCats });
});

// info: By name
router.get("/name/:name", async (req, res) => {
  let siteCats = await getSiteCats({ name: req.params.name });

  if (!siteCats)
    res.status(HttpStatus.NotFound).json("No site categories found");
  else res.status(HttpStatus.Ok).json({ siteCats });
});

// MARK: POST
// info: Add Site Category
router.post("/", async (req, res) => {
  let results = await addSiteCat(req.body);

  if (!results)
    res.status(HttpStatus.Conflict).json("Site Category Already Exists");
  else res.status(HttpStatus.Created).json(req.body);
});

// info: Create coll
router.post("/create", async (req, res) => {
  if (req.body.coll) initialSiteCatColl.push(...req.body);

  let results;

  try {
    results = await createSiteCat(initialSiteCatColl.pop());
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.NotAcceptable)
      .json("Failed to initialize site categories collection");
  }

  initialSiteCatColl.forEach((doc) => {
    try {
      results = addSiteCat(doc);
      if (!results)
        res.status(HttpStatus.Conflict).json("Site Category Already Exists");
    } catch (err) {
      console.error(err);
    }
  });

  res.status(HttpStatus.Created).json(req.body);
});

// MARK: PUT
// info: Update site category by name
router.put("/name/:name", async (req, res) => {
  let results = await updateSiteCat({ name: req.params.name }, req.body);

  if (!results) res.status(HttpStatus.NotFound).json("Site Category Not Found");
  else res.status(HttpStatus.Ok).json(req.body);
});

// MARK: DELETE
// info: Delete all site categories
router.delete("/", async (req, res) => {
  let results = await deleteAllSiteCats();

  if (!results)
    res.status(HttpStatus.NotFound).json("Site Categories Not Found");
  else res.status(HttpStatus.Ok).json("Site Categories Deleted");
});

// info: Delete site category by name
router.delete("/name/:name", async (req, res) => {
  let results = await deleteSiteCat({ name: req.params.name });

  if (!results) res.status(HttpStatus.NotFound).json("Site Category Not Found");
  else res.status(HttpStatus.Ok).json("Site Category Deleted");
});

export default router;
