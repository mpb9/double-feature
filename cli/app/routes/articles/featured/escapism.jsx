import ArticleHeader from "../../../components/article/article-header";
import { getFileSpecsById } from "../../../services/file-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getFileSpecsById("escapism");
  return data;
}

export default function Escapism({ loaderData }) {
  const fileSpecs = loaderData;

  return (
    <>
      <ArticleHeader fileSpecs={fileSpecs} />
      <main>
        <h2>{fileSpecs.title}</h2>
      </main>
    </>
  );
}
