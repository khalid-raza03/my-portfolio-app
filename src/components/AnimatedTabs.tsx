"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Animated-tabs";
import { RootState } from "../store/store";

export function AnimatedTabs() {
  const projects = useSelector((s: RootState) => s.projects.items);
  const [value, setValue] = useState(tabs[0].value);

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.label === tab.label)
              .map((p) => (
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
                        className="cursor-target inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#d6bea0] px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-[#f1dfca] dark:border-white/10 dark:text-white dark:hover:bg-white/10 max-[380px]:px-3 max-[380px]:py-2.5"
                      >
                        <FaGithub className="text-xs" />
                        Code
                      </a>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 max-[380px]:px-3 max-[380px]:py-2.5"
                      >
                        Live
                        <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

const tabs = [
  {
    label: "React & Typescript",
    value: "react ts",
  },
  {
    label: "Rest APi & Axios",
    value: "api",
  },
  {
    label: "Html Css Js",
    value: "vanilla",
  },
];