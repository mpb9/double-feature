import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import Thanks from "../../../components/articles/thanks";
import Footer from "../../../components/footer/footer";
import { sleep } from "../../../services/loader-service";
import { reviewMetaBuilder } from "../../../services/meta-service";
import { getArticleSpecsById } from "../../../services/specs-service";
import "../../../styles/article.css";
export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("10-things-i-hate-about-you");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "10 Things I Hate About You",
    "jpeg",
    "A review of the 1999 film '10 Things I Hate About You' by Michael Beebe."
  );
  return reviewMeta;
}
export default function TenThingsIHateAboutYou({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            Every time I watch this movie I get <i>slightly</i> concerned that
            it's not as amazing as I remembered. The first half or so is a
            really solid high school movie, but then it shifts into another gear
            so quickly it's almost overwhelming how charming, thoughtful,
            hilarious, and romantic it becomes. That next gear is named Heath
            Ledger and holy fuck was he an incredible actor. The adjectives I
            used to describe the second half of <i>10 Things</i> are (obviously
            not) coincidentally exactly how I'd describe his performance. He was
            a truly <b>generational</b> talent the likes of which I don't think
            we've seen since.
          </p>
          <p>
            Now I know I oversimplified it by literally inferring the only
            reason this movie morphs into a masterpiece is bc of Ledger, but I
            was lying bc bizarrely every single aspect of it is firing on all
            cylinders for like the final 30 minutes. Stiles is really great in
            this too and her performance during{" "}
            <a href="https://youtu.be/31N_HM2f9Ks?si=FQkrRlEHvL7Gswzi">
              <i>that</i>
            </a>{" "}
            iconic scene at the end always gets to me. It's just impossible not
            to leave this movie with a smile on ur face even if u were lowkey
            tearing up a few mins ago and trying to hide it from ur parents.
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
