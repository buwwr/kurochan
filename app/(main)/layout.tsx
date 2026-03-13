import type { Metadata } from "next";
import { NavBar } from "@/app/components";
import MainPageLoading from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "KUROCHAN",
  description: "Your Handy Anime Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`relative flex flex-col h-screen max-h-[56.25vw] font-sans`}>
      <Suspense fallback={<MainPageLoading />} >
        <NavBar />
        <main className="absolute inset-0 z-10 h-full">
          {children}
        </main>
      </Suspense>
      
    </div>
  )
};
