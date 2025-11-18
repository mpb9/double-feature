import { ArticleSpecs } from "../../models/article-specs";

export const ELEMENTS_LISTS = [
  new ArticleSpecs(
    "soundtracks",
    "Soundtracks",
    "soundtracks.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/soundtracks/detail/",
    ["list", "element", "music"]
  ),
  new ArticleSpecs(
    "trailers",
    "Trailers!",
    "trailers.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/trailers/detail/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "settings",
    "Settings",
    "settings.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/setting/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "hardest-posters",
    "Posters That Go Hard",
    "hardest-posters.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/hardest-posters/",
    ["list", "element"]
  ),
];

// MARK: ADD L8R...

const FUTURE_ELEMENTS = [
  new ArticleSpecs(
    "theyre-all-so-cool",
    "Intimidatingly Cool Characters",
    "theyre-all-so-cool.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/theyre-all-so-cool/",
    ["list", "element"]
  ),
];
