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
  const data = getArticleSpecsById("superman");
  return data;
}
export function meta() {
  const reviewMeta = reviewMetaBuilder(
    "Superman",
    "jpeg",
    "A review of the 2025 film ‘Superman’ by Michael Beebe."
  );
  return reviewMeta;
}
export default function Superman({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <ArticleHeader articleSpecs={articleSpecs} />
        <main>
          <ArticleInfo articleSpecs={articleSpecs} />
          <p>
            I liked that it had good politics, and I really liked how overt the
            political messages were (anti-Israel + anti-ICE, to be specific).
            The bar is miles below the basement floor, but I still found it
            encouraging that the biggest blockbuster of the summer was so
            heavy-handed with its anti-genocide, anti-billionaire, and
            pro-immigration themes.
          </p>
          <p>
            There's a big difference between Bong Joon Ho{" "}
            <i>
              (
              <a href="https://collider.com/bong-joon-ho-movies-anti-capitalist-ranked/">
                anti-capitalist king
              </a>
              )
            </i>{" "}
            releasing an overtly political, anti-billionaire genre movie
            depicting genocide in 2025 and the biggest movie of the year{" "}
            <i>(that carries the weight of DC's financial future)</i> delivering
            these messages. I fucking hate that we need to rely on these
            mega-franchises as signifiers of cultural shifts, but with how
            market researched their every decision is, it does indicate
            something about the general public shifting to a more humane
            approach to politics.
          </p>
          <p>
            Otherwise, I just don't like James Gunn's winky style of filmmaking,
            but I was having a good time for the vast majority. I don't think I
            felt any other emotion besides contentment tho lol. Anyways. Solid
            movie. Had fun. Cautiously optimistic about what it means for
            populist politics going forward. Still couldn't care less about the
            future of this DCU 2.0 thing.
          </p>
        </main>
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
