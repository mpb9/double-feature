import ArticleHeader from "../../../components/article/article-header";
import { getFileSpecsById } from "../../../services/file-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getFileSpecsById("trainspotting");
  return data;
}

export default function Trainspotting({ loaderData }) {
  const fileSpecs = loaderData;
  return (
    <>
      <ArticleHeader fileSpecs={fileSpecs} />
      <main>
        <h2 id="-2025-03-07-https-boxd-it-93m20x-">
          <a href="https://boxd.it/93M20x">2025-03-07</a>
        </h2>
      </main>
    </>
  );
}
