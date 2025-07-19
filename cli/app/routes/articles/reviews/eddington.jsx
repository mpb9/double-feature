import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { IMG_ROUTES } from "../../../constants";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("eddington");
  return data;
}

export default function Eddington({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />

        <p>
          Everyone's performative. Everyone's opportunistic. Everyone's a
          grifter. Everyone's paranoid. Everyone's distracted. Everyone
          <b>*</b> suffers.
        </p>
        <p>
          <i>
            <b>*</b> except the big tech company and the unelected political
            "advisor" that were pulling the strings the whole time (duh)
          </i>
        </p>
        <br />
        <p>P.S.</p>
        <p>
          Sorry, I just wanted to add a cultural/political observation, but it
          didn't really fit in my cheeky little review… I like how the
          "distraction" keeping characters from sticking to their initial
          logic/ideology was (almost always){" "}
          <b>
            <i>the opportunity to</i>
          </b>{" "}
          grift in one form or another. Whether it's getting elected, amassing a
          cult, aligning with populist politics, talking to a girl, or becoming
          an Alt-Right Gen-Z influencer, the characters are constantly
          compromising something in the pursuit of money and status without even
          wanting to "think about it". The capitalists and politicians that
          dangle these distractions are, of course, the ultimate grifters.
        </p>
        <p />
        <img
          src={`${IMG_ROUTES.articles}${articleSpecs.id}/eddington-meme.png`}
          alt="Eddington meme"
        />
      </main>
    </>
  );
}
