import { DECADES_LISTS } from "./lists/decades-lists-data";
import { DIRECTORS_LISTS } from "./lists/directors-lists-data";
import { ELEMENTS_LISTS } from "./lists/elements-lists-data";
import { FEATURED_LISTS } from "./lists/featured-lists-data";
import { GENRES_LISTS } from "./lists/genres-lists-data";
import { MICROGENRES_LISTS } from "./lists/microgenres-lists-data";
import { MOMENTS_LISTS } from "./lists/moments-lists-data";
import { YEARS_LISTS } from "./lists/years-lists-data";
export const LISTS_ARTICLES = [
  ...FEATURED_LISTS,
  ...GENRES_LISTS,
  ...MICROGENRES_LISTS,
  ...ELEMENTS_LISTS,
  ...MOMENTS_LISTS,
  ...DIRECTORS_LISTS,
  ...DECADES_LISTS,
  ...YEARS_LISTS,
];
