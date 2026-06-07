import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { RootState } from "../store/store";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function ProjectsPage() {
  const projects = useSelector((s: RootState) => s.projects.items);

  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),_transparent_40%),linear-gradient(180deg,_#fffaf3_0%,_#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111113_100%)] dark:text-zinc-100">
        <ScrollToTop />
      <section className="mx-auto max-w-6xl px-4 py-16 max-[380px]:px-3">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            <Link to="/" className="transition hover:text-zinc-950 dark:hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
            <span>Projects</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl max-[380px]:text-3xl">
            Projects that balance clarity, speed, and finish.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A small collection of interfaces and product builds that focus on
            practical UI decisions and reliable implementation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {projects.map((p) => (
            <article
              key={p.title}
                className="overflow-hidden rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8]/85 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-4 p-6 max-[380px]:p-4">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  {p.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#d6bea0] px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-[#f1dfca] dark:border-white/10 dark:text-white dark:hover:bg-white/10 max-[380px]:px-3 max-[380px]:py-2.5"
                  >
                    <FaGithub className="text-xs" />
                    Code
                  </a>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 max-[380px]:px-3 max-[380px]:py-2.5"
                  >
                    Live
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
