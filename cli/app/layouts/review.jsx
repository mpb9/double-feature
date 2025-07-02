import { Outlet } from "react-router";
import Thanks from "../components/articles/thanks";
import Footer from "../components/footer/footer";
import { metaBuilder } from "../services/head/meta-service";
import "../styles/article.css";

export function meta() {
  const reviewMeta = metaBuilder("Review | Double Feature");
  return reviewMeta;
}

export default function Review() {
  return (
    <div id="article">
      <div className="flex flex-col w-full items-center m-auto pb-5 bg-transparent min-h-screen">
        <Outlet />
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
