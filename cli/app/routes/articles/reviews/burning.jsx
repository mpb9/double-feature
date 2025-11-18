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
  const data = getArticleSpecsById("burning");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Burning",
    "jpeg",
    "A review of the 2018 film ‘Burning’ by Michael Beebe."
  );
  return reviewMeta;
}
export default function Burning({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} htmlMappers={[]} />
          <p>
            Even the damn metaphors are metaphors. All the time spent running
            and driving and pondering and waiting with Jong-su accomplishes so
            much more than just limiting the viewer to his perspective and
            manufacturing empathy for his disposition. As many point out,
            Miyazaki has a propensity to linger with his characters when they
            find themselves in a liminal space (<i>Totoro</i> spends so much
            tagging along with the everyday whims of its protagonists, the{" "}
            <i>Spirited Away</i> train, but also that entire movie is literally
            set between two worlds - same goes for <i>Mononoke</i> (yikes these
            don’t even really apply to the point i'm about to make but it felt
            cool to realize this omg the end of
            <i>Howls</i> too)). But basically I'm thinking abt Miyazaki again
            because he values spending time with characters while they journey
            through the empty space between “action”. He typically deploys this
            concept, “ma” in Japanese, as a moment of rest to allow for
            imagination, reflection, rhythm, and introspection. It just might be
            the primary reason why everyone describes his films as dreamlike,
            but (finally got to the segway) the longer you confine someone in a
            liminal state, the easier it is for tension and dread and anxiety
            and solitude to creep into their day-dream. Miyazaki’s mastery lies
            in understanding precisely how long it will take for the uneasiness
            of silence to entrench itself in the subconscious, choosing only
            then to allow the audience back to the status quo. In <i>Burning</i>
            , director Lee Chang-dong, dares posit the question: what if I were
            to try and find out just how long it takes for liminal anxiety and
            dread to gain total control over my audience’s psyche?
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
