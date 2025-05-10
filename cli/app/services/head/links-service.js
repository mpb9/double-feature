const IMG_PATH = "/img/";
export function linkBuilder(icon = "two-tickets.png") {
  return [
    { rel: "icon", href: `${IMG_PATH}${icon}` },
    { rel: "apple-touch-icon", href: `${IMG_PATH}${icon}` },
    { rel: "me", href: "mailto:michaelbeebe1031@gmail.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ];
}
export const DEFAULT_LINKS = [
  { rel: "icon", href: `${IMG_PATH}two-tickets.png` },
  { rel: "apple-touch-icon", href: `${IMG_PATH}two-tickets.png` },
  { rel: "me", href: "mailto:michaelbeebe1031@gmail.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
