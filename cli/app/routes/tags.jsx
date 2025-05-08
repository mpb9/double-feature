import Footer from "../components/footer";
import { metaBuilder } from "../services/head/meta-service";

export function meta() {
  const tagsMeta = metaBuilder("Tags");
  return tagsMeta;
}
export default function Tags() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen" id="tags">
      <div className="w-full items-center pl-10 pr-10 overflow-scroll pb-26 pt-36">
        <div className="flex flex-col w-full pb-4">
          <div className="flex flex-row w-full text-4xl font-[100] tracking-widest pl-0">
            <h1>
              <a
                href={`/tags`}
                className="text-[#69d34688] hover:text-[#69d346] uppercase group hover:font-[300] duration-300"
              >
                ____
                <i className="pl-2 pr-1 text-[#9da598] group-hover:text-[#69d346] uppercase">
                  Tags
                </i>
                ____
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Footer links={["letterboxd", "home", "archive", "about"]} />
    </div>
  );
}
