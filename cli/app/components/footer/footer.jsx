import { FREQUENT_LINKS } from "../../data/link-data";
import FooterLink from "./footer-link";

export default function Footer({
  links = ["letterboxd", "home", "reviews", "lists", "archive", "about"],
}) {
  return (
    <div
      id="footer"
      className="flex flex-wrap items-center justify-center w-full pt-5 pb-16"
    >
      {links.includes("archive") ? (
        <FooterLink
          name={FREQUENT_LINKS.archive.name}
          url={FREQUENT_LINKS.archive.url}
        />
      ) : (
        <></>
      )}

      {links.includes("lists") ? (
        <FooterLink
          name={FREQUENT_LINKS.lists.name}
          url={FREQUENT_LINKS.lists.url}
        />
      ) : (
        <></>
      )}

      {links.includes("reviews") ? (
        <FooterLink
          name={FREQUENT_LINKS.reviews.name}
          url={FREQUENT_LINKS.reviews.url}
        />
      ) : (
        <></>
      )}

      {links.includes("home") ? (
        <FooterLink
          name={FREQUENT_LINKS.home.name}
          url={FREQUENT_LINKS.home.url}
        />
      ) : (
        <></>
      )}

      {links.includes("letterboxd") ? (
        <FooterLink
          name={FREQUENT_LINKS.letterboxd.name}
          url={FREQUENT_LINKS.letterboxd.url}
        />
      ) : (
        <></>
      )}

      {links.includes("about") ? (
        <FooterLink
          name={FREQUENT_LINKS.about.name}
          url={FREQUENT_LINKS.about.url}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
