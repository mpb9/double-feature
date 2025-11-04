import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import Thanks from "../../../components/articles/thanks";
import Footer from "../../../components/footer/footer";
import { IMG_ROUTES } from "../../../constants";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";
import { reviewMetaBuilder } from "../../../services/meta-service";
import "../../../styles/article.css";
export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("28-years-later");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "28 Years Later",
    "jpeg",
    "A review of the 2025 film '28 Years Later' by Michael Beebe.",
    "28 Years Later"
  );
  return reviewMeta;
}
export default function TwentyEightYearsLater({ loaderData }) {
  const articleSpecs = loaderData;
  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            In order to believe in isolationism, you must hide the truth from
            yourself and others. You need to construct a ficticious reality
            that's simpler, easier, and more rewarding than the real world.
            Then, you need to sell it.
          </p>
          <p>
            In the case of <i>28 Years Later</i>, the characters don't have much
            of a choice in the matter. The British Isles are quarantined from
            the rest of the world, and their village is quarantined from the
            rest of the British Isles. There are no means of rejoining broader
            society, so their community is forced to embrace the dishonesties of
            isolationism as a means of survival. They must lie to themselves,
            their families, and their peers in order to extract meaning from
            their daily lives. They need to exist in a fabricated reality as a
            means of being somewhat proud of their "accomplishments" and their
            community.
          </p>
          <p>
            In short, when you're in isolation, you have to pretend that things
            are better than they are. There's nothing out there. It's chaos.
            It's zombies hanging dong. That fire over there? There's something
            sinister about it. If there is a doctor somewhere out there in the
            wilderness, they've gone insane with bloodlust.
          </p>
          <p>
            In order to sustain itself, the isolated community in{" "}
            <i>28 Years Later</i> pretends everything is 20% stronger, everyone
            is 20% healthier, and daily tasks are 20% more courageous or
            important or whatever. Like any society of a similar ilk, these
            self-deceptions are useful in the beginning, and they remain in tact
            for some time, maybe one generation, before everything comes apart
            at the seams (because obviously the whole point is that you can't
            really live in isolation, you have to try and expand, you know,
            grow, evolve, whatever).
          </p>
          <div id="img">
            <img
              src={`${IMG_ROUTES.articles}${articleSpecs.id}/28_years_later-2025-00.jpeg`}
              alt="The bone temple in 28 Years Later"
            />
          </div>
          <p>
            Eventually, the first generation of isolationists are tasked with
            convincing their children that the way society functions is{" "}
            <i>totallyyy fineee</i>. They've resigned themselves to this state
            of being by tricking themselves into believing that their world is
            okay just the way it is. They just need to convince the younger
            generation (the second generation after the rage virus) to succumb
            to their collective psychosis. This, of course, is an impossible
            task in the long-term.
          </p>
          <p>
            Once the youth start catching onto the lies about how{" "}
            <i>"exceptional it is here compared to the outside world"</i> and
            how <i>"there's nothing else anywhere except for pain"</i>, the
            community will be forced to reckon with the buried truths of their
            reality. They realize that the people going out to fight aren't as
            heroic as they're being portrayed{" "}
            <i>
              (there are plenty of analogies to be made to the domestic
              perceptions of militaries (namely those of the American/British
              variety), but alas)
            </i>
            . Regardless of the mode, motive, or malliciousness of
            mass-deception, the truth <b>will</b> unravel in a matter of time.
            The youth will always be prone to challenging the status quo and
            unearthing the issues that plague their society, and{" "}
            <i>28 Years Later</i>'s study on isolationism emphasizes this
            unavoidable dilemna.
          </p>
          <p>
            We can't always shelter ourselves and others from reality (
            <i>cough</i> Brexit) (<i>cough</i> Trump-era isolationism) (
            <i>cough</i> sakoku) (<i>cough</i> etc.). Society needs to evolve
            and embrace change to have any chance at survival. This movie is
            about a lot of things that I didn't mention (including death,
            othering, growing up, and masculinity), but its the
            politically/culturally <b>relevant</b> examination of an isolated
            community that jumps off the screen as an ominous forecast for those
            who dare romanticize nationalism or isolationism.
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
