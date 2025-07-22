import { BRANDING, IMG_ROUTES } from "../constants";

export function reviewMetaBuilder(
  title = "",
  img_type = "",
  desc = "",
  keywords = ""
) {
  const reviewMeta = metaBuilder(
    `${title} | Double Feature`,
    `${title} | Review | Make it a Double Feature`,
    `${IMG_ROUTES.covers}${title.toLowerCase().replace(/ /g, "-")}.${img_type}`,
    desc || `Read Michael Beebe's review of '${title}' on Double Feature.`,
    keywords,
    `${BRANDING.color}`
  );
  return reviewMeta;
}

export function metaBuilder(
  title = BRANDING.title,
  preview_title = BRANDING.preview_title,
  preview_img = `${IMG_ROUTES.branding}${BRANDING.preview_img}`,
  desc = BRANDING.desc,
  keywords = "",
  color = BRANDING.color
) {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: title },
    {
      name: "description",
      content: desc,
    },
    {
      name: "author",
      content: "Michael Beebe",
    },
    {
      name: "keywords",
      content: `${keywords.length > 0 ? `${keywords}, ` : ""}${
        BRANDING.keywords
      }`,
    },
    {
      name: "google",
      content: "notranslate",
    },
    {
      name: "og:title",
      content: preview_title,
    },
    {
      name: "og:description",
      content: desc,
    },
    {
      name: "og:image",
      content: `${BRANDING.domain}${preview_img}`,
    },
    {
      name: "og:url",
      content: BRANDING.domain,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: preview_title,
    },
    {
      name: "twitter:description",
      content: desc,
    },
    {
      name: "twitter:image",
      content: `${BRANDING.domain}${preview_img}`,
    },
    {
      name: "twitter:url",
      content: BRANDING.domain,
    },
    {
      name: "twitter:site",
      content: "@michael__beebe",
    },
    {
      name: "twitter:creator",
      content: "@michael__beebe",
    },
    {
      name: "theme-color",
      content: color,
    },
    { name: "robots", content: "index, follow" },
    { name: "revisit-after", content: "1 days" },
    { name: "rating", content: "general" },
    { name: "distribution", content: "global" },
    { name: "language", content: "en-US" },
    { name: "googlebot", content: "index, follow" },
    { name: "googlebot-news", content: "index, follow" },
    { name: "googlebot-image", content: "index, follow" },
    { name: "googlebot-video", content: "index, follow" },
  ];
}
export const DEFAULT_META = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "Double Feature" },
  {
    name: "description",
    content: BRANDING.desc,
  },
  {
    name: "author",
    content: "Michael Beebe",
  },
  {
    name: "keywords",
    content: BRANDING.keywords,
  },
  {
    name: "google",
    content: "notranslate",
  },
  {
    name: "og:title",
    content: BRANDING.preview_title,
  },
  {
    name: "og:description",
    content: BRANDING.desc,
  },
  {
    name: "og:image",
    content: `${BRANDING.domain}${IMG_ROUTES.branding}${BRANDING.preview_img}`,
  },
  {
    name: "og:url",
    content: BRANDING.domain,
  },
  {
    name: "og:type",
    content: "website",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:title",
    content: BRANDING.preview_title,
  },
  {
    name: "twitter:description",
    content: BRANDING.desc,
  },
  {
    name: "twitter:image",
    content: `${BRANDING.domain}${IMG_ROUTES.branding}${BRANDING.preview_img}`,
  },
  {
    name: "twitter:url",
    content: BRANDING.domain,
  },
  {
    name: "twitter:site",
    content: "@michael__beebe",
  },
  {
    name: "twitter:creator",
    content: "@michael__beebe",
  },
  {
    name: "theme-color",
    content: BRANDING.color,
  },
  { name: "robots", content: "index, follow" },
  { name: "revisit-after", content: "1 days" },
  { name: "rating", content: "general" },
  { name: "distribution", content: "global" },
  { name: "language", content: "en-US" },
  { name: "googlebot", content: "index, follow" },
  { name: "googlebot-news", content: "index, follow" },
  { name: "googlebot-image", content: "index, follow" },
  { name: "googlebot-video", content: "index, follow" },
];
