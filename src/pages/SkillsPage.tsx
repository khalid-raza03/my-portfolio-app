import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { skills } from "../data/portfolio";

const icons = {
  Languages: FaCode,
  Frameworks: FaLaptopCode,
  Tools: FaPaintBrush,
};

export default function SkillsPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),_transparent_40%),linear-gradient(180deg,_#fffaf3_0%,_#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111113_100%)] dark:text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 py-16 max-[380px]:px-3">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            <Link to="/" className="transition hover:text-zinc-950 dark:hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
            <span>Skills</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl max-[380px]:text-3xl">
            Skills with a minimal, practical focus.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A curated view of the tools and languages I use to design and build
            polished interfaces with clean structure and responsive behavior.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = icons[skill.title as keyof typeof icons] ?? FaCode;

            return (
              <article
                key={skill.title}
              className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8]/85 p-8 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.3)] dark:border-white/10 dark:bg-white/5 dark:shadow-none max-[380px]:p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Icon />
                  </span>
                  <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
                    {skill.title}
                  </h2>
                </div>

                <ul className="mt-6 space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] px-4 py-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-start">
          <Link
            to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-[#d6bea0] bg-[#f8ead8] px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-[#c9ae8d] hover:bg-[#f1dfca] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 max-[380px]:px-4 max-[380px]:py-2.5"
          >
            See projects
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </main>
  );
}
