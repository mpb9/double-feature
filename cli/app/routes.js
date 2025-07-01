import { index, layout, prefix, route } from "@react-router/dev/routes";
import { ROUTE_DIRS } from "./constants";

export default [
  index(`${ROUTE_DIRS.root}home.jsx`),
  route("archive", `${ROUTE_DIRS.root}archive.jsx`),
  route("lists", `${ROUTE_DIRS.root}lists.jsx`),
  route("reviews", `${ROUTE_DIRS.root}reviews.jsx`),
  route("tags", `${ROUTE_DIRS.root}tags.jsx`),

  layout(`${ROUTE_DIRS.layouts}article.jsx`, [
    ...prefix("featured", [
      route("25-for-25", `${ROUTE_DIRS.featured}25-for-25.jsx`),
      route("escapism", `${ROUTE_DIRS.featured}escapism.jsx`),
      route(
        "everybody-wants-some",
        `${ROUTE_DIRS.featured}everybody-wants-some.jsx`
      ),
      route("burning", `${ROUTE_DIRS.featured}burning.jsx`),
    ]),
  ]),

  // Reviews
  layout(`${ROUTE_DIRS.layouts}review.jsx`, [
    ...prefix("review", [
      route("trainspotting", `./${ROUTE_DIRS.reviews}trainspotting.jsx`),
    ]),
  ]),
  // Lists
  //...prefix("list", [layout("${ROUTE_DIRS.layouts}article.jsx", [])]),
  // Classics
  //...prefix("classics", [layout("${ROUTE_DIRS.layouts}article.jsx", [])]),
  // Archive
  //...prefix("archive", [layout("${ROUTE_DIRS.layouts}article.jsx", [])]),
];
