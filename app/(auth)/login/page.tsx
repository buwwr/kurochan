"use client"

import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase/supabase";
import { Button } from "@/app/components/ui";
import { useFormik } from "formik";

export default function LoginPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {  
      email: "",
      password: "",
    },
    onSubmit: async (values, {setSubmitting, setFieldError}) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      setSubmitting(false);

      if (error) {
        setFieldError("password", "Invalid email or password");
      } else {
        router.push("/watchlist");
      }
    },
  });

  return (
    <div className="max-w-[1220px] flex flex-col justify-start item-center mx-auto">
      <h1 className="pt-20 text-4xl font-extrabold tracking-tight text-center">Log in</h1>

      <form 
        onSubmit={formik.handleSubmit}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="mt-6 w-md"
        >
          {formik.isSubmitting 
            ? <div className="mx-auto p-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            : "Login" 
          }
        </Button>
      </form>
    </div>
  );
}