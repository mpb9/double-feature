import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("nickel-boys");
  return data;
}

export default function NickelBoys({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} />
        <p>
          i love when directors try new things, and i'm generally liable to
          overrate movies just for being unique. now. that being said. not only
          do i think filming this movie from the literal pov of the main
          characters was interesting, I felt that it added a necessary layer to
          the storytelling. I'm not sure that the pov really helped me empathize
          with them more (this movie would've been emotionally devastating
          regardless lol), but I was captivated by the way that the camera moves
          with the boys' gaze and even turns away at times. As the film went on,
          I grew increasingly attuned to the camera's movement as another form
          of character building. That aspect alone is reason to watch, but its
          also not as intrusive as you might be thinking. really sad, really
          well done, possibly the most four star movie I've ever seen
        </p>
      </main>
    </>
  );
}
