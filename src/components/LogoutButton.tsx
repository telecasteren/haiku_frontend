"use client";

export function LogoutButton() {
  return (
    <form action="/api/auth/logout" method="POST" className="w-full">
      <button type="submit"
        className="flex w-full items-center gap-2 rounded-xl
        p-2 text-sm font-normal transition-all outline-none
        hover:bg-brand-50 cursor-pointer">
        Log out
      </button>
       </form>
  );
}
