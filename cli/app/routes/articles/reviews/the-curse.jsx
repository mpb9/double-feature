import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("the-curse");
  return data;
}

export default function TheCurse({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          a defining piece of art for the 2020s. i understand why almost no one
          watched it, but its such a shame that The Curse exists on unpopular
          streaming service (paramount+/showtime). The series' unconventionality
          and harsh nature would've been off-putting for the vast majority of
          viewers regardless, but the intentionality of its
          brazenness/awkwardness is so rewarding and is never played for shock
          value. so much depth in general and such an collision of passionate,
          talented, and inquisitive people (fielder, stone, safdie). stone's
          best performance of 2023 (no shade), fielder's most
          unique/thought-provoking project yet (which says a lot), and makes me
          want to dive deeper into safdie's filmography. at the end of the day,
          while it is a shame u need an obscure streaming subscription to watch
          it, im so grateful that the project was funded and developed with so
          much creative freedom. everyone should watch this show for many
          reasons, but most importantly:
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
            against contemporary society's willingness to condone (or glorify)
            those who decide to sell out
          </li>
          <li>modern pressures to act in a performative nature</li>
          <li>exploitation of minorities, service workers, etc.</li>
          <li>reminder that landlords suck</li>
          <li>
            overall just makes you sit with the absurdities of modern reality
          </li>
        </ul>
        <p>
          side note: the cast/crew did some really cool Q&As after each episode
          (this one was with fielder and safdie moderated by fucking christopher
          nolan lmao: [youtube](https://youtu.be/etoG2I6gaHE)) that i encourage
          those interested to check out.
        </p>
      </main>
    </>
  );
}
