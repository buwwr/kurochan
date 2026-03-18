"use client";

import heroRight from "@/app/assets/images/hero-right.png";
import hero from "@/app/assets/images/hero.png"
import { Button } from "@/app/components/ui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="relative h-full">
      {/* Hero for smaller screen */}
      <Image 
        src={hero}
        alt="Hero"
        fill
        className="absolute inset-0 object-cover object-center lg:hidden"
        priority
      />
      
      {/* Hero for larger screen */}
      <Image 
        src={heroRight}
        alt="Hero"
        fill
        className="absolute inset-0 object-cover object-center lg:block"
        priority
      />
      
      <div className="relative z-10 pt-20 md:pt-0 px-6 py-4 flex flex-col items-center lg:items-start justify-center h-full
        bg-white/90 lg:bg-transparent
        lg:bg-linear-to-r lg:from-white lg:via-white/80 lg:to-transparent">
        <div className="flex flex-col items-center lg:items-start max-w-[1220px] w-full mx-auto">
          <h1 className="pb-4 lg:w-3xl
            text-center text-4xl sm:text-5xl lg:text-8xl lg:text-left font-extrabold"
          > 
            Never lose track of your next obsession
          </h1>

          <Button>
            <Link href="/discover">
              Start Tracking
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
};