import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import React from "react";
import {
  FaBriefcase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SlCalender } from "react-icons/sl";
import { education, experience } from "../data/portfolio";

const STACK_ITEM_CLASS =
  "h-auto min-h-0 !p-0 !my-0 !rounded-none !shadow-none bg-transparent overflow-visible";

const Details = () => {
  const calcAge = new Date().getFullYear() - 2002;

  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_40%),linear-gradient(180deg,#fffaf3_0%,#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,#09090b_0%,#111113_100%)] dark:text-zinc-100 block lg:hidden">
      <section className="mx-auto max-w-3xl px-2 sm:px-6">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={48}
          itemStackDistance={22}
          itemScale={0.02}
          baseScale={0.94}
          stackPosition="16%"
          scaleEndPosition="12%"
        >
          {/* ── Card 1: Profile ── */}
          <ScrollStackItem itemClassName={STACK_ITEM_CLASS}>
            <div className="flex flex-col justify-between rounded-[1.75rem] border border-[#dcc4a8]/70 bg-amber-400 sm:p-8 p-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl   max-[380px]:p-3">
              <img
                src="/images/my-pic-new.jpg"
                alt="Khalid Raja"
                className="mx-auto h-32 w-32 rounded-full object-cover ring-1 ring-zinc-200  max-[380px]:h-44 lg:inline-block hidden max-[380px]:w-44"
              />
              <div className="mt-6 space-y-4 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-950  max-[380px]:text-2xl">
                  Khalid Raja
                </h2>
                <span className="inline-flex items-center gap-2 max-[380px]:flex-wrap max-[380px]:justify-center">
                  <FaLocationDot />
                  Varanasi, Uttar Pradesh.
                </span>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white ">
                    {`Age : ${calcAge}`}
                  </span>
                  <a
                    href="mailto:Khalidraza30565@gmail.com"
                    className="cursor-target rounded-full border border-[#d6bea0] px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-[#f1dfca]   "
                  >
                    Hire Me
                  </a>
                </div>
              </div>

              <div className="mx-5 space-y-2 text-zinc-700 mt-4  max-[380px]:mx-3">
                <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4  ">
                  <div className="flex items-start gap-3 sm:text-base text-sm">
                    <FaEnvelope className="text-zinc-950 " />
                    <span className="min-w-0 wrap-break-word">
                      khalidraza30565@gmail.com
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4  ">
                  <div className="flex items-start gap-3 sm:text-base text-sm">
                    <FaGithub className="text-zinc-950 " />
                    <a
                      href="https://github.com/khalid-raza03"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-target min-w-0 wrap-break-word underline decoration-zinc-300 underline-offset-4"
                    >
                      @khalid-raza03
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl mb-6 border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 ">
                  <div className="flex items-start gap-3 sm:text-base text-sm">
                    <FaLinkedin className="text-zinc-950 " />
                    <a
                      href="https://www.linkedin.com/in/khalid-raja-0aa797187/"
                      target="_blank"
                      rel="noreferrer"
                      className="min-w-0 wrap-break-word underline decoration-zinc-300 underline-offset-4"
                    >
                      @Khalid_raza
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName={STACK_ITEM_CLASS}>
            <div className="rounded-[1.75rem] border border-[#dcc4a8]/70 py-20 bg-blue-500 sm:p-8 p-4 text-center shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur ">
              <p className="text-lg font-bold text-zinc-950  md:text-xl max-[380px]:text-base">
                Download My CV
              </p>
              <p className="mt-2 text-xs text-zinc-200 ">
                Get a copy of my latest experience and project portfolio.
              </p>
              <a
                href="https://drive.google.com/file/d/14lekwJpuZyg3pav7BbZovxEIKGw0feKP/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="cursor-target mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800  max-[380px]:w-full max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </ScrollStackItem>

          {/* ── Card 2: About Me ── */}
          <ScrollStackItem itemClassName={STACK_ITEM_CLASS}>
            <div className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-rose-500 py-8 px-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl  ">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="my-3 text-2xl font-semibold tracking-tight text-zinc-950  max-[380px]:text-xl">
                    About Me
                  </h3>

                  <p className="text-justify leading-relaxed text-sm sm:text-base lg:text-xl">
                    Passionate frontend developer with over one year of
                    experience building responsive websites and web apps. I
                    focus on polished UI, accessible interfaces, and clear
                    content hierarchy.
                  </p>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* ── Card 3: Education ── */}
          <ScrollStackItem itemClassName={STACK_ITEM_CLASS}>
            <div className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-cyan-500 p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur-xl   max-[380px]:px-6 py-10">
              <div className="flex items-center gap-3 text-zinc-950">
                <FaGraduationCap size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="font-medium text-zinc-900 ">
                      {item.title}
                    </h4>
                    <p className="text-sm flex items-center gap-2 text-zinc-700 ">
                      <SlCalender /> {item.duration}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-zinc-700 ">
                      <FaLocationDot /> {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* ── Card 4: Experience ── */}
          <ScrollStackItem itemClassName={STACK_ITEM_CLASS}>
            <div className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab] p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur-xl  max-[380px]:px-6 py-10">
              <div className="flex items-start justify-between gap-3 text-zinc-950">
                <div className="flex gap-2">
                  <FaBriefcase size={24} />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <span className="total-exp text-sm text-zinc-700 ">
                  17 Months
                </span>
              </div>
              <div className="mt-8 space-y-6">
                {experience.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-medium text-zinc-950 ">
                        {item.title}
                      </h4>
                      <span className="rounded-full border border-[#dcc4a8] bg-[#f1dfca] px-3 py-1 text-xs font-medium text-zinc-600  w-fit ">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-sm flex items-center gap-2 text-zinc-700 ">
                      <FaLocationDot /> {item.company}
                    </p>
                    <p className="text-sm flex items-center gap-2 text-zinc-700">
                      <SlCalender /> {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>
    </main>
  );
};

export default Details;
