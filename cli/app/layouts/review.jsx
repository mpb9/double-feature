import { Outlet } from "react-router";
import Footer from "../components/footer";
import Thanks from "../components/thanks";
import { metaBuilder } from "../services/head/meta-service";
import "../styles/article.css";

export function meta() {
  const reviewMeta = metaBuilder("Review | Double Feature");
  return reviewMeta;
}

export default function Review() {
  return (
    <div id="article">
      <div className="flex flex-col w-full max-w-[70em] m-auto pb-5 bg-[var(--l-brown)] min-h-screen">
        <Outlet />
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
