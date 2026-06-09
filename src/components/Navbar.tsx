import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function Navbar({ onMenuToggle, menuOpen }: NavbarProps) {
  const { isDark, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "cursor-target rounded-full px-4 py-2 text-sm font-medium transition max-[380px]:px-3 max-[380px]:py-1.5",
      isActive
        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
        : "text-zinc-600 hover:bg-[#f1dfca] sm:text-base text-xs sm:font-normal font-semibold hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-40 border-b border-[#dcc4a8]/70 bg-[#fff8ee]/85 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:gap-0 sm:py-6 max-[380px]:px-3 max-[380px]:py-3">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="font-bold tracking-wide text-2xl text-zinc-950 dark:text-white sm:text-xl sm:tracking-tight max-[380px]:text-xl"
          >
            Khalid Raja
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6bea0] bg-[#f8ead8] text-zinc-700 transition hover:border-[#c9ae8d] hover:bg-[#f1dfca] dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 z-50 cursor-pointer relative cursor-target"
          >
            {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>
        </div>

        <nav className="hidden sm:flex flex-wrap items-center gap-1 sm:justify-end sm:gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[#d6bea0] bg-[#f8ead8] text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 cursor-pointer transition-all duration-300 cursor-target"
        >
          <FaBars className="text-sm hidden" />
        </button>
      </div>
    </header>
  );
}
