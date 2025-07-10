import { Outlet } from "react-router";
import Thanks from "../components/articles/thanks";
import Footer from "../components/footer/footer";
import { metaBuilder } from "../services/meta-service";
import "../styles/article.css";

// ! being used (route.js) but almost identical to article.jsx... i will reconfigure it later

export function meta() {
  const reviewMeta = metaBuilder(
    "Review | Double Feature",
    "Review | Make it a Double Feature"
  );
  return reviewMeta;
}

export default function Review() {
  return (
    <div id="article">
      <div className="flex flex-col items-center w-full min-h-screen m-auto bg-transparent">
        <Outlet />
        <Thanks />
        <Footer />
      </div>
    </div>
  );
}
