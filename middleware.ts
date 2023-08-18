import createNextIntlMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/lib/locales";

export default createNextIntlMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
});

export const config = {
  // skip folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
