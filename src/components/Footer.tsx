import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#dcc4a8]/70 bg-[#fff8ee]/85 py-6 text-zinc-500 backdrop-blur dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Khalid Raja. 
      </div>
    </footer>
  );
}
