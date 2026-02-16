import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const target = new URL("/robots.txt", request.url);
  return NextResponse.redirect(target, 308);
}
