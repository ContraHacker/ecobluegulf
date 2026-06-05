import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'ar'];
const default_locale = 'en';

function get_locale(request: NextRequest): string {

  const cookie_locale = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookie_locale && locales.includes(cookie_locale)) return cookie_locale;

  const accept_language = request.headers.get("accept-language") ?? "";
  const languages = new Negotiator({ headers: { "accept-language": accept_language } }).languages();
  return match(languages, locales, default_locale);

}

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;

  const pathname_has_locale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname_has_locale) return NextResponse.next();

  const preferred_locale = get_locale(request);

  request.nextUrl.pathname = `/${preferred_locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(request.nextUrl);

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
};