"use client"

import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase/supabase";
import { Button } from "@/app/components/ui";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      console.error(error.message);
    } else {
      router.push("/watchlist")
    };
  };

  return (
    <div className="max-w-[1220px] flex flex-col justify-start item-center mx-auto">
      <h1 className="pt-20 text-4xl font-extrabold tracking-tight text-center">Log in</h1>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleLogin(formData);
        }} 
        className="mx-auto w-md pt-10 space-y-4"
      >
        <div>
          <label className="block text-sm">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="naruto@gmail.com"
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Password</label>
            <input
              name="password"
              type="password"
              placeholder="*****"
              className="border rounded px-2 py-1 w-full"
              required
            />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="mt-6 w-md"
        >
          {isLoading 
            ? <div className="mx-auto py-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            : "Login" 
          }
        </Button>
      </form>
    </div>
  );
}

