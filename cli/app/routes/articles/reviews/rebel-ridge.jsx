import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("rebel-ridge");
  return data;
}

export default function RebelRidge({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          Like "
          <a href="https://boxd.it/C69e" rel="nofollow" target="_blank">
            <i>How To Blow Up a Pipeline</i>
          </a>
          " but abt cops/judicial system as opposed to climate change. While the
          primary focuses differ, both movies make it abundantly clear that
          systemic racism and capitalistic greed create the pressures and
          sustain the environment for injustice.
        </p>
        <p>
          In <i>Rebel Ridge</i>, Aaron Pierre plays a former marine named Terry
          who, as a result of his military experience, approaches tasks with the
          acronym PACE (Primary Alternative Contingency Emergency) in mind. In
          rapid succession, the corruption of a police force and the complicity
          of the local judicial system negate Terry's primary, alternative, and
          contingency plans for delivering the bail money needed to save his
          cousin from confronting his former gang members in prison. The movie
          ironically uses US military defined logic as the protagonist's
          rationale when he revolts against the same system he once enlisted to
          protect. By their own definition his only option is to combat
          oppression by any means necessary. When it becomes evident that
          economic pressures have poisoned a justice system so deeply that it
          survives on injustice, then the system must be abolished.. and Terry
          fucks that shit up in the most satisfying humane way possible.
        </p>
        <p>
          Tying it back into <i>How To Build a Pipeline</i> again (perhaps
          unfairly).. they both outline one's duty to revolt against oppressive
          systems and proceed to make the defiance incredibly engaging and
          cinematic (setting aside my cynicism in regards to performative
          revolution to avoid another tangent). Basically,{" "}
          <i>"Pipeline" : heist movie :: "Ridge" : western</i>.
          <br />
          <br />I really liked this movie - just the sheer intensity and
          sincerity as well as the acting and pacing. My only familiarity with
          the director, Jeremy Saulnier, comes from people recommending "
          <a href="https://boxd.it/a75m" rel="nofollow" target="_blank">
            <i>Green Room</i>
          </a>
          "and knowing it's supposed to be scary/violent/well-regarded. That
          being said, I feel the elements of horror in this as well - esp in a
          few particularly disturbing interactions with the police officers.
          This movie does have a few character tropes that, while well executed,
          follow predictable arcs (both female leads). Aside from that I don't
          really see any need to nitpick when there's no need to, and I thought
          this was a dope ass movie so there!
        </p>
        <p>
          <i>
            (I've seen more movies besides this and{" "}
            <i>How To Blow Up a Pipeline</i>I promise)
          </i>
        </p>
      </main>
    </>
  );
}
