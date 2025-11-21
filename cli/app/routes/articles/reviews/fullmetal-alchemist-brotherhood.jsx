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
  const data = getArticleSpecsById("fullmetal-alchemist-brotherhood");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Fullmetal Alchemist: Brotherhood",
    "jpeg",
    "A review of the 2009 anime series ‘Fullmetal Alchemist: Brotherhood’ by Michael Beebe."
  );
  return reviewMeta;
}
export default function FullmetalAlchemistBrotherhood({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            yeah i mean its legit fs but just didnt rise to the highs of a lot
            of my fav anime while the episodes draggged in the back half.
          </p>
          <p>
            i do love a lot about it tho. the humunculi in general were just
            ripe for character analysis, and their designs went crazy which also
            led to some of the best animation sequences, including: the endless
            pit of Pride's shadowy blades & the varying in stature, yet
            consistently grotesque, forms of Envy (esp when they're in
            Gluttony's stomach omg i was all-in on this show during that episode
            lol).
          </p>
          <p>
            also just like the vast majority of the characters literally work
            for the secret police of a fascist genocidal state, including the
            "good guys", which instantly throws a wrench in our relationships
            with the primary figures in the story. i really appreciated this bc
            it put me in an unsettling (to say the least) perspective and forced
            me to materially analyze characters in order to determine my
            feelings about them throughout.
          </p>
          <p>
            and who could forget Father's consumption of god... pretty fucking
            wild i cant believe that happened, but my primary issue was that it
            was the only thing that i didnt really see coming in the later half.
            *insert alphonse having literal plot armour joke here*
          </p>
          <p>
            i dont want to undersell the high that i had when this show was
            really cooking for me, but it pretty much just played prevent
            defense during the culminating conflict (aside from the whole go up
            to heaven and eat god situation which, again, was dope asf visually
            and conceptually). in conclusion, this kinda just made me wanna
            watch the <i>Hunter x Hunter</i> chimera ant arc now? oh and ling
            yao is a dog i love that guy
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
