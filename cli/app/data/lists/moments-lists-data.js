import { ArticleSpecs } from "../../models/article-specs";

export const MOMENTS_LISTS = [
  new ArticleSpecs(
    "scenes",
    "Scenes",
    "scenes.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/scenes/detail/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "song-moments",
    "Songs",
    "song-moments.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/song-moments/detail/",
    ["list", "element", "music"]
  ),
  new ArticleSpecs(
    "title-cards",
    "Title Cards",
    "title-cards.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/title-cards/detail/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "endings",
    "Endings",
    "endings.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/endings/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "quotes",
    "Quotes",
    "quotes.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/quotes/detail/",
    ["list", "element"]
  ),
  new ArticleSpecs(
    "montages",
    "Montages",
    "montages.avif",
    true,
    "https://letterboxd.com/michaelbeebe/list/montage/detail/",
    ["list", "element"]
  ),
];

// MARK: ADD L8R...
const FUTURE_MOMENTS = [
  new ArticleSpecs(
    "cried",
    "I Cried at Some Point",
    "cried.jpeg",
    true,
    "https://letterboxd.com/michaelbeebe/list/cried/",
    ["list", "genre"]
  ),
];
