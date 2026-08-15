import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const normalizeString = (v: string) => v.trim().toLowerCase();

export const toErrors = (messages?: string[]) =>
  messages?.map((message) => ({ message }));
