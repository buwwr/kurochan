"use client";

import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { Button } from "./ui";

export function AuthButton() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) return <Button variant="skeleton" size="sm"></Button>;

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