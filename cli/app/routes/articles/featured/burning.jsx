import ArticleHeader from "../../../components/article/article-header";
import ReviewContent from "../../../components/article/review-content";
import { getFileSpecsById } from "../../../services/file-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getFileSpecsById("burning");
  return data;
}

export default function Burning({ loaderData }) {
  const fileSpecs = loaderData;

  return (
    <>
      <ArticleHeader fileSpecs={fileSpecs} />
      <main>
        <ReviewContent fileSpecs={fileSpecs} htmlMappers={[]} />
        <p>
          Even the damn metaphors are metaphors. All the time spent running and
          driving and pondering and waiting with Jong-su accomplishes so much
          more than just limiting the viewer to his perspective and
          manufacturing empathy for his disposition. As many point out, Miyazaki
          has a propensity to linger with his characters when they find
          themselves in a liminal space (Totoro spends so much tagging along
          with the everyday whims of its protagonists, the Spirited Away train,
          but also that entire movie is literally set between two worlds - same
          goes for Mononoke (yikes these don’t even really apply to the point
          i'm about to make but it felt cool to realize this omg the end of
          Howls too)). But basically I'm thinking abt Miyazaki again because he
          values spending time with characters while they journey through the
          empty space between “action”. He typically deploys this concept, “ma”
          in Japanese, as a moment of rest to allow for imagination, reflection,
          rhythm, and introspection. It just might be the primary reason why
          everyone describes his films as dreamlike, but (finally got to the
          segway) the longer you confine someone in a liminal state, the easier
          it is for tension and dread and anxiety and solitude to creep into
          their day-dream. Miyazaki’s mastery lies in understanding precisely
          how long it will take for the uneasiness of silence to entrench itself
          in the subconscious, choosing only then to allow the audience back to
          the status quo. In Burning, director Lee Chang-dong, dares posit the
          question: what if I were to try and find out just how long it takes
          for liminal anxiety and dread to gain total control over my audience’s
          psyche?
        </p>
      </main>
    </>
  );
}
