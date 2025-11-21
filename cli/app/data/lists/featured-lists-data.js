import { ArticleSpecs } from "../../models/article-specs";

export const FEATURED_LISTS = [
  new ArticleSpecs(
    "all-time-favs",
    "Favorite Films",
    "all-time-favs.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/all-time-favs/",
    ["list", "ranking", "best of"]
  ),
  new ArticleSpecs(
    "directors",
    "Favorite Directors",
    "directors.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/directors/detail/",
    ["list", "ranking", "favorite", "director"]
  ),
  new ArticleSpecs(
    "recommendations",
    "Recommendations",
    "recommendations.avif",
    true,
    "https://letterboxd.com/michaelbeebe/list/please-watch-neon-genesis-evangelion/",
    ["list", "recommendation"]
  ),
  new ArticleSpecs(
    "never-wanted-it-to-end",
    "Never Wanted It to End",
    "never-wanted-it-to-end.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/never-wanted-it-to-end/",
    ["list"]
  ),
];

// MARK: ADD L8R...

const FUTURE_FEATURED = [
  new ArticleSpecs(
    "movies-my-mom-would-like",
    "Movies My Mom Would Like",
    "movies-my-mom-would-like.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/movies-my-mom-would-like/",
    ["list", "recommendation"]
  ),
  new ArticleSpecs(
    "four-quadrant",
    "Four Quadrant",
    "four-quadrant.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/four-quadrant/",
    ["list", "recommendation"]
  ),
  new ArticleSpecs(
    "movie-x-friend",
    "MOVIExFRIEND",
    "movie-x-friend.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/movie-x-friend/detail/",
    ["list", "recommendation", "friend"]
  ),
];
