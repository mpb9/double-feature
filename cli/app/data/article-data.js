import { FEATURED_ARTICLES } from "./featured-data";
import { LISTS_ARTICLES } from "./lists-data";
import { REVIEWS_ARTICLES } from "./reviews-data";

export const ALL_ARTICLES = [
  ...FEATURED_ARTICLES,
  ...REVIEWS_ARTICLES,
  ...LISTS_ARTICLES,
];
