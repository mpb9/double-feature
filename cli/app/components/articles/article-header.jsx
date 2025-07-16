import { IMG_ROUTES } from "../../constants";
import ArticleTags from "./article-tags";

export default function ArticleHeader({ articleSpecs }) {
  return (
    <header
      className="w-full h-[100vh] flex flex-col items-end justify-between bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMG_ROUTES.covers}${articleSpecs.img})`,
      }}
    >
      <ArticleTags tags={articleSpecs.tags} />
      <h1 className="text-3xl md:text-4xl lg:text-5xl bg-black pl-10 pr-7 pt-2.5 pb-4 rounded-tl text-[var(--l-gray)] font-[100] cursor-default">
        {articleSpecs.title}
      </h1>
    </header>
  );
}
