import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLaptopCode, FaPaintBrush, FaCrown, FaStar, FaFire } from "react-icons/fa";
import { skills } from "../data/portfolio";

const icons = {
  Languages: FaCode,
  Frameworks: FaLaptopCode,
  Tools: FaPaintBrush,
};

export default function SkillsPage() {
  // Get the main skill categories and create a featured one
  const featuredSkill = skills[0];
  const otherSkills = skills.slice(1);

  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),_transparent_40%),linear-gradient(180deg,_#fffaf3_0%,_#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111113_100%)] dark:text-zinc-100 overflow-x-hidden">
      <section className="mx-auto max-w-6xl px-4 py-16 max-[380px]:px-3 mt-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            <Link to="/" className="cursor-target transition hover:text-zinc-950 dark:hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
            <span>Skills</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl max-[380px]:text-3xl">
            Skills with a minimal, practical focus.    <span className="text-xl text-zinc-600 dark:text-zinc-400">
              (  {skills.reduce((acc, skill) => acc + skill.items.length, 0)}+ technologies mastered ).
              </span>
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A curated view of the tools and languages I use to design and build
            polished interfaces with clean structure and responsive behavior.
          </p>
        </div>

        {/* CREATIVE LAYOUT: Featured card + Masonry style */}
        <div className="mt-12 space-y-6">
          
          {/* HERO FEATURE CARD - First skill highlighted prominently */}
          {featuredSkill && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative rounded-[2rem] border-2 border-amber-500/30 bg-gradient-to-br from-[#f8ead8] to-[#f3e0c8] p-8 shadow-2xl dark:from-white/10 dark:to-white/5 dark:border-amber-400/20">
                <div className="absolute top-6 right-6">
                  <FaCode className="text-3xl text-amber-500 dark:text-amber-400 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  {(() => {
                    const Icon = icons[featuredSkill.title as keyof typeof icons] ?? FaCode;
                    return (
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 text-white shadow-lg dark:from-white dark:to-zinc-200 dark:text-zinc-950">
                        <Icon className="text-2xl" />
                      </span>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold text-zinc-950 dark:text-white">
                      {featuredSkill.title}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Core Expertise</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {featuredSkill.items.map((item, idx) => (
                    <div
                      key={item}
                      className="group/item relative rounded-xl border border-amber-500/30 bg-white/50 px-4 py-2 text-sm text-zinc-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800/80"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        <FaStar className="text-amber-500 text-xs opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-2">
                  <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          )}

          {/* SPLIT LAYOUT for remaining skills */}
          <div className="grid gap-6 lg:grid-cols-2">
            {otherSkills.map((skill, idx) => {
              const Icon = icons[skill.title as keyof typeof icons] ?? FaCode;
              const isLarge = idx === 0; // First remaining skill gets special treatment
              
              return (
                <div
                  key={skill.title}
                  className={`group relative transition-all duration-500 hover:z-10 ${
                    isLarge ? 'lg:row-span-2' : ''
                  }`}
                >
                  {/* Floating animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  <div className={`relative rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8]/85 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 ${
                    isLarge ? 'lg:p-10' : ''
                  }`}>
                    
                    {/* Decorative floating orbs */}
                    <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000"></div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 transition-all duration-300 group-hover:rounded-full group-hover:rotate-12">
                          <Icon className="text-xl" />
                        </span>
                        <div>
                          <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
                            {skill.title}
                          </h2>
                          {isLarge && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                              {skill.items.length} technologies
                            </p>
                          )}
                        </div>
                      </div>
                      {isLarge && <FaFire className="text-orange-500 text-xl animate-pulse" />}
                    </div>

                    {/* Creative grid layout for items */}
                    <div className={`grid gap-2 ${
                      isLarge 
                        ? 'grid-cols-2 sm:grid-cols-3' 
                        : skill.items.length > 5 
                          ? 'grid-cols-2' 
                          : 'grid-cols-1'
                    }`}>
                      {skill.items.map((item, itemIdx) => (
                        <div
                          key={item}
                          className="group/item relative overflow-hidden rounded-xl border border-[#dcc4a8]/50 bg-[#f1dfca] px-3 py-2 text-sm text-zinc-700 transition-all hover:translate-x-1 hover:bg-linear-to-r hover:from-[#e8d5bd] hover:to-transparent dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-black"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r dark:hover:text-black  from-zinc-500 to-zinc-700 dark:from-white dark:to-zinc-400 group-hover/item:scale-150 transition-transform"></span>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Animated border glow on hover */}
                    <div className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-[1.75rem] dark:hover:text-black bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section with creative design */}
        <div className="mt-16 pt-8 border-t border-[#dcc4a8]/40 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {skills.slice(0, 3).map((skill, idx) => {
                  const Icon = icons[skill.title as keyof typeof icons] ?? FaCode;
                  return (
                    <div key={idx} className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-white border-2 border-[#f8ead8] dark:border-zinc-900">
                      <Icon className="text-xs" />
                    </div>
                  );
                })}
              </div>
           
            </div>
            
            <Link
              to="/projects"
              className="group cursor-target inline-flex items-center gap-2 rounded-full border border-[#d6bea0] bg-[#f8ead8] px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:border-[#c9ae8d] hover:bg-[#f1dfca] hover:shadow-lg hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span>Explore projects</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}