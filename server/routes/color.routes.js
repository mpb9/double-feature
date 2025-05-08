import express from "express";
import {
  addColor,
  createColor,
  deleteAllColors,
  deleteColor,
  getColors,
  updateColor,
} from "../controllers/color.controller.js";
import { initialColorColl } from "../models/data/color.data.js";
import { HttpStatus } from "./util/httpStatus.js";

const router = express.Router();

// MARK: GET
// info: All colors
router.get("/", async (req, res) => {
  let colors = await getColors();

  if (!colors) res.status(HttpStatus.NotFound).json("No colors found");
  else res.status(HttpStatus.Ok).json({ colors });
});
// info: Color by name
router.get("/name/:name", async (req, res) => {
  let colors = await getColors({ name: req.params.name });

  if (!colors) res.status(HttpStatus.NotFound).json("No colors found");
  else res.status(HttpStatus.Ok).json({ colors });
});

// MARK: POST
// info: Add color
router.post("/", async (req, res) => {
  let results = await addColor(req.body);

  if (!results) res.status(HttpStatus.BadRequest).json("Error adding color");
  else res.status(HttpStatus.Created).json("Color Added");
});
// info: Create coll
router.post("/create", async (req, res) => {
  if (req.body.coll) initialColorColl.push(req.body.coll);
  let results;

  try {
    results = await createColor(req.body);
  } catch (err) {
    console.error("Error creating color collection", err);
    res.status(HttpStatus.BadRequest).json("Error creating color collection");
  }

  initialColorColl.forEach((doc) => {
    try {
      results = addColor(doc);
      if (!results)
        res.status(HttpStatus.BadRequest).json("Error adding color");
    } catch (err) {
      console.error("Error creating color", err);
    }
  });

  res.status(HttpStatus.Created).json("Color Collection Created");
});

// MARK: PUT
// info: Update color by name
router.put("/name/:name", async (req, res) => {
  let results = await updateColor({ name: req.params.name }, req.body);

  if (!results) res.status(HttpStatus.NotFound).json("Color Not Found");
  else res.status(HttpStatus.Ok).json("Color Updated");
});

// MARK: DELETE
// info: Delete color by name
router.delete("/name/:name", async (req, res) => {
  let results = await deleteColor({ name: req.params.name });

  if (!results) res.status(HttpStatus.NotFound).json("Color Not Found");
  else res.status(HttpStatus.Ok).json("Color Deleted");
});
// info: Delete all colors
router.delete("/", async (req, res) => {
  let results = await deleteAllColors();

  if (!results) res.status(HttpStatus.NotFound).json("No colors found");
  else res.status(HttpStatus.Ok).json("All Colors Deleted");
});

export default router;
