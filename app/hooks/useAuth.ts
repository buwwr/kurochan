"use client";

import { supabase } from "@/app/lib/supabase/supabase";
import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = user?.id ?? "";

  useEffect( () => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }}) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    })
    
    // Listen for auth changes (Login or Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    }) 

    return () => subscription.unsubscribe();
  }, [])

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = '/login';
  }

  return { 
    user,
    userId, 
    session, 
    isLoading, 
    logout }
}