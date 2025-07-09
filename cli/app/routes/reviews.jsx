import ArticlePreview from "../components/articles/article-preview";
import Footer from "../components/footer/footer";
import { REVIEWS_ARTICLES } from "../data/reviews-data";
import { metaBuilder } from "../services/meta-service";
export function meta() {
  const reviewsMeta = metaBuilder("Reviews");
  return reviewsMeta;
}
export default function Reviews() {
  return (
    <div className="flex flex-col w-full items-start min-h-screen" id="reviews">
      <div className="w-full items-center px-24 overflow-scroll pt-10">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl font-[100]">Reviews</h1>
          <p className="text-lg font-light">
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
      <div className="flex items-center justify-center w-full px-10 py-5 flex-wrap">
        {REVIEWS_ARTICLES.map((articleSpecs, index) => (
          <ArticlePreview
            key={index}
            articleSpecs={articleSpecs}
            src={"review"}
          />
        ))}
      </div>
      <Footer links={["letterboxd", "tags", "archive", "home", "about"]} />
    </div>
  );
}
