import { FREQUENT_LINKS } from "../data/link-data";
import HomeLink from "./home/home-link";

export default function Footer({
  links = ["letterboxd", "home", "tags", "archive", "about"],
}) {
  return (
    <div className="flex flex-wrap w-full justify-center items-center pt-4 pb-14">
      {links.includes("letterboxd") ? (
        <HomeLink
          name={FREQUENT_LINKS.letterboxd.name}
          url={FREQUENT_LINKS.letterboxd.url}
        />
      ) : (
        <></>
      )}
      {links.includes("tags") ? (
        <HomeLink
          name={FREQUENT_LINKS.tags.name}
          url={FREQUENT_LINKS.tags.url}
        />
      ) : (
        <></>
      )}
      {links.includes("archive") ? (
        <HomeLink
          name={FREQUENT_LINKS.archive.name}
          url={FREQUENT_LINKS.archive.url}
        />
      ) : (
        <></>
      )}
      {links.includes("home") ? (
        <HomeLink
          name={FREQUENT_LINKS.home.name}
          url={FREQUENT_LINKS.home.url}
        />
      ) : (
        <></>
      )}
      {links.includes("about") ? (
        <HomeLink
          name={FREQUENT_LINKS.about.name}
          url={FREQUENT_LINKS.about.url}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
