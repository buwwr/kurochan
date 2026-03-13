"use client";

import { Button } from "./ui";

export function AnimeCardSkeleton() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex flex-col w-[157px] gap-2 py-2 animate-pulse ">
          <div className="h-[235px] bg-skeleton"></div>
          <div className="pt-2 h-[20px] bg-skeleton"></div>
          <div className="pt-2 h-[20px] bg-skeleton"></div>
          <Button variant="skeleton" size="sm" className="w-full"></Button>
        </div>
      ))}   
    </div>
  )
}