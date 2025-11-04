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
  const data = getArticleSpecsById("the-curse");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "The Curse",
    "jpeg",
    "A review of the 2023 series 'The Curse' by Michael Beebe."
  );
  return reviewMeta;
}
export default function TheCurse({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            a defining piece of art for the 2020s. i understand why almost no
            one watched it, but its such a shame that <i>The Curse</i> exists
            exclusively on unpopular streaming services (paramount+/showtime).
            the series' unconventionality and harsh nature would've been
            off-putting for the vast majority of viewers regardless, but the
            intentionality of its brazenness/awkwardness is <i>so</i> rewarding
            and never played for shock value… just so much depth in general and
            such a collision of passionate, talented, and inquisitive people at
            the peak of their powers, including:
            <ul>
              <li>
                Nathan Fielder directing/co-leading in his most
                unique/thought-provoking project yet{" "}
                <a href="https://www.theringer.com/2017/11/14/tv/nathan-for-you-season-4-finale-finding-frances">
                  (which says a lot)
                </a>{" "}
                <i>
                  &nbsp;[edit: its a post-
                  <a href="https://www.theguardian.com/tv-and-radio/2025/may/26/the-rehearsal-season-two-review-nathan-fielder">
                    'The Rehearsal' season 2
                  </a>{" "}
                  world, and i <b>still</b> stand by this statement]
                </i>
              </li>
              <li>
                Emma Stone delivering her best performance of 2023 (no shade,{" "}
                <i>
                  <a href="https://letterboxd.com/michaelbeebe/film/poor-things-2023/">
                    Poor Things
                  </a>
                </i>
                )
              </li>
              <li>
                Benny Safdie reminding me, yet again, that i need to dive deeper
                into his filmography
              </li>
            </ul>
            <p>
              at the end of the day, while it is a shame u need an obscure
              streaming subscription to watch it, im so grateful that the
              project was funded and developed with so much creative freedom.
              everyone should watch this show for many reasons, but most
              importantly:
            </p>
          </p>
          <ul>
            <li>incredible acting</li>
            <li>
              experimental filmmaking elements (serves as great intro for ppl
              wanting to get into weird cinema)
            </li>
            <li>
              forces you out of comfort zone from a sociological/political
              perspective
            </li>
            <li>commentary on the soullessness of commercialized activism</li>
            <li>
              identifies what "selling out" looks like today and pushes back
              against how neoliberal society willingly condones (and often
              glorifies) those who decide to sell out
            </li>
            <li>
              nuanced, unabashed exploration of the modern pressures to act in a
              performative nature
            </li>
            <li>
              villianizes the subtle ways in which people in positions of power
              exploit minorities, service workers, etc.
            </li>
            <li>reminder that landlords suck</li>
            <li>
              overall just makes you sit with the absurdities of contemporary
              society and the ways in which we're complicit in the systems of
              oppression that exist in our world, especially in the context of
              capitalism and the entertainment industry
            </li>
          </ul>
          <p>
            <i>
              side note: the cast/crew did some really cool Q&As after each
              episode (<a href="https://youtu.be/etoG2I6gaHE">this one</a>{" "}
              featuring Fielder and Safdie was moderated by fucking Christopher
              Nolan lmao) that i encourage anyone with any level of
              interest/curiosity to check out.
            </i>
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
