import { Outlet } from "react-router";
import Thanks from "../components/articles/thanks";
import Footer from "../components/footer/footer";
import { metaBuilder } from "../services/meta-service";
import "../styles/article.css";

export function meta() {
  const articleMeta = metaBuilder(
    "Double Feature | Article",
    "Make it a Double Feature | Article",
    "#69d346"
  );
  return articleMeta;
}

export default function Article() {
  return (
    <div id="article">
      <div className="flex flex-col w-full items-center m-auto bg-transparent min-h-screen">
        <Outlet />
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
