import ArticlePreview from "../components/articles/article-preview";
import Footer from "../components/footer/footer";
import { LISTS_ARTICLES } from "../data/lists-data";
import { metaBuilder } from "../services/meta-service";

export function meta() {
  const listsMeta = metaBuilder(
    "Lists | Double Feature",
    "Lists | Make it a Double Feature"
  );
  return listsMeta;
}
export default function Lists() {
  return (
    <div className="flex flex-col items-start w-full min-h-screen" id="lists">
      <div className="items-center w-full px-10 pt-10 overflow-scroll sm:px-14 md:px-24">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-4xl font-[100]">Lists</h1>
          <p className="mt-1 text-lg font-light">
            A collection of lists by{" "}
            <a
              href="https://michael-beebe.com"
              className="underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
            >
              Michael Beebe
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full px-10 py-5">
        {LISTS_ARTICLES.map((articleSpecs, index) => (
          <ArticlePreview
            key={index}
            articleSpecs={articleSpecs}
            src={"list"}
          />
        ))}
      </div>
      <Footer links={["letterboxd", "reviews", "archive", "home", "about"]} />
    </div>
  );
}
