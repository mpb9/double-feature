import ArticlePreview from "../components/articles/article-preview";
import Footer from "../components/footer/footer";
import { REVIEWS_ARTICLES } from "../data/reviews-data";
import { metaBuilder } from "../services/meta-service";
export function meta() {
  const reviewsMeta = metaBuilder(
    "Reviews | Double Feature",
    "Reviews | Make it a Double Feature",
    "#69d346"
  );
  return reviewsMeta;
}
export default function Reviews() {
  return (
    <div className="flex flex-col items-start w-full min-h-screen" id="reviews">
      <div className="items-center w-full px-10 pt-10 overflow-scroll sm:px-14 md:px-24">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-4xl font-[100]">Reviews</h1>
          <p className="mt-1 text-lg font-light">
            A collection of reviews by{" "}
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
        {REVIEWS_ARTICLES.map((articleSpecs, index) => (
          <ArticlePreview
            key={index}
            articleSpecs={articleSpecs}
            src={"review"}
          />
        ))}
      </div>
      <Footer links={["letterboxd", "lists", "archive", "home", "about"]} />
    </div>
  );
}
