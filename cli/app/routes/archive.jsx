import FilePreview from "../components/file-preview";
import Footer from "../components/footer";
import { ARCHIVE_FILES } from "../data/archive-data";
import { metaBuilder } from "../services/head/meta-service";

export function meta() {
  const archiveMeta = metaBuilder("Archive");
  return archiveMeta;
}
export default function Archive() {
  return (
    <div className="flex flex-col w-full items-start" id="archive">
      <div className="w-full items-center px-24 overflow-scroll pt-10">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl font-[100]">Archive</h1>
          <p className="text-xl font-light">
            A collection of all the reviews, lists, series, and other
            film-related content by{" "}
            <a
              href="https://michael-beebe.com"
              className="underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300"
            >
              Michael Beebe
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-10 py-5 flex-wrap">
        {ARCHIVE_FILES.map((fileSpecs, index) => (
          <FilePreview key={index} fileSpecs={fileSpecs} src={"archive"} />
        ))}
      </div>
      <Footer links={["letterboxd", "tags", "home", "about"]} />
    </div>
  );
}
