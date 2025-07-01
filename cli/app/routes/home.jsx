import Footer from "../components/footer/footer";
import HomeHeader from "../components/home/home-header";
import HomeSection from "../components/home/home-section";
import { CLASSICS_ARTICLES } from "../data/classics-data";
import { FEATURED_ARTICLES } from "../data/featured-data";
import { LISTS_ARTICLES } from "../data/lists-data";
import { REVIEWS_ARTICLES } from "../data/reviews-data";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center" id="home">
      <HomeHeader />
      <div className="w-full h-screen items-center pl-10 pr-10 overflow-y-scroll pt-28 sm:pt-36">
        <HomeSection
          name={"Featured"}
          files={FEATURED_ARTICLES}
          src={"featured"}
        />
        <HomeSection name={"Reviews"} files={REVIEWS_ARTICLES} src={"review"} />
        <HomeSection name={"Lists"} files={LISTS_ARTICLES} src={"list"} />
        <HomeSection
          name={"Classics"}
          files={CLASSICS_ARTICLES}
          src={"classics"}
        />
        <Footer links={["letterboxd", "tags", "archive", "about"]} />
      </div>
    </div>
  );
}
