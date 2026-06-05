import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'ar']
const default_locale = 'en'

function get_locale(request: NextRequest) {

  const cookie_locale = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookie_locale && locales.includes(cookie_locale)) {
    return cookie_locale;
  }

  const accept_language = request.headers.get("accept-language") ?? "";

  const headers = { "accept-language": accept_language };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, default_locale)

}

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;

  const preferred_locale = get_locale(request);

  const pathname_locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname_locale !== preferred_locale) {

    const new_pathname = pathname.replace(`/${pathname_locale}`, `/${preferred_locale}`);
    request.nextUrl.pathname = new_pathname || `/${preferred_locale}`;

    return NextResponse.redirect(request.nextUrl);

  }

  if (!pathname_locale) {
    request.nextUrl.pathname = `/${preferred_locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  };

  return NextResponse.next();

}

export const config = {
  matcher: [
    '/((?!_next).*)'
  ]
}