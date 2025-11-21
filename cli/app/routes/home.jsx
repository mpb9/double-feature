import Footer from "../components/footer/footer";
import HomeHeader from "../components/home/home-header";
import HomeSection from "../components/home/home-section";
import { FEATURED_ARTICLES } from "../data/featured-data";
import { DECADES_LISTS } from "../data/lists/decades-lists-data";
import { DIRECTORS_LISTS } from "../data/lists/directors-lists-data";
import { ELEMENTS_LISTS } from "../data/lists/elements-lists-data";
import { FEATURED_LISTS } from "../data/lists/featured-lists-data";
import { GENRES_LISTS } from "../data/lists/genres-lists-data";
import { MICROGENRES_LISTS } from "../data/lists/microgenres-lists-data";
import { MOMENTS_LISTS } from "../data/lists/moments-lists-data";
import { YEARS_LISTS } from "../data/lists/years-lists-data";
import { REVIEWS_ARTICLES } from "../data/reviews-data";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full" id="home">
      <HomeHeader />
      <div className="h-24 sm:h-28"></div>

      <div className="items-center w-full h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)] px-5 lg:px-14 xl:px-18 overflow-y-scroll">
        {/* FEATURED */}
        <HomeSection
          name={"featured"}
          articleSpecsArr={FEATURED_ARTICLES}
          src={"featured"}
        />

        {/* REVIEWS */}
        <HomeSection
          name={"reviews"}
          articleSpecsArr={REVIEWS_ARTICLES}
          src={"review"}
        />

        {/* LISTS */}
        <HomeSection
          name={"lists"}
          articleSpecsArr={FEATURED_LISTS}
          src={"list"}
        />
        <HomeSection
          name={"/genres"}
          articleSpecsArr={GENRES_LISTS}
          src={"genres"}
        />
        <HomeSection
          name={"/microgenres"}
          articleSpecsArr={MICROGENRES_LISTS}
          src={"microgenres"}
        />
        <HomeSection
          name={"/moments"}
          articleSpecsArr={MOMENTS_LISTS}
          src={"moments"}
        />
        <HomeSection
          name={"/elements"}
          articleSpecsArr={ELEMENTS_LISTS}
          src={"elements"}
        />
        <HomeSection
          name={"/directors"}
          articleSpecsArr={DIRECTORS_LISTS}
          src={"directors"}
        />
        <HomeSection
          name={"/decades"}
          articleSpecsArr={DECADES_LISTS}
          src={"decades"}
        />
        <HomeSection
          name={"/years"}
          articleSpecsArr={YEARS_LISTS}
          src={"years"}
        />

        <Footer
          links={["letterboxd", "lists", "reviews", "archive", "about"]}
        />
      </div>
    </div>
  );
}
