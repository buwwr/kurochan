"use client";

import { AnimeDetail } from "@/app/components";
import { use } from "react";

export default function AnimeDetailsPage({ 
  params 
}: { params: Promise<{ id: string }> }) {

  const { id } = use(params);

  return (
    <div className="pt-20">
      <AnimeDetail id={Number(id)}/>
    </div>
  )
};