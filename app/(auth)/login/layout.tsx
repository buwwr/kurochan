import type { Metadata } from "next";
import { NavBarLogin } from "@/app/components";

export const metadata: Metadata = {
  title: "KUROCHAN Login ",
  description: "Kurochan login page",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-zinc-100 h-screen">
      <NavBarLogin />
      {children}
    </div>
  );
}
