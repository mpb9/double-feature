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
          name={"Featured"}
          files={FEATURED_ARTICLES}
          src={"featured"}
        />

        {/* REVIEWS */}
        <HomeSection name={"Reviews"} files={REVIEWS_ARTICLES} src={"review"} />

        {/* LISTS */}
        <HomeSection name={"Lists"} files={FEATURED_LISTS} src={"list"} />
        <HomeSection name={"Genres"} files={GENRES_LISTS} src={"genres"} />
        <HomeSection
          name={"Microgenres"}
          files={MICROGENRES_LISTS}
          src={"microgenres"}
        />
        <HomeSection name={"Moments"} files={MOMENTS_LISTS} src={"moments"} />
        <HomeSection
          name={"Elements"}
          files={ELEMENTS_LISTS}
          src={"elements"}
        />
        <HomeSection
          name={"Directors"}
          files={DIRECTORS_LISTS}
          src={"directors"}
        />
        <HomeSection name={"Decades"} files={DECADES_LISTS} src={"decades"} />
        <HomeSection name={"Years"} files={YEARS_LISTS} src={"years"} />

        <Footer
          links={["letterboxd", "lists", "reviews", "archive", "about"]}
        />
      </div>
    </div>
  );
}
