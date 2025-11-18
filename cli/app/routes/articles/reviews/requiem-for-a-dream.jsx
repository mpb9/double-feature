import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import Thanks from "../../../components/articles/thanks";
import Footer from "../../../components/footer/footer";
import { IMG_ROUTES } from "../../../constants";
import { sleep } from "../../../services/loader-service";
import { reviewMetaBuilder } from "../../../services/meta-service";
import { getArticleSpecsById } from "../../../services/specs-service";
import "../../../styles/article.css";
export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("requiem-for-a-dream");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Requiem for a Dream",
    "jpeg",
    "A review of the 2000 film 'Requiem for a Dream' by Michael Beebe."
  );
  return reviewMeta;
}
export default function RequiemForADream({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            I think I scrolled past this movie like 4x this afternoon after
            having (subconsciously?) made the illogical decision to rely solely
            on Prime Video for my streaming needs. Eventually, I toggled through
            the same 15-20 "suggestions" enough times for my frustration to
            overcome my misguided belief in the streaming service. I
            begrudgingly put my stubbornness aside and took one last glance at
            the movies that were supposedly "for me".
          </p>
          <p>
            <b>I never should've taken that last glance.</b>
          </p>
          <p>
            At some moment in time between my 4th scroll past{" "}
            <i>Requiem For a Dream</i> and <b>that</b> fateful glance, Prime
            broke me. I know this because, when my eyes settled on{" "}
            <i>Requiem For a Dream</i>, I suddenly concluded that, not only had
            I seen it before, but this would be an ideal time for a rewatch.
            About 30 minutes into the movie, I began to wonder why Jim Carrey
            hadn't shown up yet. About 10 seconds later, I realized that the
            movie I'd been watching for the previous half hour was not, in fact,{" "}
            <i>Eternal Sunshine of the Spotless Mind</i>...
          </p>
          <p>
            Also, dude. The{" "}
            <a
              href="https://letterboxd.com/michaelbeebe/list/kon-ranked/"
              target="_blank"
            >
              Satoshi Kon
            </a>{" "}
            "inspired", a.k.a., copycat shots are so brazen I can't believe he
            just{" "}
            <a
              href="https://faroutmagazine.co.uk/satoshi-kon-criticised-darren-aronofsky-copying-perfect-blue/"
              target="_blank"
            >
              rips <i>Perfect Blue</i> off
            </a>{" "}
            to the extent that he does in this?? BUT the stolen shots admittedly
            do still go hard as hell, so I guess credit to Aronofsky for at
            least having great taste in who to steal from{" "}
            <i>
              (the same can also be said about{" "}
              <a
                href="https://consumeyourcinefill.wordpress.com/2021/02/04/surrealism-in-nolans-inception-kons-paprika/"
                target="_blank"
              >
                another American auteur director
              </a>
              )
            </i>
            . Overall, I liked it though lol.
          </p>
          <div>
            <img
              src={`${IMG_ROUTES.articles}${articleSpecs.id}/requiem_vs_perfect_blue.jpeg`}
              alt="Example of Requiem For a Dream stealing a direct shot from Perfect Blue"
            />
          </div>
          <p>
            <i>
              (I would just recommend at least knowing what you're getting into
              because <b>WOW</b> was that an emotionally intense experience that
              I wasn't prepared to endure this afternoon)
            </i>
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
