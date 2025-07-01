import ArticleHeader from "../../../components/articles/article-header";
import Unfinished from "../../../components/articles/unfinished";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("escapism");
  return data;
}

export default function Escapism({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <Unfinished />
    </>
  );
}
