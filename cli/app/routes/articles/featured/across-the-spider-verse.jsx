import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("across-the-spider-verse");
  return data;
}

export default function AcrossTheSpiderVerse({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          When I first watched{" "}
          <a href="https://letterboxd.com/michaelbeebe/film/spider-man-into-the-spider-verse/">
            <i>Into the Spider-Verse</i>
          </a>
          , I was high a kite and absolutely dug every minute of it. A few
          months later, I watched it again and I don't know man… It was just one
          of those really exciting moments of serendipity where something you're
          starting to get into at the time gets totally propelled into an
          obsession because of an artistic experience.
        </p>
        <p>
          It was the fall of 2020, and I was starting to take a 2D Graphics
          Computer Science class. Meaning I was learning a lot about graphics, I
          guess, whatever, but the point is that the animation in{" "}
          <i>Into the Spider-Verse</i> was just absolutely blowing me away on a
          technical <i>and</i> aesthetic level. It was like "wow, this is really
          cool they're trying so many new things".
        </p>
        <p>
          Then, as these things often go, I went on to YouTube and started
          watching a ton of videos about all things <i>Spider-Verse</i>. In my
          journey down this particular YouTube rabbit hole, I discovered that
          the creators had spent a lot of time{" "}
          <a href="https://youtu.be/l-wUKu_V2Lk?si=N2WlHYRNAbwHXzj0">
            explaining their creative and technical processes
          </a>
          . They were constantly experimenting and using animation/graphics as a
          storytelling tool in unique, creative ways. The film ignited my desire
          to learn more and more about the world of animation which, in turn,
          catalyzed my interest in computer graphics.
        </p>
        <p>
          The role that <i>Into the Spider-Verse</i> played on my ongoing
          fascination with animation was so overwhelming that the movie just
          always kind of stuck with me as an canonical film experience.
          Obviously, that's not to mention the depth of the characters, the
          world building in Brooklyn, and just like the themes (family dynamics,
          obviously coming of age, race, generational divides, etc.) The theme
          that <i>Across the Spider-Verse</i> builds on the most, finding your
          people, stuck with me more than any other due to its nuances in both
          films: its not just trying to fit into a group because you're lonely
          or you're bored or there's peer pressure… it's about wanting to
          surround yourself with people you think are cool and inspiring…
          wanting to be accepted by people who are doing something that you want
          to be doing… I don't know, it's just cool, it's cool, healthy, and
          universal.
        </p>
        <p>
          And so yeah, going into my first <i>Across the Spider-Verse</i>{" "}
          viewing, the hype around it was like <i>so</i> intense. The{" "}
          <a href="https://youtu.be/shW9i6k8cB0?si=xu2QZZlk3t30W7-I">
            trailers
          </a>{" "}
          were crazy, it was going to feature all different types of animation,
          and the reviews were comparing it to legendary animated/superhero
          films. All indications were that they really had gone to another
          level.
        </p>
        <p>
          But to me, I held <i>Into the Spider-Verse</i> in such high esteem
          that it was going to take something monumental for <i>Across</i> to
          compare to its predocessor. So when I left my{" "}
          <i>Across the Spider-Verse</i> screening, I was like, damn, that was
          awesome but not <i>quite</i> as mind-blowing (i know i was being
          cynical and <i>perhaps</i> unfairly harsh).
        </p>
        <p>
          I really liked what they were expanding upon in the sequel, like the
          themes of acceptance, the family aspect, and, again, finding your
          community… The desire to be amongst your peers, but not to go too far
          as to conform. Like, Miles Morales really, <i>really</i> wants to be
          part of this community, and, when he eventually gets there, he doesn't
          like what he sees. You need people, like Miles, to not only point out
          what needs to change, but to spur on the complicate, like-minded
          members to put change into action. It's never easy to be that
          individual, especially when you're new to a group, but it often takes
          fresh, unjaded perspectives to identify the core issues in any
          environment. <i>Across the Spider-Verse</i> not only challenges us to
          see past the idealized version of the community we want to join but to
          actively identify and solve the issues plaguing said group.
        </p>
        <p>
          Also, I mean, I think it's a trans allegory, which is really cool. I
          mean it might not be, but I'm going to read it as such regardless (and
          its really easy to do so). Oh! also I love{" "}
          <a href="https://youtu.be/yL4GEKcTX04?si=vtqnXpFi70FrRU9T">
            Spider-Punk
          </a>
          .
        </p>
        <p>
          It's been a journey of trying to like compare the two films. I love
          them both, but this time around <i>Across the Spider-Verse</i>,
          similarly to the second time I watched <i>Into</i>, kind of hit me on
          a different level. The animation <i>is</i> groundbreaking, the themes{" "}
          <i>are</i> as rich as the first, and the movie <i>does</i> belong
          amongst the canons of animated and superhero films.
        </p>
      </main>
    </>
  );
}
