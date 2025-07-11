import ArticlePreview from "../components/articles/article-preview";
import Footer from "../components/footer/footer";
import { LISTS_ARTICLES } from "../data/lists-data";
import { REVIEWS_ARTICLES } from "../data/reviews-data";
import { metaBuilder } from "../services/meta-service";

export function meta() {
  const archiveMeta = metaBuilder(
    "Archive | Double Feature",
    "Archive | Make it a Double Feature",
    "bar-sign.png",
    "A collection of articles, reviews, lists, and other film-related content by Michael Beebe.",
    "archive",
    "#9da598"
  );
  return archiveMeta;
}

export default function Archive() {
  return (
    <div className="flex flex-col items-start w-full" id="archive">
      <div className="items-center w-full px-10 pt-10 overflow-scroll sm:px-14 md:px-24 lg:px-26 xl:px-14">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-4xl font-[100]">Archive</h1>
          <p className="mt-1 text-xl font-light">
            A collection of articles, reviews, lists, and other film-related
            content by{" "}
            <a
              href="https://michael-beebe.com"
              className="underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
            >
              Michael Beebe
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full pl-10 pr-4 py-5">
        {REVIEWS_ARTICLES.map((articleSpecs, index) => (
          <ArticlePreview
            key={index}
            articleSpecs={articleSpecs}
            src={"review"}
          />
        ))}
        {LISTS_ARTICLES.map((articleSpecs, index) => (
          <ArticlePreview
            key={index}
            articleSpecs={articleSpecs}
            src={"list"}
          />
        ))}
      </div>
      <Footer links={["letterboxd", "lists", "reviews", "home", "about"]} />
    </div>
  );
}
