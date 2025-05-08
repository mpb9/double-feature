import { Outlet } from "react-router";
import { metaBuilder } from "../services/head/meta-service";
import "../styles/article.css";

export function meta() {
  const reviewMeta = metaBuilder("Double Feature - Review");
  return reviewMeta;
}

export default function Review() {
  return (
    <div
      id="article"
      className="flex flex-col w-full max-w-[70em] m-auto pb-5 bg-[var(--l-brown)] min-h-screen"
    >
      <Outlet />
      <div className="flex flex-col items-end mt-8 mb-8 pr-16 text-[var(--dim)] italic">
        <p className="text-[1.05em] font-[400] leading-0">
          thanks for reading (:
        </p>
        <p className="text-[1.05em] font-[400] leading-0">
          - <a href="https://michael-beebe.com">michael</a>
        </p>
      </div>
    </div>
  );
}
