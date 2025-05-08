import HomeLink from "./home/home-link";

const LINK_SPECS = {
  letterboxd: {
    name: "Letterboxd",
    url: "https://letterboxd.com/michaelbeebe/",
  },
  home: {
    name: "",
    url: "",
  },
  tags: {
    name: "Tags",
    url: "",
  },
  archive: {
    name: "Archive",
    url: "",
  },
  about: {
    name: "About Me",
    url: "https://michael-beebe.com",
  },
};
export default function Footer({
  links = ["letterboxd", "home", "tags", "archive", "about"],
}) {
  return (
    <div className="flex w-full justify-center items-center pt-10 pb-20">
      {links.includes("letterboxd") ? (
        <HomeLink
          name={LINK_SPECS.letterboxd.name}
          url={LINK_SPECS.letterboxd.url}
        />
      ) : (
        <></>
      )}
      {links.includes("tags") ? (
        <HomeLink name={LINK_SPECS.tags.name} url={LINK_SPECS.tags.url} />
      ) : (
        <></>
      )}
      {links.includes("archive") ? (
        <HomeLink name={LINK_SPECS.archive.name} url={LINK_SPECS.archive.url} />
      ) : (
        <></>
      )}
      {links.includes("home") ? (
        <HomeLink name={LINK_SPECS.home.name} url={LINK_SPECS.home.url} />
      ) : (
        <></>
      )}
      {links.includes("about") ? (
        <HomeLink name={LINK_SPECS.about.name} url={LINK_SPECS.about.url} />
      ) : (
        <></>
      )}
    </div>
  );
}
