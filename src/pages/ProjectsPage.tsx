import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { RootState } from "../store/store";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { AnimatedTabs } from "@/components/AnimatedTabs";

export default function ProjectsPage() {
  const projects = useSelector((s: RootState) => s.projects.items);

  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),_transparent_40%),linear-gradient(180deg,_#fffaf3_0%,_#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111113_100%)] dark:text-zinc-100   min-h-screen pt-20">
      <ScrollToTop />
      <section className="mx-auto max-w-6xl px-4 max-[380px]:px-3 ">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400 pt-10">
            <Link
              to="/"
              className="cursor-target transition hover:text-zinc-950 dark:hover:text-white"
            >
              Home
            </Link>
            <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
            <span>Projects</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl max-[380px]:text-3xl">
            Projects that showcase my skills and contributions.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A small collection of interfaces and product builds that focus on
            practical UI decisions and reliable implementation.
          </p>
        </div>

        <div className="flex justify-center mt-6">

          
           <AnimatedTabs />

        </div>
      </section>
    </main>
  );
}
