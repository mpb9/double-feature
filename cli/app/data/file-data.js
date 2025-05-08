import { ARCHIVE_FILES } from "./archive-data";
import { CLASSICS_FILES } from "./classics-data";
import { FEATURED_FILES } from "./featured-data";
import { LISTS_FILES } from "./lists-data";
import { REVIEWS_FILES } from "./reviews-data";

export const ALL_FILES = [
  ...FEATURED_FILES,
  ...REVIEWS_FILES,
  ...LISTS_FILES,
  ...CLASSICS_FILES,
  ...ARCHIVE_FILES,
];
