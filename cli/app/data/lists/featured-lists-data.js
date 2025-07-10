import { ArticleSpecs } from "../../models/article-specs";

export const FEATURED_LISTS = [
  new ArticleSpecs(
    "all-time-favs",
    "Favorite Films",
    "all-time-favs.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/all-time-favs/",
    ["list", "ranking", "best of"]
  ),
  new ArticleSpecs(
    "directors",
    "Favorite Directors",
    "directors.jpeg",
    "",
    "https://letterboxd.com/michaelbeebe/list/directors/detail/",
    ["list", "ranking", "favorite", "director"]
  ),
  new ArticleSpecs(
    "recommendations",
    "Recommendations",
    "recommendations.gif",
    "",
    "https://letterboxd.com/michaelbeebe/list/please-watch-neon-genesis-evangelion/",
    ["list", "recommendation"]
  ),
  new ArticleSpecs(
    "never-wanted-it-to-end",
    "Never Wanted It to End",
    "never-wanted-it-to-end.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/never-wanted-it-to-end/",
    ["list"]
  ),
];
