"use client";

import Link from "next/link";
import { AuthButton } from "@/app/components";
import { Button } from "./ui";
import { useAuth } from "@/app/hooks";
import { usePathname } from "next/navigation";


export function NavBar() {
  const { user } = useAuth();
  const pathname = usePathname();

  return (
  <nav className="absolute top-0 left-0 right-0 z-100 backdrop-blur-md bg-white/60 border-b border-zinc-100">
    <div className="max-w-[1220px] mx-auto px-6 py-4 flex items-center justify-between">
      <Link 
        href="/" 
        className="text-2xl uppercase font-extrabold tracking-tight 
        bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent
        hover:opacity-80 transition-opacity duration-200"
      >
        Kurochan
      </Link>
      {user && 
        <div className="flex gap-4">
          <Link 
            href="/discover" 
            className={`py-2 px-4 rounded-lg text-md text-zinc-700  hover:bg-zinc-100 hover:font-bold
              ${pathname === "/discover" && "font-bold"}`}
          >
            Discover
          </Link>
          <Link 
            href="/watchlist" 
            className={`py-2 px-4 rounded-lg text-md text-zinc-700  hover:bg-zinc-100 hover:font-bold
              ${pathname === "/watchlist" && "font-bold"}`}
          >
            My WatchList
          </Link>
        </div>
      }
      <div className="flex gap-2">
        <AuthButton />
        {!user && <Button size="sm" className="hidden sm:inline">
          <Link href="/discover">
            Start Tracking
          </Link>
        </Button>}
      </div>
    </div>
    
  </nav>
  )
}