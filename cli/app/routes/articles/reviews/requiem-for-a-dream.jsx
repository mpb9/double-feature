import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("requiem-for-a-dream");
  return data;
}

export default function RequiemForADream({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          i think i scrolled past this movie like 4x this afternoon after having
          (subconsciously?) made the illogical decision to rely solely on prime
          video for my streaming needs. eventually, i toggled through the same
          15-20 "suggestions" enough times for my frustration to overcome my
          misguided belief in prime video. i begrudgingly put my stubbornness
          aside and took one last glance at the movies that were supposedly "for
          me".
        </p>
        <p>
          i never shouldve taken that last glance. at some moment in time
          between my 4th scroll past Requiem For a Dream and that fateful
          glance, prime video broke me. i know this because, when my eyes
          settled on Requiem For a Dream, i suddenly (incorrectly) concluded
          that, not only had i already seen it before, but that now would be an
          ideal time for a rewatch. about 30 minutes into the movie, i began to
          wonder why Jim Carrey hadnt shown up yet. about 10 seconds later, i
          realized that the movie i was watching was not, in fact, Eternal
          Sunshine of the Spotless Mind.
        </p>
        <p>…</p>
        <p>
          also dude the satoshi kon "inspired" copycat shots r so brazen i cant
          believe he just did that BUT they did still go hard asf bc theyre dope
          shots.
        </p>
      </main>
    </>
  );
}
