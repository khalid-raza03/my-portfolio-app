import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff8ee] dark:bg-zinc-950">
      <div className="flex  items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[#dcc4a8]/30 border-t-[#5227FF] dark:border-white/10 dark:border-t-white/40 animate-spin" />
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Loading...</p>
        <img src="/images/my-pic-new.jpg" alt="my-pic"  width={'50px'} height={'50px'} className="rounded-full animate-bounce"/>
      </div>
    </div>
  );
}
