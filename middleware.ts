import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore files et API
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return;
  }

  // Déjà préfixé ?
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return;
  }

  // Redirige vers la locale par défaut
  const url = request.nextUrl.clone();
  url.pathname = `/fr${pathname}`;
  return NextResponse.redirect(url);
}