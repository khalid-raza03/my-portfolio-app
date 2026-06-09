import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaBriefcase,
  FaCloud,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaSuitcase,
} from "react-icons/fa";
import {
  FaBuilding,
  FaLocationDot,
  FaLocationPin,
  FaMessage,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

import { Link } from "react-router-dom";
import { education, experience } from "../data/portfolio";
import ScrollToTop from "../components/ui/ScrollToTop";
import ScrollReveal from "../components/ui/ScrollReveal";

import BorderGlow from "./BorderGlow";
import TiltedCard from "@/components/TiltedCard";

const scrollSections = [
  { id: "hero", title: "Intro" },
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
];

export default function Home() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState(scrollSections[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate age from birth year 2002
  const calcAge = new Date().getFullYear() - 2002;

  useEffect(() => {
    let rafId = 0;

    const updateScrollState = () => {
      const midpoint = window.innerHeight * 0.45;
      let nextSection = scrollSections[0].id;

      scrollSections.forEach(({ id }) => {
        const node = sectionRefs.current[id];
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        if (rect.top <= midpoint) {
          nextSection = id;
        }
      });

      setActiveSection(nextSection);

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const nextProgress =
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.max(0, Math.min(100, nextProgress)));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = useMemo(
    () =>
      Math.max(
        scrollSections.findIndex((section) => section.id === activeSection),
        0,
      ),
    [activeSection],
  );

  const progress = scrollSections.length > 1 ? scrollProgress : 0;
  const currentExperience = experience[experience.length - 1];
  const currentEducation = education[education.length - 1];

  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_40%),linear-gradient(180deg,#fffaf3_0%,#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,#09090b_0%,#111113_100%)] dark:text-zinc-100">
      <ScrollToTop />
      <section className="mx-auto max-w-7xl px-4 py-16 max-[380px]:px-3">
        <div className="grid gap-10 ">
          <div className="space-y-8">
            <section
              id="hero"
              ref={(node) => {
                sectionRefs.current.hero = node;
              }}
              data-section="hero"
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-4 lg:flex-row flex-col-reverse">
                <div className="space-y-7 flex flex-col lg:items-start items-center">
                  <p className="inline-flex mb-0 items-center gap-2 rounded-full border border-[#dcc4a8] bg-[#f8ead8]/90 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 max-[380px]:px-3 max-[380px]:text-xs ">
                    <FaCloud className="text-xs" /> Frontend Developer &
                    Designer
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white lg:inline-block hidden sm:text-4xl md:text-6xl max-[380px]:text-xl max-w-3xl">
                    Building calm, modern interfaces for thoughtful products.
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <Link
                    to="/projects"
                    className="cursor-target mt-10 mb-0 inline-flex items-center gap-2 rounded-full border border-[#d6bea0] px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-[#c9ae8d] hover:bg-[#f1dfca] dark:border-white/10 dark:text-white dark:hover:bg-white/10 max-[380px]:w-fit  max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
                  >
                    Projects
                    <FaArrowRight size={"14"} />
                  </Link>

                   <Link
                    to="/details"
                    className="cursor-target mt-10 mb-0 inline-flex items-center gap-2 rounded-full border border-[#d6bea0] px-5 py-3 text-sm font-medium bg-black dark:bg-white  text-white transition hover:border-[#c9ae8d] hover:bg-[#f1dfca] dark:border-white/10 dark:text-black dark:hover:bg-black/10 max-[380px]:w-fit lg:hidden   max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
                  >
                    About Me
                    <FaArrowRight size={"14"} />
                  </Link>
                  </div>
                  <div className="space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg mt-4">
                    <p className="text-justify max-w-2xl sm:px-0 px-6 sm:text-base text-sm leading-relaxed">
                      I design and build responsive webpages, product pages, and
                      business websites with a clean visually appealing UI and a
                      strong attention to usability.
                    </p>
                  </div>
                  <div className="flex flex-wrap  max-[380px] gap-4 sm:gap-2">
                    <a
                      href="https://github.com/khalid-raza03"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-target inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 max-[380px]:w-fit max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <Link
                      to="/contact"
                      className="cursor-target inline-flex items-center gap-2 rounded-full border border-[#d6bea0] px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-[#c9ae8d] hover:bg-[#f1dfca] dark:border-white/10 dark:text-white dark:hover:bg-white/10 max-[380px]:w-fit  max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
                    >
                      <FaMessage />
                      Contact Me
                    </Link>
                  </div>
                </div>

                <div className="relative flex justify-center w-full max-w-xl overflow-hidden sm:overflow-visible">
                  <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#d8c0a4]/50 blur-3xl dark:bg-white/10 hidden sm:block" />
                  <div className="absolute -right-6 top-16 h-32 w-32 rounded-full bg-[#e7d2b8]/60 blur-3xl dark:bg-white/5 hidden sm:block" />
                  <div className="relative  rounded-2xl bg-[#f8ead8]/75 shadow-white shadow-[0_30px_50px_-45px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5 w-1/2 lg:flex justify-center">
                    <img
                      src="/images/my-pic-new.jpg "
                      alt="Khalid Raja"
                      className="w-fit object-cover rounded-2xl block lg:hidden"
                    />
                    <TiltedCard
                      imageSrc="/images/my-pic-new.jpg"
                      altText="Khalid Raja"
                      captionText="Frontend Developer"
                      containerHeight="300px"
                      containerWidth="340px"
                      imageHeight="370px"
                      imageWidth="280px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip
                      displayOverlayContent
                      overlayContent={
                        <img
                          src="/images/my-pic-new.jpg "
                          alt="Khalid Raja"
                          className="w-fit object-cover rounded-2xl hidden lg:block max-w-70"
                        />
                      }
                    />

                    <div
                      className="cursor-target group absolute sm:-top-2 top-0 sm:-left-23 -left-14 flex rounded-full bg-white sm:p-6 p-4 shadow-md shadow-stone-500 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer z-999"
                      aria-label="Experience details"
                      tabIndex={0}
                    >
                      <FaBriefcase className="h-6 w-6 text-3xl text-stone-800 " />
                      <div className="pointer-events-none absolute left-full top-1/2 z-50 ml-4 min-w-48 -translate-y-1/2 translate-x-2 scale-95 rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 text-left opacity-0 shadow-xl shadow-stone-500/20 backdrop-blur transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus:translate-x-0 group-focus:scale-100 group-focus:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                          Experience
                        </p>
                        <p className="mt-1 text-sm font-bold text-stone-900">
                          17 Months
                        </p>
                      </div>
                    </div>

                    <div
                      className="cursor-target group absolute top-20 sm:top-24 -left-20 flex rounded-full bg-white p-2 sm:p-4 shadow-md shadow-stone-500 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
                      aria-label="Company details"
                      tabIndex={0}
                    >
                      <FaBuilding className="z-999  h-5 w-5 text-3xl text-stone-800" />
                      <div className="pointer-events-none absolute left-full top-1/2 z-50 ml-4 min-w-56 -translate-y-1/2 translate-x-2 scale-95 rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 text-left opacity-0 shadow-xl shadow-stone-500/20 backdrop-blur transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus:translate-x-0 group-focus:scale-100 group-focus:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                          Company
                        </p>
                        <p className="mt-1 text-sm font-bold text-stone-900">
                          {currentExperience.company}
                        </p>
                      </div>
                    </div>

                    <div
                      className="cursor-target group absolute sm:top-48 top-34 -left-18 flex rounded-full bg-white p-2 sm:p-3 shadow-md shadow-stone-500 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
                      aria-label="Degree details"
                      tabIndex={0}
                    >
                      <FaGraduationCap className="z-999 h-5 w-5 text-3xl text-stone-800" />
                      <div className="pointer-events-none absolute left-full top-1/2 z-50 ml-4 min-w-48 -translate-y-1/2 translate-x-2 scale-95 rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 text-left opacity-0 shadow-xl shadow-stone-500/20 backdrop-blur transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus:translate-x-0 group-focus:scale-100 group-focus:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                          Degree
                        </p>
                        <p className="mt-1 text-sm font-bold text-stone-900">
                          {currentEducation.title}
                        </p>
                        <p className="mt-1 text-xs font-bold text-stone-600">
                          {currentEducation.institution}
                        </p>
                      </div>
                    </div>

                    <div
                      className="cursor-target group absolute sm:top-72 top-46 -left-12 sm:-left-12 flex rounded-full bg-white p-2 shadow-md shadow-stone-500 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
                      aria-label="Location details"
                      tabIndex={0}
                    >
                      <FaMapMarkerAlt className="z-999 h-3 w-3 text-3xl text-stone-800" />
                      <div className="pointer-events-none absolute left-full top-1/2 z-50 ml-4 min-w-56 -translate-y-1/2 translate-x-2 scale-95 rounded-2xl border border-stone-200 bg-white/95 px-4 py-3 text-left opacity-0 shadow-xl shadow-stone-500/20 backdrop-blur transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus:translate-x-0 group-focus:scale-100 group-focus:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                          Location
                        </p>
                        <p className="mt-1 text-sm font-bold text-stone-900">
                          Varanasi, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="about"
              ref={(node) => {
                sectionRefs.current.about = node;
              }}
              data-section="about"
              className="scroll-mt-24"
            >
              
              <div className="gap-8 lg:grid-cols-3 hidden lg:grid">
                <div className="flex flex-col justify-between item-center rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8]/85 sm:p-8 p-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 max-[380px]:p-3">
                  <img
                    src="/images/my-pic-new.jpg"
                    alt="Khalid Raja"
                    className="mx-auto h-52 w-52 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-white/10 max-[380px]:h-44 lg:inline-block hidden max-[380px]:w-44"
                  />
                  <div className="mt-6 space-y-4 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[380px]:text-2xl">
                      Khalid Raja
                    </h2>

                    <span className="inline-flex items-center gap-2 max-[380px]:flex-wrap max-[380px]:justify-center">
                      {" "}
                      <FaLocationDot />
                      Varanasi, Uttar Pradesh.
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm ">
                      Frontend Developer & Designer
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-zinc-950">
                        {`Age : ${calcAge}`}
                      </span>
                      <a
                        href="mailto:Khalidraza30565@gmail.com"
                        className="cursor-target rounded-full border border-[#d6bea0] px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-[#f1dfca] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>

                  <div className="mx-5 space-y-4 text-zinc-700 mt-4 dark:text-zinc-300 max-[380px]:mx-3">
                    <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start gap-3 sm:text-base text-sm">
                        <FaEnvelope className="text-zinc-950 dark:text-white" />
                        <span className="min-w-0 break-words">
                          khalidraza30565@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start gap-3 sm:text-base text-sm">
                        <FaGithub className="text-zinc-950 dark:text-white" />
                        <a
                          href="https://github.com/khalid-raza03"
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-target min-w-0 break-words underline decoration-zinc-300 underline-offset-4"
                        >
                          @khalid-raza03
                        </a>
                      </div>
                    </div>
                    <div className="rounded-2xl mb-6 border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start gap-3 sm:text-base text-sm">
                        <FaLinkedin className="text-zinc-950 dark:text-white" />
                        <a
                          href="https://www.linkedin.com/in/khalid-raja-0aa797187/"
                          target="_blank"
                          rel="noreferrer"
                          className="min-w-0 cursor-target break-words underline decoration-zinc-300 underline-offset-4"
                        >
                          @Khalid_raza
                        </a>
                      </div>
                    </div>
                  </div>

                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={["#a460e8ff", "#e6509dff", "#38bdf8"]}
                  >
                    <div className="rounded-[1.75rem]   border border-[#dcc4a8]/70 bg-[#f1dfca] dark:bg-transparent sm:p-8 p-4 text-center shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10  max-[380px]:p-4">
                      <p className="text-lg font-bold text-zinc-950 dark:text-white md:text-xl max-[380px]:text-base">
                        Download My CV
                      </p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Get a copy of my latest experience and project
                        portfolio.
                      </p>
                      <a
                        href="https://drive.google.com/file/d/14lekwJpuZyg3pav7BbZovxEIKGw0feKP/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 max-[380px]:w-full max-[380px]:justify-center max-[380px]:px-4 max-[380px]:py-2.5"
                      >
                        <FaDownload /> Download CV
                      </a>
                    </div>
                  </BorderGlow>
                </div>

                <div className="lg:col-span-2 space-y-8">
                  <div className="rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab]/85 p-8 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 max-[380px]:p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[380px]:text-xl">
                          About Me
                        </h3>
                        <ScrollReveal
                          baseOpacity={0}
                          enableBlur={true}
                          baseRotation={2}
                          blurStrength={5}
                          containerClassName="!m-0"
                          textClassName=" !font-normal !leading-relaxed font-mono tracking-wide text-zinc-600 dark:text-zinc-400"
                        >
                          Passionate frontend developer with over one year of
                          experience building responsive websites and web apps.
                          I focus on polished UI, accessible interfaces, and
                          clear content hierarchy.
                        </ScrollReveal>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div
                      id="education"
                      ref={(node) => {
                        sectionRefs.current.education = node;
                      }}
                      data-section="education"
                      className="scroll-mt-24 rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab] p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 max-[380px]:px-6 py-10"
                    >
                      <div className="flex items-center gap-3 text-zinc-950 dark:text-white">
                        <FaGraduationCap size={"24"} />
                        <h3 className="text-xl font-semibold">Education</h3>
                      </div>
                      <div className="mt-6 space-y-6">
                        {education.map((item) => (
                          <div key={item.title} className="space-y-2">
                            <h4 className="font-medium text-zinc-900 dark:text-white">
                              {item.title}
                            </h4>
                            <p className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                              <SlCalender />
                              {item.duration}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400">
                              <FaLocationDot />
                              {item.institution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      id="experience"
                      ref={(node) => {
                        sectionRefs.current.experience = node;
                      }}
                      data-section="experience"
                      className="scroll-mt-24 rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab] p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 max-[380px]:px-6 py-10"
                    >
                      <div className="flex items-start justify-between gap-3 text-zinc-950 dark:text-white ">
                        <div className="flex gap-2">
                          {" "}
                          <FaBriefcase size={"24"} />
                          <h3 className="text-xl font-semibold">Experience</h3>
                        </div>

                        <span className="total-exp text-sm text-zinc-700 dark:text-zinc-400">
                          17 Months
                        </span>
                      </div>
                      <div className="mt-8 space-y-6">
                        {experience.map((item) => (
                          <div key={item.title} className="space-y-2">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="font-medium text-zinc-950 dark:text-white">
                                {item.title}
                              </h4>
                              <span className="rounded-full border border-[#dcc4a8] bg-[#f1dfca] px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 w-fit dark:text-zinc-300">
                                {item.role}
                              </span>
                            </div>
                            <p className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                              <FaLocationDot /> {item.company}
                            </p>
                            <p className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                              <SlCalender />
                              {item.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
