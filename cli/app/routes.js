import { index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.jsx"),
  route("archive", "./routes/archive.jsx"),
  route("lists", "./routes/lists.jsx"),
  route("reviews", "./routes/reviews.jsx"),
  route("tags", "./routes/tags.jsx"),
  layout("layouts/article.jsx", [
    ...prefix("featured", [
      route("25-for-25", "routes/articles/featured/25-for-25.jsx"),
      route("escapism", "routes/articles/featured/escapism.jsx"),
      route(
        "everybody-wants-some",
        "routes/articles/featured/everybody-wants-some.jsx"
      ),
      route("burning", "routes/articles/featured/burning.jsx"),
    ]),
  ]),
  // Reviews
  layout("layouts/review.jsx", [
    ...prefix("review", [
      route("trainspotting", "./routes/articles/reviews/trainspotting.jsx"),
    ]),
  ]),
  // Lists
  //...prefix("list", [layout("layouts/article.jsx", [])]),
  // Classics
  //...prefix("classics", [layout("layouts/article.jsx", [])]),
  // Archive
  //...prefix("archive", [layout("layouts/article.jsx", [])]),
];
