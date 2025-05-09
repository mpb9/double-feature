import ArticleTags from "./article-tags";

const IMG_DIR = "img";
export default function ArticleHeader({ fileSpecs }) {
  const { title, img, src, url, tags, date } = fileSpecs;
  const baseUrl = "http://localhost:3000/tag";

  return (
    <header
      className="w-full min-h-50 md:min-h-64 lg:min-h-80 flex flex-col items-end justify-between bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(/${IMG_DIR}/${fileSpecs.img})` }}
    >
      <ArticleTags tags={fileSpecs.tags} />
      <h1 className="text-5xl bg-[var(--l-brown)] pl-10 pt-2 rounded-tl-lg pr-6 text-[var(--l-gray)] font-[100] cursor-default">
        {fileSpecs.title}
      </h1>
    </header>
  );
}
