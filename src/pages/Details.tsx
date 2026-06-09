import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { education, experience } from "../data/portfolio";
import { Link } from "react-router-dom";

const Details = () => {
  const calcAge = new Date().getFullYear() - 2002;

  return (
    <>
      <main className="bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_40%),linear-gradient(180deg,#fffaf3_0%,#f5e8da_100%)] text-zinc-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,#09090b_0%,#111113_100%)] dark:text-zinc-100 lg:hidden block">
      <section className="mx-auto max-w-[90%] px-4 py-16 sm:max-w-md">
 {/* Swipe hint */}
  <p className="text-xs mb-4 font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
             <Link
               to="/"
               className="cursor-target transition hover:text-zinc-950 dark:hover:text-white text-slate-800 font-bold"
             >
               Home
             </Link>
             <span className="mx-2 text-zinc-400 dark:text-zinc-500">/</span>
             <span>About </span>
           </p>
        <p className="mb-6 text-center text-sm font-semibold text-zinc-400 dark:text-zinc-600">
          Swipe to explore 
        </p>
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full"
        >
          {/* ── Slide 1: Profile ── */}
          <SwiperSlide className="!rounded-[1.75rem] overflow-hidden">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8] p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900 ">
             
             <div className="flex items-center justify-between gap-2 mb-3 flex-row max-[380px]:flex-col">
               <img
                src="/images/my-pic-new.jpg"
                alt="Khalid Raja"
                className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-[#dcc4a8] dark:ring-white/10"
              />
              <div className="space-y-2 text-center">
                <h2 className="sm:text-2xl min-[380px]:text-xl text-base mb-0 font-semibold tracking-tight text-zinc-950 dark:text-white text-end max-[380px]:text-center">
                  Khalid Raja
                </h2>
                <span className="text-end max-[380px]:text-center inline-flex items-center justify-center gap-1 sm:text-sm text-zinc-600 dark:text-zinc-400 text-xs">
                   Varanasi, Uttar Pradesh. <FaLocationDot />
                </span>
                <div className="flex flex-wrap justify-end gap-2 pt-1">
                  <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-medium  border-amber-300 text-amber-600 ">
                    Age : {calcAge}
                  </span>
                  <a
                    href="mailto:Khalidraza30565@gmail.com"
                    className="rounded-full border border-amber-600 px-4 font-bold py-1.5 text-xs text-zinc-700 transition hover:bg-[#f1dfca] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10 "
                  >
                    Hire Me
                  </a>
                </div>
              </div>
             </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
                  <FaEnvelope className="shrink-0 text-zinc-950 dark:text-white" />
                  <a 
                   href="mailto:Khalidraza30565@gmail.com"
                  className="min-w-0 break-all dark:text-white text-black text-sm">khalidraza30565@gmail.com</a> 
                  
                  
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
                  <FaGithub className="shrink-0 text-zinc-950 dark:text-white" />
                  <a href="https://github.com/khalid-raza03" target="_blank" rel="noreferrer"
                    className="min-w-0 break-all underline decoration-zinc-300 underline-offset-4 dark:text-white text-black">
                    @khalid-raza03
                  </a>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
                  <FaLinkedin className="shrink-0 text-zinc-950 dark:text-white" />
                  <a href="https://www.linkedin.com/in/khalid-raja-0aa797187/" target="_blank" rel="noreferrer"
                    className="min-w-0 break-all underline decoration-zinc-300 underline-offset-4 text-black dark:text-white">
                    @Khalid_raza
                  </a>
                </div>
              </div>

                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border mt-2 border-black rounded-2xl dark:border-white text-black dark:text-white text-xs w-fit self-center">
                 1 / 5 
                </span>
            </div>
          </SwiperSlide>

          {/* ── Slide 2: Download CV ── */}
          <SwiperSlide className="!rounded-[1.75rem] overflow-hidden">
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab] p-8 text-center shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 dark:bg-white">
                <FaDownload className="text-xl text-white dark:text-zinc-950" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold text-zinc-950 dark:text-white">
                  Download My CV
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Get a copy of my latest experience and project portfolio.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/14lekwJpuZyg3pav7BbZovxEIKGw0feKP/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                <FaDownload /> Download CV
              </a>

                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border mt-2 border-black rounded-2xl dark:border-white text-black dark:text-white text-xs w-fit self-center">
                 2 / 5 
                </span>
            </div>
          </SwiperSlide>

          {/* ── Slide 3: About Me ── */}
          <SwiperSlide className="!rounded-[1.75rem] overflow-hidden">
            <div className="flex min-h-[420px] flex-col justify-center rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8] p-8 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                About Me
              </h3>
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg text-base">
                Passionate <strong className="text-amber-500">Frontend Web Developer</strong> with over <strong className="text-amber-500">1 year</strong>  of experience
                building responsive websites and web apps. I focus on polished
                UI, accessible interfaces, and clear content hierarchy utilising <strong className="text-amber-500">Tailwind Css , Material UI, ShadCn Ui, Vanilla js ( ES6 +), React.js, Typescript etc.</strong> .
              </p>
                 <span className="inline-flex mt-3 items-center gap-2 px-4 py-2 bg-accent border mt-2 border-black rounded-2xl dark:border-white text-black dark:text-white text-xs w-fit self-center">
                 3 / 5 
                </span>
            </div>
          </SwiperSlide>

          {/* ── Slide 4: Education ── */}
          <SwiperSlide className="!rounded-[1.75rem] overflow-hidden">
            <div className="flex  flex-col rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#e5cbab] p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900">
              <div className="flex items-center gap-3 text-zinc-950 dark:text-white">
                <FaGraduationCap size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div key={item.title} className="space-y-1.5 rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 dark:border-white/10 dark:bg-white/5">
                    <h4 className="font-medium text-zinc-900 dark:text-white">{item.title}</h4>
                    <p className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <SlCalender /> {item.duration}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <FaLocationDot /> {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border mt-2 border-black rounded-2xl dark:border-white text-black dark:text-white text-xs w-fit self-center">
                 4 / 5 
                </span>
            </div>
          </SwiperSlide>

          {/* ── Slide 5: Experience ── */}
          <SwiperSlide className="!rounded-[1.75rem] overflow-hidden">
            <div className="flex min-h-[420px] flex-col rounded-[1.75rem] border border-[#dcc4a8]/70 bg-[#f8ead8] p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-zinc-900">
              <div className="flex max-[380px]:flex-col min-[380px]:items-start items-center  justify-between gap-3 text-zinc-950 dark:text-white">
                <div className="flex items-center gap-2">
                  <FaBriefcase size={24} />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <span className="rounded-full border border-[#dcc4a8] bg-[#f1dfca] px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 inline-flex items-center">
                  17 Months
                </span>
              </div>
              <div className="mt-6 sm:space-y-4 space-y-2">
                {experience.map((item) => (
                  <div key={item.title} className="space-y-1.5 rounded-2xl border border-[#dcc4a8]/70 bg-[#f1dfca] p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-medium text-zinc-950 dark:text-white sm:text-base text-sm">{item.title}</h4>
                      <span className="rounded-full border border-[#dcc4a8] bg-white/60 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                        {item.role}
                      </span>
                    </div>
                    <p className="flex items-center gap-2  text-zinc-700 dark:text-zinc-400 sm:text-sm  text-xs">
                      <FaLocationDot /> {item.company}
                    </p>
                    <p className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                      <SlCalender /> {item.duration}
                    </p>
                  </div>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border mt-2 border-black rounded-2xl dark:border-white text-black dark:text-white text-xs w-fit self-center">
                 5/5 
                <FaArrowLeft /> Swipe Left</span>
            </div>
          </SwiperSlide>
        </Swiper>

       
      </section>
    </main>

    <div className=" items-center justify-center min-h-screen lg:flex hidden">
        <Link
        to="/"
        className="rounded-full bg-[#e5cbab] p-4 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.25)] hover:bg-[#d9b89a] dark:bg-zinc-900 dark:shadow-none flex items-center gap-2"
        >
          Nothing here, go back 
          <FaArrowLeft />
        </Link>
    </div>
    </>
  
  );
};

export default Details;