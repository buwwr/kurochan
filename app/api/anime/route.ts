import { JIKAN_API_BASE_URL } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ?? '1';

  const res = await fetch(`${JIKAN_API_BASE_URL}/anime?order_by=mal_id&sort=asc&page=${page}`);

  if (!res.ok) return NextResponse.json(
    {
      error: 'Failed to fetch'
    },
    {
      status: res.status
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}