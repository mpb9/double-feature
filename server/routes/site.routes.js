import express from "express";
import {
  addSite,
  createSite,
  deleteAllSites,
  deleteSite,
  getSites,
  updateSite,
} from "../controllers/site.controller.js";
import { initialSiteColl } from "../models/data/site.data.js";
import { HttpStatus } from "./util/httpStatus.js";

const router = express.Router();

// MARK: GET
// info: All sites
router.get("/", async (req, res) => {
  let sites = await getSites();

  if (!sites) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json({ sites });
});

// info: Site by name
router.get("/name/:name", async (req, res) => {
  let sites = await getSites({ name: req.params.name });

  if (!sites) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json({ sites });
});

// info: Sites by subscribed
router.get("/subscribed/:subscribed", async (req, res) => {
  const subscribed = req.params.subscribed === "1" ? true : false;
  let sites = await getSites({ subscribed: subscribed });

  if (!sites) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json({ sites });
});

// info: Sites by cat
router.get("/cat/:cat", async (req, res) => {
  let sites = await getSites({ cat: req.params.cat });

  if (!sites) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json({ sites });
});

// info: Sites by subscribed and cat
router.get("/subscribed/:subscribed/cat/:cat", async (req, res) => {
  const subscribed = req.params.subscribed === "1" ? true : false;
  let sites = await getSites({
    subscribed: subscribed,
    cat: req.params.cat,
  });

  if (!sites) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json({ sites });
});

// MARK: POST
// info: Add Site
router.post("/", async (req, res) => {
  let results = await addSite(req.body);

  if (!results) res.status(HttpStatus.Conflict).json("Site Already Exists");
  else res.status(HttpStatus.Created).json(req.body);
});

// info: Create coll
router.post("/create", async (req, res) => {
  if (req.body.coll) initialSiteColl.push(...req.body);

  let results;

  try {
    results = await createSite(initialSiteColl.pop());
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.NotAcceptable)
      .json("Failed to initialize site collection");
  }

  initialSiteColl.forEach((doc) => {
    try {
      results = addSite(doc);
      if (!results) res.status(HttpStatus.Conflict).json("Site Already Exists");
    } catch (err) {
      console.error(err);
    }
  });

  res.status(HttpStatus.Created).json(req.body);
});

// MARK: PUT
// info: Update site by name
router.put("/name/:name", async (req, res) => {
  let results = await updateSite({ name: req.params.name }, req.body);

  if (!results) res.status(HttpStatus.NotFound).json("Site not found");
  else res.status(HttpStatus.Ok).json(req.body);
});

// MARK: DELETE
// info: Delete site by name
router.delete("/name/:name", async (req, res) => {
  let results = await deleteSite({ name: req.params.name });

  if (!results) res.status(HttpStatus.NotFound).json("Site not found");
  else res.status(HttpStatus.Ok).json("Site deleted");
});

// info: Delete all sites
router.delete("/", async (req, res) => {
  let results = await deleteAllSites();

  if (!results) res.status(HttpStatus.NotFound).json("No sites found");
  else res.status(HttpStatus.Ok).json("All sites deleted");
});

export default router;
