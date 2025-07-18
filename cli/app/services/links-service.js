import { BRANDING, IMG_ROUTES } from "../constants";

// ! not being used, can't figure out how to use it (always superceded by default links in root.jsx)
export function linkBuilder(icon = BRANDING.icon) {
  return [
    { rel: "icon", href: `${IMG_ROUTES.branding}${icon}.png` },
    { rel: "apple-touch-icon", href: `${IMG_ROUTES.branding}${icon}.png` },
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
  { rel: "icon", href: `${IMG_ROUTES.branding}${BRANDING.icon}.png` },
  {
    rel: "apple-touch-icon",
    href: `${IMG_ROUTES.branding}${BRANDING.icon}.png`,
  },
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
