import { index, layout, prefix, route } from "@react-router/dev/routes";
import { DIR_ROUTES } from "./constants";

export default [
  index(`${DIR_ROUTES.root}home.jsx`),
  route("archive", `${DIR_ROUTES.root}archive.jsx`),
  route("lists", `${DIR_ROUTES.root}lists.jsx`),
  route("reviews", `${DIR_ROUTES.root}reviews.jsx`),

  layout(`${DIR_ROUTES.layouts}article.jsx`, [
    // info: Featured
    ...prefix("featured", [
      route("25-for-25", `${DIR_ROUTES.featured}25-for-25.jsx`),
      // route("escapism", `${DIR_ROUTES.featured}escapism.jsx`),
      route(
        "across-the-spider-verse",
        `./${DIR_ROUTES.featured}across-the-spider-verse.jsx`
      ),
      route(
        "everybody-wants-some",
        `${DIR_ROUTES.featured}everybody-wants-some.jsx`
      ),
      route("trainspotting", `./${DIR_ROUTES.featured}trainspotting.jsx`),
    ]),
  ]),

  layout(`${DIR_ROUTES.layouts}review.jsx`, [
    // info: Reviews
    ...prefix("review", [
      route("eddington", `./${DIR_ROUTES.reviews}eddington.jsx`),
      route("superman", `./${DIR_ROUTES.reviews}superman.jsx`),
      route("28-years-later", `./${DIR_ROUTES.reviews}28-years-later.jsx`),
      route("alien", `./${DIR_ROUTES.reviews}alien.jsx`),
      route("burning", `${DIR_ROUTES.reviews}burning.jsx`),
      route("nickel-boys", `./${DIR_ROUTES.reviews}nickel-boys.jsx`),
      route(
        "fullmetal-alchemist-brotherhood",
        `./${DIR_ROUTES.reviews}fullmetal-alchemist-brotherhood.jsx`
      ),
      route(
        "requiem-for-a-dream",
        `./${DIR_ROUTES.reviews}requiem-for-a-dream.jsx`
      ),
      route("rebel-ridge", `./${DIR_ROUTES.reviews}rebel-ridge.jsx`),
      route("the-curse", `./${DIR_ROUTES.reviews}the-curse.jsx`),
      route("breathless", `./${DIR_ROUTES.reviews}breathless.jsx`),
    ]),
  ]),

  ...prefix("review", [
    route(
      "10-things-i-hate-about-you",
      `./${DIR_ROUTES.reviews}10-things-i-hate-about-you.jsx`
    ),
  ]),
];
