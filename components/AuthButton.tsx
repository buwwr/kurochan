"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui";

export function AuthButton() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) return (
    <div className="w-20 h-9 bg-gray-200 rounded animate-pulse" />
  )
  if (user) return (
    <Button 
      variant="secondary" 
      size="sm"
      onClick={logout}>
      Log out
    </Button>
  )
  
  return (
    <Button variant="secondary" size="sm">
      <Link href="/login">Log in</Link> 
    </Button>
  )
}