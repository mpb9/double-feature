import { Outlet } from "react-router";
import Footer from "../components/footer";
import Thanks from "../components/thanks";
import { metaBuilder } from "../services/head/meta-service";
import "../styles/article.css";

export function meta() {
  const articleMeta = metaBuilder("Double Feature");
  return articleMeta;
}

export default function Article() {
  return (
    <div
      id="article"
      className="flex flex-col w-full max-w-[70em] m-auto bg-[var(--l-brown)] min-h-screen"
    >
      <Outlet />
      <Thanks />
      <Footer />
    </div>
  );
}
