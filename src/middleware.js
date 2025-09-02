import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Разрешённые пути: страница техработ, секретный превью и служебные ассеты
  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/preview-12345") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Всё остальное показываем как maintenance (rewrite, а не redirect!)
  const url = req.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = { matcher: "/:path*" };
