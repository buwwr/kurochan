import { JIKAN_API_BASE_URL } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const res = await fetch(`${JIKAN_API_BASE_URL}/anime/${id}`);
  
  if (!res.ok) return NextResponse.json(
    {
      error: "Failed to fetch"
    },
    {
      status: res.status
    }
  );

  const data = await res.json();
  return NextResponse.json(data);

}