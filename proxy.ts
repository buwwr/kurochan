import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ['/watchlist/:path*']
}