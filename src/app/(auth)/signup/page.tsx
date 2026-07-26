import type { Metadata } from "next";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Signup",
};

export default function SignupPage() {
  return (

    <div className="flex min-h-svh flex-col gap-8 items-center justify-center bg-muted p-6 mt-16 md:p-10">
         <div className="w-full max-w-sm md:max-w-4xl">
           <SignupForm />
         </div>
       </div>
  );
}
