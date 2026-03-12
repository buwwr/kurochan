"use client";

import Link from "next/link";

export function NavBarLogin() {
  return (
    <nav className="text-center py-10">
      <Link 
        href="/" 
        className="text-3xl uppercase font-extrabold tracking-tight 
        bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent
        hover:opacity-80 transition-opacity duration-200"
      >
        Kurochan
      </Link>
    </nav>
  )
}