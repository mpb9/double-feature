import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Link, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { House } from "@phosphor-icons/react";
import PropTypes from "prop-types";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
function ErrorPage({ message, details, stack }) {
  return /* @__PURE__ */ jsxs("main", { className: "flex flex-col w-full min-h-screen items-center pt-16 p-10 bg-[#ff000044] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]", children: [
    /* @__PURE__ */ jsx("nav", { className: "absolute top-0 right-4 md:right-7 xl:right-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "flex items-center p-1 text-[var(--l-pink)] opacity-70 transition-discrete duration-300 cursor-pointer rounded-xl hover:scale-110 mt-3.5 xl:mt-5",
        children: /* @__PURE__ */ jsx(House, { weight: "light", size: 60, color: "var(--l-pink)" })
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "pt-20 pb-6 text-4xl text-[var(--l-red)]", children: message }),
    /* @__PURE__ */ jsx("p", { className: "pb-6 text-xl text-[var(--l-pink)]", children: details }),
    stack && /* @__PURE__ */ jsx("pre", { className: "w-full p-2 overflow-x-auto bg-[var(--black)] text-[#9da598]", children: /* @__PURE__ */ jsx("code", { children: stack }) })
  ] });
}
const DEFAULT_LINKS = [
  { rel: "icon", href: "/two-tickets.png" },
  { rel: "apple-touch-icon", href: "/two-tickets.png" },
  { rel: "me", href: "mailto:michaelbeebe1031@gmail.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function metaBuilder(title = "Double Feature", color = "#131315") {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title },
    {
      name: "description",
      content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
    },
    {
      name: "author",
      content: "Michael Beebe"
    },
    {
      name: "keywords",
      content: "double feature, movies, film, cinema, michael beebe, reviews, film series"
    },
    {
      name: "google",
      content: "notranslate"
    },
    {
      name: "og:title",
      content: "Double Feature"
    },
    {
      name: "og:description",
      content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
    },
    {
      name: "og:image",
      content: "https://static.wixstatic.com/media/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg/v1/fill/w_1000,h_559,al_c,q_85,usm_0.66_1.00_0.01/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg"
    },
    {
      name: "og:url",
      content: "https://makeitadoublefeature.com/"
    },
    {
      name: "og:type",
      content: "website"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "Double Feature"
    },
    {
      name: "twitter:description",
      content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
    },
    {
      name: "twitter:image",
      content: "https://static.wixstatic.com/media/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg/v1/fill/w_1000,h_559,al_c,q_85,usm_0.66_1.00_0.01/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg"
    },
    {
      name: "twitter:url",
      content: "https://makeitadoublefeature.com/"
    },
    {
      name: "twitter:site",
      content: "@mbeeebe"
    },
    {
      name: "twitter:creator",
      content: "@mbeeebe"
    },
    {
      name: "theme-color",
      content: color
    },
    { name: "robots", content: "index, follow" },
    { name: "revisit-after", content: "1 days" },
    { name: "rating", content: "general" },
    { name: "distribution", content: "global" },
    { name: "language", content: "en-US" },
    { name: "googlebot", content: "index, follow" },
    { name: "googlebot-news", content: "index, follow" },
    { name: "googlebot-image", content: "index, follow" },
    { name: "googlebot-video", content: "index, follow" }
  ];
}
const DEFAULT_META = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "Double Feature" },
  {
    name: "description",
    content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
  },
  {
    name: "author",
    content: "Michael Beebe"
  },
  {
    name: "keywords",
    content: "double feature, movies, film, cinema, michael beebe, reviews, film series"
  },
  {
    name: "google",
    content: "notranslate"
  },
  {
    name: "og:title",
    content: "Double Feature"
  },
  {
    name: "og:description",
    content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
  },
  {
    name: "og:image",
    content: "https://static.wixstatic.com/media/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg/v1/fill/w_1000,h_559,al_c,q_85,usm_0.66_1.00_0.01/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg"
  },
  {
    name: "og:url",
    content: "https://makeitadoublefeature.com/"
  },
  {
    name: "og:type",
    content: "website"
  },
  {
    name: "twitter:card",
    content: "summary_large_image"
  },
  {
    name: "twitter:title",
    content: "Double Feature"
  },
  {
    name: "twitter:description",
    content: "Home to all my film-based endevours, featuring my blogs, reviews, and videos along with useful tools/resources for cinephiles."
  },
  {
    name: "twitter:image",
    content: "https://static.wixstatic.com/media/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg/v1/fill/w_1000,h_559,al_c,q_85,usm_0.66_1.00_0.01/86bf1c_2474deedb43449b08ad653412b9cf58a~mv2.jpg"
  },
  {
    name: "twitter:url",
    content: "https://makeitadoublefeature.com/"
  },
  {
    name: "twitter:site",
    content: "@mbeeebe"
  },
  {
    name: "twitter:creator",
    content: "@mbeeebe"
  },
  {
    name: "theme-color",
    content: "#131315"
  },
  { name: "robots", content: "index, follow" },
  { name: "revisit-after", content: "1 days" },
  { name: "rating", content: "general" },
  { name: "distribution", content: "global" },
  { name: "language", content: "en-US" },
  { name: "googlebot", content: "index, follow" },
  { name: "googlebot-news", content: "index, follow" },
  { name: "googlebot-image", content: "index, follow" },
  { name: "googlebot-video", content: "index, follow" }
];
const links = () => [...DEFAULT_LINKS];
const meta$6 = () => [...DEFAULT_META];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsx(ErrorPage, {
    message,
    details,
    stack
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function HomeLink({ name, url }) {
  if (name == "Home" || name == "") {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-col mx-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-between w-full text-2xl font-[200] tracking-widest", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "text-[var(--dim)] underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300",
        children: "HOME"
      }
    ) }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col mx-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-between w-full text-2xl font-[200] tracking-widest", children: url == "" ? /* @__PURE__ */ jsx(
    Link,
    {
      to: `/${name.toLowerCase()}`,
      className: "text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300",
      children: name
    }
  ) : /* @__PURE__ */ jsx(
    "a",
    {
      href: url,
      className: "text-[var(--dim)] uppercase underline underline-offset-8 decoration-[#69d346aa] decoration-2 hover:text-[#69d346] duration-300",
      children: name
    }
  ) }) });
}
const LINK_SPECS = {
  letterboxd: {
    name: "Letterboxd",
    url: "https://letterboxd.com/michaelbeebe/"
  },
  home: {
    name: "",
    url: ""
  },
  tags: {
    name: "Tags",
    url: ""
  },
  archive: {
    name: "Archive",
    url: ""
  },
  about: {
    name: "About Me",
    url: "https://michael-beebe.com"
  }
};
function Footer({
  links: links2 = ["letterboxd", "home", "tags", "archive", "about"]
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-center items-center pt-4 pb-14", children: [
    links2.includes("letterboxd") ? /* @__PURE__ */ jsx(
      HomeLink,
      {
        name: LINK_SPECS.letterboxd.name,
        url: LINK_SPECS.letterboxd.url
      }
    ) : /* @__PURE__ */ jsx(Fragment, {}),
    links2.includes("tags") ? /* @__PURE__ */ jsx(HomeLink, { name: LINK_SPECS.tags.name, url: LINK_SPECS.tags.url }) : /* @__PURE__ */ jsx(Fragment, {}),
    links2.includes("archive") ? /* @__PURE__ */ jsx(HomeLink, { name: LINK_SPECS.archive.name, url: LINK_SPECS.archive.url }) : /* @__PURE__ */ jsx(Fragment, {}),
    links2.includes("home") ? /* @__PURE__ */ jsx(HomeLink, { name: LINK_SPECS.home.name, url: LINK_SPECS.home.url }) : /* @__PURE__ */ jsx(Fragment, {}),
    links2.includes("about") ? /* @__PURE__ */ jsx(HomeLink, { name: LINK_SPECS.about.name, url: LINK_SPECS.about.url }) : /* @__PURE__ */ jsx(Fragment, {})
  ] });
}
function HomeHeader() {
  return /* @__PURE__ */ jsxs("div", { className: "absolute z-10 w-full", id: "home-header", children: [
    /* @__PURE__ */ jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col w-fit items-center h-fit px-[38px] py-4",
        id: "home-title",
        children: [
          /* @__PURE__ */ jsx("h6", { className: "text-lg cursor-default text-[var(--dim)] pb-[3px] font-[100] italic", children: "Ya know what? It's been a long day..." }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl cursor-default text-[#69d346] font-[100]", children: "Make it a Double... Feature." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-10 top-2 right-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col w-fit items-center h-fit px-[24px] py-2", children: /* @__PURE__ */ jsxs("div", { className: "text-xl cursor-default text-right text-[#a5aca0cc] pt-[3px] font-[100]", children: [
      "created by: ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://michael-beebe.com",
          className: "underline underline-offset-8 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300",
          children: "MICHAEL BEEBE"
        }
      )
    ] }) }) })
  ] });
}
const IMG_DIR$1 = "img";
FilePreview.propTypes = {
  fileSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string
  }).isRequired,
  src: PropTypes.string.isRequired
};
function FilePreview({ fileSpecs, src }) {
  const isFeatured = fileSpecs.tags.includes("featured");
  const href = fileSpecs.src.length > 0 ? `/${src}/${fileSpecs.src}` : fileSpecs.url;
  if (href.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4 tracking-normal", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: `/${src}/not-found`,
        className: "w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500",
        style: { backgroundImage: `url(/${IMG_DIR$1}/${fileSpecs.img})` },
        children: /* @__PURE__ */ jsx("div", { className: "static w-full flex items-center justify-end bg-[var(--black)]", children: /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500", children: fileSpecs.title }) })
      }
    ) });
  }
  if (isFeatured) {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-col group items-center justify-center min-w-[90%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[44%] xl:min-w-[40%] h-full mr-8 py-4 tracking-normal", children: /* @__PURE__ */ jsx(
      "a",
      {
        href,
        className: "w-full min-h-56 sm:min-h-64 lg:min-h-72 xl:min-h-80 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500",
        style: { backgroundImage: `url(/${IMG_DIR$1}/${fileSpecs.img})` },
        children: /* @__PURE__ */ jsx("div", { className: "static w-full flex items-center justify-end bg-[var(--black)]", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl pr-4 pb-[3px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500", children: fileSpecs.title }) })
      }
    ) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4 tracking-normal", children: /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: "w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500",
      style: { backgroundImage: `url(/${IMG_DIR$1}/${fileSpecs.img})` },
      children: /* @__PURE__ */ jsx("div", { className: "static w-full flex items-center justify-end bg-[var(--black)]", children: /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[var(--l-gray)] group-hover:text-[#69d346] font-[100] transition duration-500", children: fileSpecs.title }) })
    }
  ) });
}
HomeSection.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      src: PropTypes.string,
      url: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string
    })
  ).isRequired,
  src: PropTypes.string.isRequired
};
function HomeSection({ name, files, src }) {
  const isFeatured = name == "Featured";
  const isClassics = name == "Classics";
  if (isFeatured) {
    return /* @__PURE__ */ jsx("div", { className: "pb-6", id: "home-section", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar", children: files.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, { fileSpecs, src }, index)) }) });
  } else if (isClassics) {
    return /* @__PURE__ */ jsxs("div", { id: "home-section", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-row w-full text-[var(--dim)] text-4xl italic pl-1", children: /* @__PURE__ */ jsxs("h1", { children: [
        "____",
        /* @__PURE__ */ jsx("i", { className: "pl-1 pr-1 cursor-default", children: name }),
        "____"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar", children: files.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, { fileSpecs, src }, index)) })
    ] });
  } else {
    return /* @__PURE__ */ jsxs("div", { id: "home-section", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-row w-full text-4xl font-[100] pl-0", children: /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/${name.toLowerCase()}`,
          className: "text-[#69d34688] hover:text-[#69d346] group",
          children: [
            "____",
            /* @__PURE__ */ jsx("i", { className: "pl-2 pr-1 text-[var(--dim)] group-hover:text-[#69d346] duration-500", children: name }),
            "____"
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth no-scrollbar", children: files.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, { fileSpecs, src }, index)) })
    ] });
  }
}
class FileSpecs {
  constructor(id = "", title = "", img = "", src = "", url = "", tags2 = [], date = "") {
    this.id = id;
    this.title = title;
    this.img = img;
    this.src = src;
    this.url = url;
    this.tags = tags2;
    this.date = date;
  }
}
const CLASSICS_FILES = [
  new FileSpecs(
    "",
    "All-Time Favs",
    "Portrait_of_a_Lady_on_Fire_027.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/all-time-favs/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "",
    "Directors",
    "eyes-wide-shut.jpeg",
    "",
    "https://letterboxd.com/michaelbeebe/list/directors/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "",
    "Scenes",
    "berserk-bonfire.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/scenes/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "",
    "Sci-Fi Canon",
    "children-of-men1.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/sci-fi-canon/",
    ["classics", "lists", "genre"]
  ),
  new FileSpecs(
    "",
    "Settings",
    "ladybird063.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/setting/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "",
    "Soundtracks",
    "Fallen-Angels-066.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/soundtracks/detail/",
    ["classics", "lists"]
  ),
  new FileSpecs(
    "",
    "Trailers",
    "Poor_Things_63.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/trailers/detail/",
    ["classics", "lists"]
  )
];
const FEATURED_FILES = [
  new FileSpecs(
    "25-for-25",
    "25 for 25",
    "socialnetwork.jpg",
    "25-for-25",
    "https://letterboxd.com/michaelbeebe/list/25-for-25/detail/",
    ["featured", "lists"],
    "2025-05-10"
  ),
  new FileSpecs(
    "escapism",
    "Escapism",
    "All-About-Lily-Chou-Chou.jpeg",
    "escapism",
    "",
    ["featured", "series"],
    "2025-05-10"
  ),
  new FileSpecs(
    "everybody-wants-some",
    "Everybody Wants Some!!",
    "everybodywantssome.jpg",
    "everybody-wants-some",
    "https://letterboxd.com/michaelbeebe/film/everybody-wants-some/",
    ["featured", "reviews"],
    "2025-03-07"
  ),
  new FileSpecs(
    "burning",
    "Burning",
    "Burning.jpg",
    "burning",
    "https://letterboxd.com/michaelbeebe/film/burning-2018/",
    ["featured", "reviews"],
    "2025-01-24"
  )
];
const LISTS_FILES = [
  new FileSpecs(
    "",
    "2025",
    "sinners.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/2025/",
    ["lists", "year"],
    "2025-12-31"
  ),
  new FileSpecs(
    "",
    "2020s",
    "Dune_Part_2_09.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/decade-2020s/",
    ["lists", "decade"],
    "2029-12-31"
  ),
  new FileSpecs(
    "",
    "Song Moments",
    "treasure-planet.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/song-moments/detail/",
    ["lists", "music"]
  ),
  new FileSpecs(
    "",
    "Ani(make me consider my purpose)",
    "end-of-eva.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/animake-me-consider-my-purpose-and-existence/",
    ["lists", "show", "anime"]
  ),
  new FileSpecs(
    "",
    "Non-boy Boy Movies",
    "bottle-rocket.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/non-boy-boy-movies/",
    ["lists"]
  )
];
const REVIEWS_FILES = [
  new FileSpecs(
    "nickel-boys",
    "Nickel Boys",
    "nickel-boys.png",
    "",
    "",
    ["reviews"],
    "2025-02-11"
  ),
  new FileSpecs(
    "fullmetal-alchemist-brotherhood",
    "Fullmetal Alchemist: Brotherhood",
    "fma-brotherhood.png",
    "",
    "",
    ["reviews", "show", "spoilers"],
    "2025-02-11"
  ),
  new FileSpecs(
    "requiem-for-a-dream",
    "Requiem for a Dream",
    "requiem-for-a-dream.jpg",
    "",
    "",
    ["reviews"],
    "2024-09-18"
  ),
  new FileSpecs(
    "rebel-ridge",
    "Rebel Ridge",
    "Rebel_Ridge.jpg",
    "",
    "",
    ["reviews"],
    "2024-09-13"
  ),
  new FileSpecs(
    "trainspotting",
    "Trainspotting",
    "trainspotting.jpg",
    "trainspotting",
    "",
    ["reviews"],
    "2024-04-12"
  ),
  new FileSpecs(
    "the-curse",
    "The Curse",
    "the-curse.png",
    "",
    "",
    ["reviews", "show"],
    "2024-01-12"
  )
];
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-center",
    id: "home",
    children: [/* @__PURE__ */ jsx(HomeHeader, {}), /* @__PURE__ */ jsxs("div", {
      className: "w-full h-screen items-center pl-10 pr-10 overflow-y-scroll pt-36",
      children: [/* @__PURE__ */ jsx(HomeSection, {
        name: "Featured",
        files: FEATURED_FILES,
        src: "featured"
      }), /* @__PURE__ */ jsx(HomeSection, {
        name: "Reviews",
        files: REVIEWS_FILES,
        src: "review"
      }), /* @__PURE__ */ jsx(HomeSection, {
        name: "Lists",
        files: LISTS_FILES,
        src: "list"
      }), /* @__PURE__ */ jsx(HomeSection, {
        name: "Classics",
        files: CLASSICS_FILES,
        src: "classics"
      }), /* @__PURE__ */ jsx(Footer, {
        links: ["letterboxd", "tags", "archive", "about"]
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const ARCHIVE_FILES = [
  new FileSpecs(
    "2024",
    "2024",
    "Kinds_of_Kindness_65.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2024/",
    ["lists", "year"],
    "2024-12-31"
  ),
  new FileSpecs(
    "2023",
    "2023",
    "Past_Lives-2023.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2023/",
    ["lists", "year"],
    "2023-12-31"
  ),
  new FileSpecs(
    "2022",
    "2022",
    "Aftersun-2022.png",
    "",
    "https://letterboxd.com/michaelbeebe/list/2022/",
    ["lists", "year"],
    "2022-12-31"
  ),
  new FileSpecs(
    "2021",
    "2021",
    "Dune_2021.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2021/",
    ["lists", "year"],
    "2021-12-31"
  ),
  new FileSpecs(
    "2020",
    "2020",
    "Tenet_005.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2020/",
    ["lists", "year"],
    "2020-12-31"
  ),
  new FileSpecs(
    "2019",
    "2019",
    "Parasite-2019.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2019/",
    ["lists", "year"],
    "2019-12-31"
  ),
  new FileSpecs(
    "",
    "2018",
    "TheFavourite-2018.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2018/",
    ["lists", "year"],
    "2018-12-31"
  ),
  new FileSpecs(
    "2017",
    "2017",
    "bladerunner-2049-2017.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2017/",
    ["lists", "year"],
    "2017-12-31"
  ),
  new FileSpecs(
    "2016",
    "2016",
    "The_Handmaiden-2016.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2016/",
    ["lists", "year"],
    "2016-12-31"
  ),
  new FileSpecs(
    "2015",
    "2015",
    "MadMax-2015.jpg",
    "",
    "https://letterboxd.com/michaelbeebe/list/2015/",
    ["lists", "year"],
    "2015-12-31"
  )
];
function meta$5() {
  const archiveMeta = metaBuilder("Archive");
  return archiveMeta;
}
const archive = withComponentProps(function Archive() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-start",
    id: "archive",
    children: [/* @__PURE__ */ jsx("div", {
      className: "w-full items-center px-24 overflow-scroll pt-10",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col w-full items-start",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-[100]",
          children: "Archive"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-xl font-light",
          children: ["A collection of all the reviews, lists, series, and other film-related content by", " ", /* @__PURE__ */ jsx("a", {
            href: "https://michael-beebe.com",
            className: "underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300",
            children: "Michael Beebe"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex items-center justify-center w-full px-10 py-5 flex-wrap",
      children: ARCHIVE_FILES.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, {
        fileSpecs,
        src: "archive"
      }, index))
    }), /* @__PURE__ */ jsx(Footer, {
      links: ["letterboxd", "tags", "home", "about"]
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: archive,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4() {
  const listsMeta = metaBuilder("Lists", "#a0b1b8");
  return listsMeta;
}
const lists = withComponentProps(function Lists() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-start min-h-screen",
    id: "lists",
    children: [/* @__PURE__ */ jsx("div", {
      className: "w-full items-center px-24 overflow-scroll pt-10",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col w-full items-start",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-[100]",
          children: "Lists"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-lg font-light",
          children: ["A collection of lists by", " ", /* @__PURE__ */ jsx("a", {
            href: "https://michael-beebe.com",
            className: "underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300",
            children: "Michael Beebe"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex items-center justify-center w-full px-10 py-5 flex-wrap",
      children: LISTS_FILES.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, {
        fileSpecs,
        src: "list"
      }, index))
    }), /* @__PURE__ */ jsx(Footer, {
      links: ["letterboxd", "tags", "archive", "home", "about"]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lists,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function meta$3() {
  const reviewsMeta = metaBuilder("Reviews");
  return reviewsMeta;
}
const reviews = withComponentProps(function Reviews() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-start min-h-screen",
    id: "reviews",
    children: [/* @__PURE__ */ jsx("div", {
      className: "w-full items-center px-24 overflow-scroll pt-10",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col w-full items-start",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-[100]",
          children: "Reviews"
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-lg font-light",
          children: ["A collection of reviews by", " ", /* @__PURE__ */ jsx("a", {
            href: "https://michael-beebe.com",
            className: "underline underline-offset-6 decoration-[#69d346aa] decoration-1 text-[var(--dim)] hover:text-[#69d346] duration-300",
            children: "Michael Beebe"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex items-center justify-center w-full px-10 py-5 flex-wrap",
      children: REVIEWS_FILES.map((fileSpecs, index) => /* @__PURE__ */ jsx(FilePreview, {
        fileSpecs,
        src: "review"
      }, index))
    }), /* @__PURE__ */ jsx(Footer, {
      links: ["letterboxd", "tags", "archive", "home", "about"]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: reviews,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2() {
  const tagsMeta = metaBuilder("Tags");
  return tagsMeta;
}
const tags = withComponentProps(function Tags() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-center min-h-screen",
    id: "tags",
    children: [/* @__PURE__ */ jsx("div", {
      className: "w-full items-center pl-10 pr-10 overflow-scroll pb-26 pt-36",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-col w-full pb-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-row w-full text-4xl font-[100] tracking-widest pl-0",
          children: /* @__PURE__ */ jsx("h1", {
            children: /* @__PURE__ */ jsxs("a", {
              href: `/tags`,
              className: "text-[#69d34688] hover:text-[#69d346] uppercase group hover:font-[300] duration-300",
              children: ["____", /* @__PURE__ */ jsx("i", {
                className: "pl-2 pr-1 text-[#9da598] group-hover:text-[#69d346] uppercase",
                children: "Tags"
              }), "____"]
            })
          })
        })
      })
    }), /* @__PURE__ */ jsx(Footer, {
      links: ["letterboxd", "home", "archive", "about"]
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tags,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function Thanks() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end mt-8 mb-8 pr-24 text-[var(--dim)] italic", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[1.05em] font-[400] leading-0", children: "thanks for reading (:" }),
    /* @__PURE__ */ jsxs("p", { className: "text-[1.05em] font-[400] leading-0", children: [
      "- ",
      /* @__PURE__ */ jsx("a", { href: "https://michael-beebe.com", children: "michael" })
    ] })
  ] });
}
function meta$1() {
  const articleMeta = metaBuilder("Double Feature");
  return articleMeta;
}
const article = withComponentProps(function Article() {
  return /* @__PURE__ */ jsxs("div", {
    id: "article",
    className: "flex flex-col w-full max-w-[70em] m-auto bg-[var(--l-brown)] min-h-screen",
    children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Thanks, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: article,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
ArticleTags.propTypes = {
  tags: PropTypes.array.isRequired
};
function ArticleTags({ tags: tags2 }) {
  const baseUrl = "http://localhost:3000/tag";
  return /* @__PURE__ */ jsx("div", { className: "flex justify-end items-center flex-wrap gap-2 pt-2 pr-2", children: tags2.map((tag, index) => /* @__PURE__ */ jsx(
    "a",
    {
      className: "px-2 text-lg text-[var(--green)] bg-[var(--d-gray)] font-[200] rounded italic hover:bg-[var(--green)] hover:text-[var(--l-green)] transition duration-500",
      href: `${baseUrl}:${tag}`,
      style: { textDecoration: "none" },
      children: tag
    },
    index
  )) });
}
const IMG_DIR = "img";
function ArticleHeader({ fileSpecs }) {
  const { title, img, src, url, tags: tags2, date } = fileSpecs;
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "w-full min-h-50 md:min-h-64 lg:min-h-80 flex flex-col items-end justify-between bg-no-repeat bg-cover bg-center",
      style: { backgroundImage: `url(/${IMG_DIR}/${fileSpecs.img})` },
      children: [
        /* @__PURE__ */ jsx(ArticleTags, { tags: fileSpecs.tags }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl bg-[var(--l-brown)] pl-10 pt-2 rounded-tl-lg pr-6 text-[var(--l-gray)] font-[100] cursor-default", children: fileSpecs.title })
      ]
    }
  );
}
const ALL_FILES = [
  ...FEATURED_FILES,
  ...REVIEWS_FILES,
  ...LISTS_FILES,
  ...CLASSICS_FILES,
  ...ARCHIVE_FILES
];
function getFileSpecsById(id) {
  const data = ALL_FILES.find((file) => file.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Not Found"
    });
  }
  return data;
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function loader$4() {
  await sleep(300);
  const data = getFileSpecsById("25-for-25");
  return data;
}
const _25For25 = withComponentProps(function TwentyFiveForTwentyFive({
  loaderData
}) {
  const fileSpecs = loaderData;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ArticleHeader, {
      fileSpecs
    }), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsxs("h2", {
        children: ["1.", " ", /* @__PURE__ */ jsx("a", {
          href: "https://letterboxd.com/michaelbeebe/film/portrait-of-a-lady-on-fire/reviews/",
          children: "Portrait of a Lady on Fire"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "hey this isnt so hard!"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["2.", " ", /* @__PURE__ */ jsx("a", {
          href: "https://letterboxd.com/michaelbeebe/film/paprika-2006/reviews/",
          children: "Paprika"
        }), " "]
      }), /* @__PURE__ */ jsx("p", {
        children: "yep. havent had to make any hard decisions thus far…"
      }), /* @__PURE__ */ jsx("p", {
        children: "on another note… forever mourning the immense immense loss of the singular artist that was Satoshi Kon. he made four outstanding films and a brilliant anime all by the time he was 46. fuck cancer so hard."
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsxs("i", {
          children: ["a few ", /* @__PURE__ */ jsx("b", {
            children: "great"
          }), " youtube vids abt Kon for those interested:"]
        })
      }), /* @__PURE__ */ jsxs("ul", {
        children: [/* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("a", {
            href: "https://youtu.be/2XGYr9_BiEU?si=VqCwBYrGkRmwk9dc",
            children: "Satoshi Kon and Why Love Is All You Need Ep. 1 - Perfect Blue"
          }), " ", "(the first in a series)"]
        }), /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx("a", {
            href: "https://youtu.be/9GzZuRMwbW4?si=VxKEVmV0ZsItUMM-",
            children: "The Work of Satoshi Kon"
          })
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["3.", " ", /* @__PURE__ */ jsx("a", {
          href: "https://letterboxd.com/film/mad-max-fury-road/",
          children: "Mad Max: Fury Road"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "mad max vs. spirited away for the bronze metal is an absolutely brutal matchup. im going with my heart and my gut (but things r getting interesting i dont like that i had to do this)"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["4. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/2b4m",
          children: "Spirited Away"
        })]
      }), /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("p", {
          children: "i think me loving Miyazaki so much, seeing every movie he's made, and having a few personal favs that i cherish more than Spirited Away all worked against it in these rankings…"
        }), /* @__PURE__ */ jsx("p", {
          children: "that is: this time i'm spending trying to justify *only* ranking it the **fourth best film of the past 25 years** is a testimony to how incredible this piece of art is… plz forgive me, Miyazaki-san 😭🫡"
        }), /* @__PURE__ */ jsx("p", {
          children: /* @__PURE__ */ jsx("a", {
            href: "https://letterboxd.com/michaelbeebe/list/ghibli-ranked/",
            children: "Studio Ghibli Movie Rankings"
          })
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["5.", " ", /* @__PURE__ */ jsx("a", {
          href: "https://letterboxd.com/michaelbeebe/film/oppenheimer/reviews/",
          children: "Oppenheimer"
        })]
      }), /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsxs("p", {
          children: [`if u wouldve told me i'd have Nolan ranked above Fincher prior to Oppenheimer's release (not to mention Tenet), i would've been like "whatever man, he's good and all but Social Network AND Zodiac exist??" anyways, this is far and away my fav nolan and has been since`, " ", /* @__PURE__ */ jsx("a", {
            href: "https://letterboxd.com/michaelbeebe/film/oppenheimer-2023/",
            children: "i first watched/reviewed it"
          })]
        }), /* @__PURE__ */ jsx("p", {
          children: "**note: i love tenet and had to mention it, but i wouldnt put it above either of the Fincher films i referenced (just to quell the (uncultured) tenet haters before they get upset abt not having the courage to submit themselves to that incredible film)… also interstellar fucks too i forgot to say anything abt it so there ya go"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["6. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/17ue",
          children: "The Social Network"
        })]
      }), /* @__PURE__ */ jsx("blockquote", {
        children: "Sorry, my Prada’s at the cleaners along with my hoodie and my fuck-you"
      }), /* @__PURE__ */ jsx("p", {
        children: "⭐⭐⭐⭐⭐"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["7. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/28No",
          children: "Pan's Labyrinth"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "u guys seen this shit? i feel like we dont talk abt this shit enough. oh my god i love this movie there's something about how the story is told that cannot be undersold in its beauty. the horrors of our world sigh this is one of the most humanistic films ive seen and i vividly remember the impact it had on me when i first watched it on a laptop while laying down on the foot of my bed in like sophomore, actually prob junior, year of high school. i was so entranced i didnt move an inch. right now, i can still call myself back to that specific emotion it solicited in me… it was a constant wave of complicated, heavy, uncompromised, brutal, beauty. i've watched it a few times since, but i'm more than due for another viewing… guess i got plans for tmrw night"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["8. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/hTha",
          children: "Parasite"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "ya know when something just like absolutely nails all the themes u actively want to seek out in every other piece of artwork u engage with? yeah."
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["9. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/27ww",
          children: "Ratatouille"
        })]
      }), /* @__PURE__ */ jsxs("blockquote", {
        children: ["In many ways, the work of a critic is easy. We risk very little, yet enjoy a position over those who offer up their work and their selves to our judgment. We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so. But there are times when a critic truly risks something, and that is in the discovery and defense of the ", /* @__PURE__ */ jsx("i", {
          children: "new"
        }), `. The world is often unkind to new talent, new creations. The new needs friends. Last night, I experienced something new: an extraordinary meal from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau's famous motto, "Anyone can cook." But I realize, only now do I truly understand what he meant. Not everyone can become a great artist; but a great artist`, /* @__PURE__ */ jsx("i", {
          children: "can"
        }), " come from", /* @__PURE__ */ jsx("i", {
          children: "anywhere"
        }), ". It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's, who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more."]
      }), /* @__PURE__ */ jsx("p", {
        children: "what a life affirming film. i will always cherish it 🐀👨‍🍳"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["10. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/Arw0",
          children: "Aftersun"
        })]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["ok this is the highest ranked movie that ive only watched once. and i watched it on an airplane. if you've seen it, then you can prob picture me hiding in my hoodie letting tears run down my face while the flight attendant asked if i wanted any water or biscoff cookies. i did cannot do justice to how well paced this movie is. there are a few other films on this list that similarly lure the audience in with their pacing, but i've never found myself as hypnotized as i did watching Afterson. i do not recall empathizing with a character so deeply in this manner… feeling all of his broken and unsatisfied soul, aware of time fleeting away, understanding the love he undoubtably carries for his daughter, watching him summon all of the remain will he has to try to make some sort of impact on someone he cares about, but ever-so-slowly recognizing he doesn't have enough left to give… and he knows it. ugh but watching a person who's given up on the world not only find, but summon the spirit to seek out, the occasional moment that justifies him still being here experiencing life and love… its just too much man lol anytime this movie comes up, the fact that it was director Charlotte Wells'", " ", /* @__PURE__ */ jsx("b", {
          children: /* @__PURE__ */ jsx("i", {
            children: "first movie ever"
          })
        }), " ", "is worth bringing up bc omg wtf idk what else to say"]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["11. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/pUfA",
          children: "Dune: Part 2"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: `i dont think ive ever written anything significant abt Dune, which is an unusual thing for me to (not) do when i love something to the extent that i love Dune. the movies both fuck (and so will Messiah, fuck the doubters + trust in Villeneuve's vision), and the books are among my all-time favorites (mandatorily acknowledging that i dont read much ngl). this might be another example of the "Parasite Effect", a term that i just made up. it occurs when i'm just so passionate abt the themes explored and fully aligned with the critiques levelled in films (those akin to Parasite/Dune), and its hard for me to refrain from just saying "hell yeah" or simply listing all the things i love abt them. someday i'll get around to writing more thoughtfully abt Dune, but today is, yet again, not that day.`
      }), /* @__PURE__ */ jsx("p", {
        children: "anyways, here r my fav books (fiction) (unordered):"
      }), /* @__PURE__ */ jsx("ul", {
        children: /* @__PURE__ */ jsxs("i", {
          children: [/* @__PURE__ */ jsx("li", {
            children: "Frankenstein; or, The Modern Prometheus"
          }), /* @__PURE__ */ jsx("li", {
            children: "The Dispossessed"
          }), /* @__PURE__ */ jsx("li", {
            children: "Things Fall Apart"
          }), /* @__PURE__ */ jsx("li", {
            children: "Dune"
          })]
        })
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsx("i", {
          children: "(i like sci-fi)"
        })
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["12. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/1JzG",
          children: "Inglourious Basterds"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "was my fav movie throughout high school and i'm very due to watch it again. my fav tarantino + fuck nazis… its undeniable how entrenched some of these scenes/set-pieces are in the minds of everyone who watched them. that feat alone is incredibly special, but this movie's sum is still greater than its parts… just kind of like a masterclass i suppose lol also: excuse my language, but quentin stop being a little self-righteous bitch and just make another movie y r u more worried abt ur legacy than just making a movie abt whatever ur into at the time? u made a dumb rule for yourself and ur the only one who cares anddd well yeah i just like want u to get over yourself bc u make great movies. not to mention ur wrong to universally criticize the later career works of directors: not only have ppl like Miyazaki and Scorsese both made ur theory look stupid as hell in the past couple of years, and those r just examples off the dome. do whatever u want, i guess, i dont have any right to demand something from an artist, but damn dude i do not understand ur mindset rn"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["13. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/7bQA",
          children: "Whiplash"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "ur so pressed abt whether ur rushing or dragging, but when was the last time u asked urself why the fuck you give such a shit? do you even remember when you stopped loving the thing that u spend every waking moment perfecting? are you aware that you're never going to be able to? are you scared? do you need ur abusive teacher just as much as he needs you? do u feel more at ease with someone pushing you harder than ur capable of being pushed? how have you fallen so deeply into obsession? or, why are you so scared of no longer being able to indulge urself in this obsession that u make a father-figure out of a man whose been broken it? there is no perfecting it, you're now only capable of seeking satisfaction through the same cycle of trauma that's broken the fools that went down this path before you. cmon, miles. let's just go to the movies or something.. oooo i love this movie. in the pantheon of the *director-makes-movie-about-how-self-destructive-it-is-to-make-movies* subgenre (and since its Damien Chazelle, obviously the metaphor for filmmaking is jazz music). the ending is maybe(?) misinterpreted by some ppl, but omg is it devastating…"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["14. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/2b1M",
          children: "Crouching Tiger, Hidden Dragon"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "this movie blew away my expectations… what i was anticipating would've been dope too but i mean cmon now. no one expects something of this magnitude going into a first-time viewing of any film. i was aware of the prestige and universal acclaim, but this is truly an epic in every sense of the word."
      }), /* @__PURE__ */ jsxs("p", {
        children: ["to briefly touch on the fight scenes, they fucking float lol. the moment in the", " ", /* @__PURE__ */ jsx("a", {
          href: "https://youtu.be/ltY3ZLA6dA8?si=1ndg1AeQyZkaYibg",
          children: "initial showdown"
        }), " ", 'between Zhang Ziyi and Michelle Yeoh where they both just take off into the air holy shit its an "omg i love the movies" moment. it instantly communicates the enchanting/romantic nature of these mythic martial artists and their mastery over the craft. and it looks cool as fuckkk']
      }), /* @__PURE__ */ jsx("p", {
        children: "so the leads of this movie (Ziyi, Yeoh, and Chow Yun-Fat) play maybe the three coolest people to ever exist? all of them deliver phenomenal performances, but its impossible not to key in on Zhang Ziyi. as a 20 year old, she's trusted with large chunks of a film that also features two of asia's most renown/beloved actors. needless to say, Ziyi was more than up to the task (lol her character is also just so cool this movie is so cool)"
      }), /* @__PURE__ */ jsx("p", {
        children: "there's a lot that contributes to the magic of this movie (too much to try and list rn), but my fav theme is the suppression of desire between Yeoh and Yun-Fat's characters. i'm not going to spoil, but if you've seen it you know the vibe. what a banger"
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["15. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/k4BO",
          children: "The Brutalist"
        })]
      }), /* @__PURE__ */ jsx("blockquote", {
        children: "My buildings were designed to endure such erosion."
      }), /* @__PURE__ */ jsx("p", {
        children: "a self-indulgent, uncompromised 3 hour epic about the lie at the core of the american dream, how capitalism shackles artists, escapism thru drugs (and fucking zionism), the inability of the bourgeois class to engage with art… idk its just all very up my alley. oh and it took fucking risks!"
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsxs("i", {
          children: ["very thought-provoking", " ", /* @__PURE__ */ jsx("a", {
            href: "https://open.spotify.com/episode/2fUO43K5JsFtCT1bWbcoFp?si=ug-ZU6NMQ028i6zAxUXL_w",
            children: "Big Picture episode featuring Adam Nayman"
          })]
        })
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["16. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/1Y2i",
          children: "Children of Men"
        })]
      }), /* @__PURE__ */ jsxs("p", {
        children: ['lol if The Brutalist was "up my alley", this movie features', " ", /* @__PURE__ */ jsx("a", {
          href: "https://youtu.be/wrALRx95mHs?si=5nY18gnUy8ByZVA0",
          children: "this scene"
        }), ". its unbearable how relevant this film is specifically in regard to america's despicable treatment of immigrants (illegal, legal, whatever it shouldn't matter they're ppl like holy shit have some empathy). the filmmaking in this is maybe the best of the century? the way it demonstrates the infighting that seems to always pop up between leftist factions in the face of oppression is dope + Cuaron empathizes with the correct side + we need to work together to fight the real enemy."]
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsxs("i", {
          children: [/* @__PURE__ */ jsx("a", {
            href: "https://www.goodreads.com/quotes/11243889-in-one-of-the-key-scenes-in-alfonso-cuaron-s-2006",
            children: "quote from Mark Fisher's Capitalist Realism"
          }), " ", "regarding Children of Men"]
        })
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["17. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/1JP0",
          children: "All About Lily Chou-Chou"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["18.", " ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/jUk4",
          children: "Everything Everywhere All at Once"
        })]
      }), /* @__PURE__ */ jsx("p", {
        children: "if there's a common theme on this list, its that im a sucker for sincere cinema."
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["19. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/hNVe",
          children: "Hereditary"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["20. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/d2hI",
          children: "The Favourite"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["21. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/948A",
          children: "The Handmaiden"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["22. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/eOCm",
          children: "Get Out"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["23. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/20hO",
          children: "Superbad"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["24. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/2416",
          children: "Hot Fuzz"
        })]
      }), /* @__PURE__ */ jsxs("h2", {
        children: ["25. ", /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/dGNE",
          children: "Lady Bird"
        })]
      })]
    })]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _25For25,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$3() {
  await sleep(300);
  const data = getFileSpecsById("escapism");
  return data;
}
const escapism = withComponentProps(function Escapism({
  loaderData
}) {
  const fileSpecs = loaderData;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ArticleHeader, {
      fileSpecs
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx("h2", {
        children: fileSpecs.title
      })
    })]
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: escapism,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
ReviewContent.propTypes = {
  fileSpecs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string
  }).isRequired,
  htmlMappers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      element: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      parentId: PropTypes.string
    })
  ).isRequired
};
function ReviewContent({ fileSpecs, htmlMappers }) {
  console.log("fileSpecs", fileSpecs);
  console.log("htmlMappers", htmlMappers);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx("a", { href: fileSpecs.url, children: fileSpecs.date }) }) });
}
async function loader$2() {
  await sleep(300);
  const data = getFileSpecsById("everybody-wants-some");
  return data;
}
const everybodyWantsSome = withComponentProps(function EverybodyWantsSome({
  loaderData
}) {
  const fileSpecs = loaderData;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ArticleHeader, {
      fileSpecs
    }), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsx(ReviewContent, {
        fileSpecs,
        htmlMappers: []
      }), /* @__PURE__ */ jsxs("p", {
        children: [`showed this to my dad, who played college baseball in the early 80s, which was pretty dope. he might've dropped more "this is so damn accurate"s during those 117 minutes than anyone else has over the course of any other 117 minute timespan in human history. i liked this movie plenty my first time watching it, but i definitely felt much more this time around. its impossible not to admire Linklater. just in general. i mean his ability to conjure up distinct moments in time occurring at specific places from the perspectives of people who were of a certain age, but then for it all to feel so universal to the human experience? its fucking evocative.`, " "]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["i want to focus on ", /* @__PURE__ */ jsx("i", {
          children: "Everybody Wants Some!!"
        }), ", but i want to clarify that im not just referring to this and ", /* @__PURE__ */ jsx("i", {
          children: "Dazed"
        }), ". the", " ", /* @__PURE__ */ jsx("i", {
          children: "Before Trilogy"
        }), " films, especially ", /* @__PURE__ */ jsx("i", {
          children: "Sunrise"
        }), ", are overflowing with these unique-yet-shared experiences (and they only need to follow two characters over a couple of hours to do it - so good).", " "]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["um yeah i guess i kind of dug myself a hole here and set the expectation for me to dive deeper on ", /* @__PURE__ */ jsx("i", {
          children: "Everybody Wants Some!!"
        }), `. i don't really have much else to say relating it to what i've been talking about just bc i don't really understand how Linklater does it (don't say "the music" obviously we all love the music and admit it helps but we don't have to be that reductive especially nowadays i mean the discourse is so-). the point i want to make about this film is that its not just a great hang. it is that, of course, but one of the things i locked in on this time around was the characters. they aren't just a who's who of college male archetypes from 1980. these guys almost all have depth and grow throughout the film (sorry, guy with the Narcissusian(?) relationship with his own butt; i don’t really know what else you were up to?). not only is there growth in a “welcome to college” sense, but the characters all become more open to new experiences and increasingly receptive to their peers. in a lot of ways, Glen Powell’s character is the catalyst for the team’s collective trend towards acceptance of each other’s idiosyncrasies and, moreso, their willingness to get out of their comfort zone in new environments.`, " "]
      }), /* @__PURE__ */ jsxs("p", {
        children: [/* @__PURE__ */ jsx("strong", {
          children: " fourth wall break "
        }), " "]
      }), /* @__PURE__ */ jsx("p", {
        children: "this thing abt the characters is actually the last section that im writing (u may b shocked to learn i tend to jump around a lot when i write these so i already wrote the conclusion and whatnot), but im pretty tired, so im only going to explore Powell’s character but i really did mean this to be more of a observation on the strength of the characters overall so just take my word on the others being great too (Pink Floyd guy is my favorite obviously - Fearless playing in the background while they smoked was so lit omg whatta banger. pretty early Floyd for them to be listening to its like a decade old at that point but it is timeless of course. ohhh wait lol that actually checks out that the 30 year old would be the only playing it and getting geeked up abt it omg im wasting energy)."
      }), /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsx("strong", {
          children: " fourth wall reconstructed "
        })
      }), /* @__PURE__ */ jsxs("p", {
        children: ["so, many eagle eyed viewers might have been yelling at their phones/laptops when i said Powell helped everyone open up. said ppl might’ve bemoaned my point with obtuse arguments like “dude they literally r all at college bro. this wasn't Glen Powell compelling them all to become better ppl through the power of charisma or some shit? like obviously they're gonna explore new things and stuff just move on to something else”… i get that pov and actually created this mythical mob of ppl exasperatedly talking to themselves abt my writing in order to refute it. sure, college is an opportunity and our main character, for example, would’ve surely spread his wings and tried out new things regardless of his influences (but it did help). the others, however, often push back on Powell’s insistence that they do XYZ and tease him for fully committing to each unfamiliar environment that they stumble into. we know that his character has an incentive to adapt to whatever crowd the group finds themselves interacting with: it’ll be easier to pick up chicks. this incentive has driven men to acclimate to new environments probably more so than any other (which is dope, so thank you if ur reading this and ur a girl which would be insane come to think of it), but i think Powell’s character isn’t solely, or even primarily, fueled by hookups. this is a guy who ran headfirst into the shittiest looking house in texas bc a teammate he met a week ago stumbled into a high school friend who said they could come inside if they want to hang out… and they'd be hanging out with a bunch of 18 year olds they don't know who are one month into a punk rock obsession. honestly, they seemed pretty dope, but that isn't an invitation that most people would embrace as an opportunity to meet some new people with new perspectives - as evident by the two teammates who really don't want to go inside. plus, no hookup incentive! what we have on our hands is a complex character whose just as eager to learn as he is to get laid as he is to get drunk with his buds. he doesn’t directly hide his desire to keep evolving mentally and socially, but he rarely ever grants himself the freedom to act sincerely either. that was badly worded maybe, but what i mean is Powell’s character exhibits a lot of the traits that many guys do at that age in that environment: posturing everything you say as a bit, letting ppl think you only want to do XYZ to get with a girl, and idk lmk if you think of another example i should really have 3 here. this is a very relatable character, yes, but also just like such common methods of protecting yourself for no good reason other than one of the biggest reasons ppl do stuff: in order to look cool and have ppl want to be around you and admire you ya know so on. this is getting a bit long and might be stretching things slash psychoanalyzing myself again, but i really love how this movie’s charismatic group leader is also a people pleaser who kind of just wants to fully immerse himself in anything and everything he comes across but also he really wants to be with his friends so he just says he’s doing it for the ladies bc it’ll get them to go with him and then he only really expresses his intelligence or new interests through bits/insults. at the end of the day, this might have been way too much on this character i hope i wasn't reaching too hard. next time i watch Linklater’s ", /* @__PURE__ */ jsx("i", {
          children: "Dazed and Confused"
        }), ", i hope i remember to compare him to Randall “Pink” Floyd in my review. they play a similar role as the universally-liked, open-minded, caring guy at the center of their friend group(s). both not assholes in the slightest when they easily could be given their social status. i think “Pink” is already the genuine person that Powell’s character (still not gonna look up his name idc) is trying to suppress tho. idk there’s something there!"]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["quick sidebar: this is my fav Powell performance he’s so charismatic and such a realistic variation of the kind of guy you love to be around (great writing too ofc, maybe him and Linklater should write something together in the future ", /* @__PURE__ */ jsx("em", {
          children: "winky wink"
        }), ")"]
      }), /* @__PURE__ */ jsx("p", {
        children: "also i have no real theory on y tf this movie is called “Everybody Wants Some!!”… i guess its referring to sex maybe but that doesn't make sense bc, even tho they’re all horny college kids who always talk abt picking up chicks and r actually pretty successful at it in practice, this movie is clearly exploring the homoeroticism of a close knit group of college guys (i doubt my college besties r reading this, but if i’m talking to one of them rn: i was thinking of you in particular when i wrote that last sentence). just to keep exploring this… in addition to this being abt a group of undergrad dudes, they’re also teammates. i don't think Linklater decided to make them all baseball players for this reason or anything, but its another layer to their relationships with more clearly defined hierarchies and ample opportunity for isolated competition between individuals (i also played baseball so i guess thats relevant context idk). listen. im not just saying all this as a bit. Glen Powell’s character literally alludes to the homoerotic undertones throughout: comments on the groups’ collective desire to compete with one another, talks abt their inclination to discuss sex/women when they’re alone together, and brings up how often they choose to spend their time with each other instead of women when they all go out to a bar/party. i just think its a cool theme for the film to explore, but it doesn’t bring me any closer to understanding the title. if “Some!!” isn't referring to sex, then idk what its alluding to… just like experiences? i can get behind that, but i think this is just a really good movie by a great filmmaker that is just kind of loosely aligned with a title that probably is referencing the sex or sexual fervor maybe idk (plus there's only like 1 boob in the whole movie so ?)."
      })]
    })]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: everybodyWantsSome,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1() {
  await sleep(300);
  const data = getFileSpecsById("burning");
  return data;
}
const burning = withComponentProps(function Burning({
  loaderData
}) {
  const fileSpecs = loaderData;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ArticleHeader, {
      fileSpecs
    }), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsx(ReviewContent, {
        fileSpecs,
        htmlMappers: []
      }), /* @__PURE__ */ jsx("p", {
        children: "Even the damn metaphors are metaphors. All the time spent running and driving and pondering and waiting with Jong-su accomplishes so much more than just limiting the viewer to his perspective and manufacturing empathy for his disposition. As many point out, Miyazaki has a propensity to linger with his characters when they find themselves in a liminal space (Totoro spends so much tagging along with the everyday whims of its protagonists, the Spirited Away train, but also that entire movie is literally set between two worlds - same goes for Mononoke (yikes these don’t even really apply to the point i'm about to make but it felt cool to realize this omg the end of Howls too)). But basically I'm thinking abt Miyazaki again because he values spending time with characters while they journey through the empty space between “action”. He typically deploys this concept, “ma” in Japanese, as a moment of rest to allow for imagination, reflection, rhythm, and introspection. It just might be the primary reason why everyone describes his films as dreamlike, but (finally got to the segway) the longer you confine someone in a liminal state, the easier it is for tension and dread and anxiety and solitude to creep into their day-dream. Miyazaki’s mastery lies in understanding precisely how long it will take for the uneasiness of silence to entrench itself in the subconscious, choosing only then to allow the audience back to the status quo. In Burning, director Lee Chang-dong, dares posit the question: what if I were to try and find out just how long it takes for liminal anxiety and dread to gain total control over my audience’s psyche?"
      })]
    })]
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: burning,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
function meta() {
  const reviewMeta = metaBuilder("Double Feature - Review");
  return reviewMeta;
}
const review = withComponentProps(function Review() {
  return /* @__PURE__ */ jsxs("div", {
    id: "article",
    className: "flex flex-col w-full max-w-[70em] m-auto pb-5 bg-[var(--l-brown)] min-h-screen",
    children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Thanks, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: review,
  meta
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  await sleep(300);
  const data = getFileSpecsById("trainspotting");
  return data;
}
const trainspotting = withComponentProps(function Trainspotting({
  loaderData
}) {
  const fileSpecs = loaderData;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(ArticleHeader, {
      fileSpecs
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx("h2", {
        id: "-2025-03-07-https-boxd-it-93m20x-",
        children: /* @__PURE__ */ jsx("a", {
          href: "https://boxd.it/93M20x",
          children: "2025-03-07"
        })
      })
    })]
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: trainspotting,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BEzlHOO-.js", "imports": ["/assets/chunk-D4RADZKF-8YUgi0Se.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BIZ9iy7X.js", "imports": ["/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/with-props-CTzvD32q.js", "/assets/meta-service-BDCHovh3.js"], "css": ["/assets/root-D9etWMt0.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DHA_2DgQ.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/footer-D4gKpYTj.js", "/assets/index-CoLcMgoR.js", "/assets/file-specs-Chv-2qOj.js", "/assets/lists-data-CiH3EBMG.js", "/assets/reviews-data-CxRWaJDE.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/archive": { "id": "routes/archive", "parentId": "root", "path": "archive", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/archive-BxGrzrA6.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/file-specs-Chv-2qOj.js", "/assets/footer-D4gKpYTj.js", "/assets/meta-service-BDCHovh3.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/lists": { "id": "routes/lists", "parentId": "root", "path": "lists", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/lists-LwDBDBvN.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/file-specs-Chv-2qOj.js", "/assets/footer-D4gKpYTj.js", "/assets/lists-data-CiH3EBMG.js", "/assets/meta-service-BDCHovh3.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/reviews": { "id": "routes/reviews", "parentId": "root", "path": "reviews", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/reviews-D78BGu5H.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/file-specs-Chv-2qOj.js", "/assets/footer-D4gKpYTj.js", "/assets/reviews-data-CxRWaJDE.js", "/assets/meta-service-BDCHovh3.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/tags": { "id": "routes/tags", "parentId": "root", "path": "tags", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/tags-DKd1G7wa.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/footer-D4gKpYTj.js", "/assets/meta-service-BDCHovh3.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/article": { "id": "layouts/article", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/article-Cc3p6gSr.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/footer-D4gKpYTj.js", "/assets/thanks-BYD_WgqL.js", "/assets/meta-service-BDCHovh3.js"], "css": ["/assets/article-WBJgwCTe.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/articles/featured/25-for-25": { "id": "routes/articles/featured/25-for-25", "parentId": "layouts/article", "path": "featured/25-for-25", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/25-for-25-CR8TMsNN.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/article-header-Y4hjm6_U.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/articles/featured/escapism": { "id": "routes/articles/featured/escapism", "parentId": "layouts/article", "path": "featured/escapism", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/escapism-1doxgMly.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/article-header-Y4hjm6_U.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/articles/featured/everybody-wants-some": { "id": "routes/articles/featured/everybody-wants-some", "parentId": "layouts/article", "path": "featured/everybody-wants-some", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/everybody-wants-some-ZT6Ppq6h.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/article-header-Y4hjm6_U.js", "/assets/review-content-D_N-CjDI.js", "/assets/index-CoLcMgoR.js"], "css": ["/assets/article-WBJgwCTe.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/articles/featured/burning": { "id": "routes/articles/featured/burning", "parentId": "layouts/article", "path": "featured/burning", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/burning-CtyOdDQo.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/article-header-Y4hjm6_U.js", "/assets/review-content-D_N-CjDI.js", "/assets/index-CoLcMgoR.js"], "css": ["/assets/article-WBJgwCTe.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/review": { "id": "layouts/review", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/review-C1rGWS2k.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/footer-D4gKpYTj.js", "/assets/thanks-BYD_WgqL.js", "/assets/meta-service-BDCHovh3.js"], "css": ["/assets/article-WBJgwCTe.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/articles/reviews/trainspotting": { "id": "routes/articles/reviews/trainspotting", "parentId": "layouts/review", "path": "review/trainspotting", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/trainspotting-Cxgk0h8b.js", "imports": ["/assets/with-props-CTzvD32q.js", "/assets/chunk-D4RADZKF-8YUgi0Se.js", "/assets/article-header-Y4hjm6_U.js", "/assets/index-CoLcMgoR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-3702e63f.js", "version": "3702e63f", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/archive": {
    id: "routes/archive",
    parentId: "root",
    path: "archive",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/lists": {
    id: "routes/lists",
    parentId: "root",
    path: "lists",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/reviews": {
    id: "routes/reviews",
    parentId: "root",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/tags": {
    id: "routes/tags",
    parentId: "root",
    path: "tags",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "layouts/article": {
    id: "layouts/article",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/articles/featured/25-for-25": {
    id: "routes/articles/featured/25-for-25",
    parentId: "layouts/article",
    path: "featured/25-for-25",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/articles/featured/escapism": {
    id: "routes/articles/featured/escapism",
    parentId: "layouts/article",
    path: "featured/escapism",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/articles/featured/everybody-wants-some": {
    id: "routes/articles/featured/everybody-wants-some",
    parentId: "layouts/article",
    path: "featured/everybody-wants-some",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/articles/featured/burning": {
    id: "routes/articles/featured/burning",
    parentId: "layouts/article",
    path: "featured/burning",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "layouts/review": {
    id: "layouts/review",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/articles/reviews/trainspotting": {
    id: "routes/articles/reviews/trainspotting",
    parentId: "layouts/review",
    path: "review/trainspotting",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
