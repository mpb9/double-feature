import TopBar from "../components/nav/top-bar";
import { metaBuilder } from "../services/meta-builder-service";

export function meta() {
  const errorMeta = metaBuilder("Error", "#ff0000");
  return errorMeta;
}
export default function ErrorPage({ message, details, stack }) {
  return (
    <main className="flex flex-col w-full min-h-screen pt-16 p-10 bg-[#ff000044] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]">
      <TopBar />
      <h1 className="py-6 text-2xl">{message}</h1>
      <p className="pb-6">{details}</p>
      {stack && (
        <pre className="w-full p-2 overflow-x-auto bg-[var(--black)] text-[#9da598]">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
