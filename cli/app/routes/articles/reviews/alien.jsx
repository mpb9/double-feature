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
  const data = getArticleSpecsById("alien");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Alien",
    "jpeg",
    "A review of the 1979 film ‘Alien’ by Michael Beebe."
  );
  return reviewMeta;
}
export default function Alien({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            I love how slowly paced this is for the first 45 minutes or so. The
            antagonizing ease with which everyone in the crew, aside from Ripley
            of course, are manipulated into bringing the "perfect organism" on
            board?? And, even then, the complete lack of urgency to dispose of
            it while they had a chance?!? It builds suspense along with the
            characters and dynamics so masterfully.
          </p>
          <p>
            Everyone watching this movie for the first time has a gut feeling
            that they <i>"don't like that scientist guy"</i>, but — from my
            experience — the inclination is for audiences to just assume he
            cares more about science than humanity. Not only is that a common
            trope, but we often project that stereotype onto reality. We're all
            desensitized to some extent as to the reality that scientists are
            not solely motivated by their own obsessions. Ninety nine times out
            of a hundred, they're just working at some job for some big company
            doing whatever they're told to do to keep getting their paychecks.
            It's the corporation's interests that matter when trying to
            determine{" "}
            <i>
              "why the hell that creepy looking guy seemingly wants to keep this
              thing alive??!!"
            </i>
            <br />
              
            <br />
            We, as an audience, are conditioned to let scientists tiptoe a few
            moral/logical boundaries without much cause for alarm because
            they're probably just doing it to get their nerdy little fix. We
            forget that even a far fetched, dystopian, and overly indulgent
            scientist's fixations must be funded by a company that profits off
            their successes. Anyways, I think the point has been made:{" "}
            <i>Alien</i>'s mega-corporation, Wayland Yutani, chose the perfect
            job for their cutthroat undercover AI to perform.
          </p>
          <div id="img">
            <img
              src={`${IMG_ROUTES.articles}${articleSpecs.id}/alien-1979-00.jpeg`}
              alt="Crewmembers eating breakfast in Ridley Scott's Alien"
            />
          </div>
          <p>
            In a movie where all the characters are so preoccupied with their
            shares and the absurd "contracts" requiring them to risk their lives
            for corporate greed, the majority never confront Ash about his
            motives or wrecklessness.{" "}
            <b>
              <i>Alien's </i>capitalist critiques are not solely pointed at
              Wayland Yutani, but also towards those who are unwilling to
              critically think about the forces driving other people's actions.
            </b>{" "}
            Basic stereotypes are the easiest way to explain away behavior and,
            therefore, can/are used by the bourgeois to make people turn a blind
            eye to immoral conduct.
          </p>
          <p>
            A lot of stuff about class dynamics between engineers, managers,
            scientists, etc. in this (and in <i>Aliens</i>) that I lack the
            energy to dive into at the moment. What I will say is that the film
            demonstrates how the capitalist class subtly divides the working
            class by using stereotypes to their advantage, applying the
            pressures of task-based wages <i>(see: gig economy)</i>, relying on
            the divisive and immobile nature of bureaucracy, instilling the
            ever-present threat of unemployment, and, of course, deploying an
            undercover AI robot with seemingly superhuman strength and
            stealthiness to make sure everything goes according to plan{" "}
            <i>
              (seriously though, how the fuck did he sneak up on Ripley so
              quietly during the climactic scene when she was talking
              to Mother???)
            </i>
            .
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
