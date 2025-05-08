import HomeHeader from "../components/home/home-header";
import HomeLink from "../components/home/home-link";
import HomeSection from "../components/home/home-section";
import { CLASSICS_FILES } from "../data/classics-data";
import { FEATURED_FILES } from "../data/featured-data";
import { LISTS_FILES } from "../data/lists-data";
import { REVIEWS_FILES } from "../data/reviews-data";
import { DEFAULT_META } from "../services/meta-builder-service";

export function meta() {
  return DEFAULT_META;
}

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center" id="home">
      <HomeHeader />
      <div className="w-full h-screen items-center pl-10 pr-10 overflow-y-scroll pb-20 pt-36">
        <HomeSection
          name={"Featured"}
          files={FEATURED_FILES}
          src={"featured"}
        />
        <HomeSection name={"Reviews"} files={REVIEWS_FILES} src={"review"} />
        <HomeSection name={"Lists"} files={LISTS_FILES} src={"list"} />
        <HomeSection
          name={"Classics"}
          files={CLASSICS_FILES}
          src={"classics"}
        />
        <div className="flex w-full justify-center items-center pt-10">
          <HomeLink
            name={"Letterboxd"}
            url={"https://letterboxd.com/michaelbeebe/"}
          />
          <HomeLink name={"Tags"} url={""} />
          <HomeLink name={"Archive"} url={""} />
          <HomeLink name={"About Me"} url={"https://michael-beebe.com"} />
        </div>
      </div>
      {/* <HomeFooter /> */}
    </div>
  );
}
