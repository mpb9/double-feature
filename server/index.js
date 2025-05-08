import cors from "cors";
import express from "express";
import boxd from "./routes/boxd.routes.js";
import color from "./routes/color.routes.js";
import site from "./routes/site.routes.js";
import siteCat from "./routes/siteCat.routes.js";

const PORT = process.env.PORT || 2046;
const app = express();

// info: Middleware
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
app.use(express.json());

// info: Routes
app.use("/api/site", site);
app.use("/api/boxd", boxd);
app.use("/api/site_cat", siteCat);
app.use("/api/color", color);
app.get("/", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// info: Start the server
app.listen(PORT, () =>
  console.log(`\nmovies/server listening on port ${PORT}!`)
);
