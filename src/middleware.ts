import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];

function getLocale(pathname: string) {
  const lang = pathname.split("/")[1];

  if (lang) return locales.find((locale) => locale === lang);

  return "es";
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  //redirect if not are in a folder locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(pathname);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  // return new NextResponse(JSON.stringify({ pathname, url: request.url, pathnameIsMissingLocale, locale: getLocale(pathname) }))
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    //"/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
