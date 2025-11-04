import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import Thanks from "../../../components/articles/thanks";
import Footer from "../../../components/footer/footer";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";
import { reviewMetaBuilder } from "../../../services/meta-service";
import "../../../styles/article.css";
export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("breathless");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Breathless",
    "jpeg",
    "A review of the 1960 film 'Breathless' by Michael Beebe."
  );
  return reviewMeta;
}
export default function Breathless({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            I get why it was so influential and I get why it's held the test of
            time and I get why so many ppl adore it I'm just not totally there.
            There's a lot of stuff going on that I not only appreciate but
            really like... including the plot structure, pacing, and shots that
            were all not only radical at the time, but still quite
            unconventional today in many ways. I also enjoyed the thematic
            aspects (gender, youth, relationships, relationship with art, and so
            on) and was really into how the characters were foils of one another
            in unique, meaningful ways. I definitely saw a lot of myself in
            Patricia (which says something I guess lol).
          </p>
          <p>
            Anyways, I had very high expectations given the film's reputation
            and how much I enjoyed my first Godard film,{" "}
            <a
              href="https://letterboxd.com/michaelbeebe/film/masculin-feminin/"
              target="_blank"
            >
              <i>Masculin Féminin</i>
            </a>
            . While I appreciate the character of Michel, I found his persona
            redundant past the point of thematic relevance lol... that, in
            addition to not finding anything in particular that truly moved me
            emotionally or intellectually, left me a bit underwhelmed (given my
            lofty expectations). Still excited to check out more Godard and will
            definitely be returning to this when the time is right.
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
