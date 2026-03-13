import type { Metadata } from "next";
import "@/app/globals.css";
import QueryProvider from "@/app/lib/QueryProvider";

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
    <html lang="en">
      <body className="font-sans">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
