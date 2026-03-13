import { JIKAN_API_BASE_URL } from "@/app/lib/constants";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${JIKAN_API_BASE_URL}/top/anime?filter=airing&limit=12`);
  
  if (!res.ok) return NextResponse.json(
    {
      error: "Failed to fetch"
    },
    {
      status: res.status
    });

  const data = await res.json();
  return NextResponse.json(data);
}