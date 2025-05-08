import Footer from "../components/footer";
import HomeHeader from "../components/home/home-header";
import HomeSection from "../components/home/home-section";
import { CLASSICS_FILES } from "../data/classics-data";
import { FEATURED_FILES } from "../data/featured-data";
import { LISTS_FILES } from "../data/lists-data";
import { REVIEWS_FILES } from "../data/reviews-data";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center" id="home">
      <HomeHeader />
      <div className="w-full h-screen items-center pl-10 pr-10 overflow-y-scroll pt-36">
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
        <Footer links={["letterboxd", "tags", "archive", "about"]} />
      </div>
    </div>
  );
}
