import { index, layout, prefix, route } from "@react-router/dev/routes";
import { ROUTE_DIRS } from "./constants";

export default [
  index(`${ROUTE_DIRS.root}home.jsx`),
  route("archive", `${ROUTE_DIRS.root}archive.jsx`),
  route("lists", `${ROUTE_DIRS.root}lists.jsx`),
  route("reviews", `${ROUTE_DIRS.root}reviews.jsx`),
  route("tags", `${ROUTE_DIRS.root}tags.jsx`),

  // info: Featured
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

  // info: Reviews
  layout(`${ROUTE_DIRS.layouts}review.jsx`, [
    ...prefix("review", [
      route("trainspotting", `./${ROUTE_DIRS.reviews}trainspotting.jsx`),
      route("alien", `./${ROUTE_DIRS.reviews}alien.jsx`),
      route("nickel-boys", `./${ROUTE_DIRS.reviews}nickel-boys.jsx`),
      route(
        "fullmetal-alchemist-brotherhood",
        `./${ROUTE_DIRS.reviews}fullmetal-alchemist-brotherhood.jsx`
      ),
      route(
        "requiem-for-a-dream",
        `./${ROUTE_DIRS.reviews}requiem-for-a-dream.jsx`
      ),
      route("rebel-ridge", `./${ROUTE_DIRS.reviews}rebel-ridge.jsx`),
      route("the-curse", `./${ROUTE_DIRS.reviews}the-curse.jsx`),
      route("breathless", `./${ROUTE_DIRS.reviews}breathless.jsx`),
      route(
        "across-the-spider-verse",
        `./${ROUTE_DIRS.reviews}across-the-spider-verse.jsx`
      ),
    ]),
  ]),
];
