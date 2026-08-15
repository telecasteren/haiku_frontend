import { useState } from "react";
import type { FieldErrors } from "@/components/auth/types";

export const useApiHandler = (
  url: string,
  nextUrl: string,
  method = "POST",
) => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(body: Record<string, unknown>) {
    setLoading(true);
    setFieldErrors({});
    setGlobalError("");

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) setFieldErrors(data.errors);
        else setGlobalError(data.error);
        return;
      }

      window.location.href = nextUrl;
    } catch (err) {
      console.error(err); // debugging
      setGlobalError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return { submit, fieldErrors, globalError, loading };
};
