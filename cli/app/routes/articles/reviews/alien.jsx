import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("alien");
  return data;
}

export default function Alien({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          i love how slowly paced this is for the first like third. watching how
          easily everyone in the crew, aside from Ripley ofc, are manipulated
          into allowing the bringing the "perfect organism" on board their ship
          and even then lacking the urgency to dispose of it while they had a
          chance. Everyone watching this movie for the first time knows that
          they <i>"don't like that scientist guy," </i>but, from my experience,
          the inclination is for audiences to just think he cares more about
          science than humanity. Not only is that a common trope, but we see it
          often in reality. We're all desensitized to some extent as to the
          reality that scientists are not solely motivated by their own
          obsessions, they're generally just working on a job for a company.
          It's the company's interests that matter when it comes to trying to
          figure out{" "}
          <i>"why the creepy looking guy keeps keeping this thing alive".</i>
          <br />
            
          <br />
          We let some little scientist tiptoe a few moral/logical boundaries so
          they can get their fix, but we forget that every far fetched,
          dystopian, or just unsafe scientist's fixations must be funded by a
          party with financial capital on the line relying on their successes.
          Anyways I think the point has been made, but <i>Alien</i>'s Wayland
          Yutani mega-corporation chose the perfect job for their cutthroat AI
          implant to perform.
        </p>
        <p>
          In a movie where all the characters are so preoccupied with their
          shares and the absurd "contracts" requiring them to risk their lives
          for corporate greed, the majority never confront Ash about his motives
          or recklessness. I think <i>Alien's </i>capitalist critiques are not
          solely pointed at Waylan Yutani, but at those who are unwilling to
          critically think about the forces driving other ppl's actions. Basic
          stereotypes are the easiest way to explain away behavior and therefore
          can/are used by the ruling class to make ppl turn a blind eye to
          immoral behavior. 
        </p>
        <p>
          A lot of stuff abt class dynamics between engineers, captain,
          scientists, etc in this (and <i>Aliens</i>), but the only thing I'll
          add is that the film demonstrates how to subtly divide the working
          class thru the use of stereotypes to their advantage, the pressures of
          task-based wages, the divisive + immobile nature of bureaucracy, and
          the undercover AI with seemingly superhuman strength and stealthiness
          (how tf did he sneak up on her when she was talking to mother???).
        </p>
      </main>
    </>
  );
}
