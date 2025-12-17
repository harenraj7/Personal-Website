"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isFootballOpen, setIsFootballOpen] = useState(false);
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);
  const [isBactOpen, setIsBactOpen] = useState(false);
  const [isDebateOpen, setIsDebateOpen] = useState(false);

  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <nav className="flex items-center justify-end">
          <div className="flex gap-3 text-sm">
            <a
              href="#about"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            >
              About me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            >
              Projects
            </a>
            <a
              href="#school-work"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            >
               Noteworthy Coursework
            </a>
            <a
              href="#extracurriculars"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            >
              Extracurriculars
            </a>
            <a
              href="#footer"
              className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            >
              Reach me
            </a>
          </div>
        </nav>

        <header className="mt-14">
          <h1 className="text-5xl font-bold tracking-tight">Haren Raj</h1>
          <p className="mt-3 text-2xl font-semibold text-gray-600">
            Business Analytics and NUS College Sophomore
          </p>
        </header>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold">About me</h2>

          <p className="mt-3 text-gray-600">
            Hi! Welcome to my website. I’m Haren and I&apos;m passionate about music,
            sports, culture, and adventure.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Image
              src="/images/self-photo.JPG"
              alt="self photo 1"
              width={1600}
              height={1200}
              className="w-full rounded-2xl border object-cover"
            />
            <Image
              src="/images/self-photo3-updated.png"
              alt="self photo 2"
              width={1600}
              height={1200}
              className="w-full rounded-2xl border object-cover"
            />
          </div>

          <p className="mt-6 text-gray-600">
            But that&apos;s not what you&apos;re here to find out about. This website is
            meant to give whoever&apos;s reading an idea on what I&apos;ve been working on
            in my free time as well as the skills I&apos;ve developed along the way.
          </p>
        </section>

        <section id="projects" className="mt-16">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <p className="mt-3 text-gray-600">
            Personal and group projects. Click to see more.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/projects/nusclimate"
              className="block rounded-2xl border bg-white/80 p-5 shadow-sm hover:bg-white"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="text-xl font-semibold">NUSClimate (LTA Project)</div>
                  <p className="mt-2 text-gray-600">
                    An online prediction market built under LTA&apos;s supervision to
                    study and improve Singaporean youths’ knowledge of climate change.
                  </p>
                </div>

                <Image
                  src="/images/nusclimate_1_updated.jpg"
                  alt="NUSClimate"
                  width={200}
                  height={200}
                  className="h-20 w-20 shrink-0 rounded-xl object-contain"
                />
              </div>
            </Link>

            <Link
              href="/projects/academic-planner"
              className="block rounded-2xl border bg-white/80 p-5 shadow-sm hover:bg-white"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="text-xl font-semibold">Sample Academic Planner</div>
                  <p className="mt-2 text-gray-600">
                    Excel template to automatically and systematically track graduation
                    requirements and calculate pre- and post- S/U CAPs.
                  </p>
                </div>

                <Image
                  src="/images/excel_logo.png"
                  alt="Academic Planner"
                  width={200}
                  height={200}
                  className="h-20 w-20 shrink-0 rounded-xl object-contain"
                />
              </div>
            </Link>
          </div>
        </section>

        <section id="school-work" className="mt-16">
          <h2 className="text-2xl font-semibold">Work and skills</h2>
          <p className="mt-3 text-gray-600">
            A glimpse into the work I've done and skills I've developed. Scroll to see more.
          </p>

          {/* Horizontal carousel */}
          <div className="mt-5">
            <div className="-mx-6 px-6 overflow-x-auto pb-2">
              <div className="flex w-max snap-x snap-mandatory gap-4">

                <div className="snap-start w-[320px] sm:w-[420px] flex-none rounded-2xl border bg-white/80 p-5 shadow-sm">
  <div className="flex items-center justify-between gap-6">
    <div className="min-w-0">
      <div className="text-xl font-semibold">CS2040</div>
      <p className="mt-2 text-gray-600 whitespace-normal break-words">
                        Optimised common computer science algorithms for specific problems
                        and questions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="snap-start w-[320px] sm:w-[420px] flex-none rounded-2xl border bg-white/80 p-5 shadow-sm">
  <div className="flex items-center justify-between gap-6">
    <div className="min-w-0">
      <div className="text-xl font-semibold">BT2102</div>
      <p className="mt-2 text-gray-600 whitespace-normal break-words">
                        Utilised Tableau and SQL for a group project and presentation on a given e-commerce dataset.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="snap-start w-[320px] sm:w-[420px] flex-none rounded-2xl border bg-white/80 p-5 shadow-sm">
  <div className="flex items-center justify-between gap-6">
    <div className="min-w-0">
      <div className="text-xl font-semibold">CS2030</div>
      <p className="mt-2 text-gray-600 whitespace-normal break-words">
        Built a Java event simulator on the bases of functional and
        object-oriented programming.
      </p>
    </div>
  </div>
</div>


                <div className="snap-start w-[320px] sm:w-[420px] flex-none rounded-2xl border bg-white/80 p-5 shadow-sm">
  <div className="flex items-center justify-between gap-6">
    <div className="min-w-0">
      <div className="text-xl font-semibold">CS1010A</div>
      <p className="mt-2 text-gray-600 whitespace-normal break-words">
                        Learnt simple programming concepts through the use of Python.
                      </p>
                    </div>
                  </div>
                </div>
                
<div className="snap-start w-[320px] sm:w-[420px] flex-none rounded-2xl border bg-white/80 p-5 shadow-sm">
  <div className="flex items-center justify-between gap-6">
    <div className="min-w-0">
      <div className="text-xl font-semibold">The Digital and Intelligence Service</div>
      <p className="mt-2 text-gray-600 whitespace-normal break-words">
        Conducted open-source intelligence for counter-terrorism military intelligence.
      </p>

      <Image
                  src="/images/DIS-LOGO-60e543.jpg"
                  alt="DIS"
                  width={200}
                  height={200}
                  className="h-20 w-20 shrink-0 rounded-xl object-contain"
                />
      
    </div>
  </div>
</div>
                
              </div>
            </div>
          </div>
        </section>

        <section id="extracurriculars" className="mt-16">
          <h2 className="text-2xl font-semibold">Extracurriculars</h2>

          <div className="mt-5 grid auto-rows-min items-start gap-4 md:grid-cols-2">
            {/* Football card */}
            <div className="h-fit rounded-2xl border bg-white/80 p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setIsFootballOpen((v) => !v)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg transition-transform duration-200 ${
                        isFootballOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                    <div className="text-xl font-semibold">NUS College Football</div>
                  </div>

                  <Image
                    src="/images/footballnet.jpeg"
                    alt="Football"
                    width={128}
                    height={128}
                    className="h-20 w-20 shrink-0 rounded-lg object-contain"
                  />
                </div>
              </button>

              {isFootballOpen && (
                <div className="mt-4 text-gray-600">
                  <p>
                    As part of NUS College’s Football team, I was fielded for NUS’
                    Inter Faculty and Inter College Games in AY 24/25. Our team even
                    managed to clinch silver medals for the Inter College Games.
                    I’m looking forward to competing more with this team.
                  </p>

                  <div className="mt-4 grid gap-3">
                    <Image
                      src="/images/Football_1.JPEG"
                      alt="NUS College Football photo 1"
                      width={1600}
                      height={1200}
                      className="w-full rounded-xl border object-cover"
                    />
                    <Image
                      src="/images/Football_2.JPG"
                      alt="NUS College Football photo 2"
                      width={1600}
                      height={1200}
                      className="w-full rounded-xl border object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Mentorship card */}
            <div className="h-fit rounded-2xl border bg-white/80 p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setIsMentorshipOpen((v) => !v)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg transition-transform duration-200 ${
                        isMentorshipOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                    <div className="text-xl font-semibold">
                      NUS College Peer Mentorship Programme
                    </div>
                  </div>

                  <Image
                    src="/images/nusc_logo.png"
                    alt="NUS College logo"
                    width={128}
                    height={128}
                    className="h-20 w-20 shrink-0 rounded-lg object-contain"
                  />
                </div>
              </button>

              {isMentorshipOpen && (
                <div className="mt-4 text-gray-600">
                  <p>
                    NUS College runs a programme every year where incoming freshmen
                    are paired with a senior taking a similar programme to help
                    answer any questions regarding university, campus life, their
                    major or NUS College.
                  </p>
                  <p>
                    As someone who benefitted from this programme greatly as a freshman,
                    I decided to join it in my sophomore year as the Faculty Coordinator
                    for the School of Computing. I matched mentees to mentors,
                    coordinated with professors, and trained mentors on how to advise
                    their mentees. I also had the privilege of taking my own mentees
                    under my wing and being their mentor.
                  </p>

                  <p className="mt-4">
                    For more information on this programme, click the link{" "}
                    <a
                      className="underline"
                      href="https://nuscollege.nus.edu.sg/academics/peer-mentoring/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    !
                  </p>
                </div>
              )}
            </div>

            {/* NEW: SOC rep (example) */}
            <div className="h-fit rounded-2xl border bg-white/80 p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setIsBactOpen((v) => !v)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg transition-transform duration-200 ${
                        isBactOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                    <div className="text-xl font-semibold">
                      School of Computing Student Ambassador
                    </div>
                  </div>
                </div>
              </button>

              {isBactOpen && (
                <div className="mt-4 text-gray-600">
                  <p>
                    Answered questions to prospective students and concerned parents about
                    Business Analytics and School of Computing at NUS' Open House, giving them and idea of career
                    prospects and what to expect as a student.
                  </p>
                </div>
              )}
            </div>

            {/* NEW: Debate/Public speaking (example) */}
            <div className="h-fit rounded-2xl border bg-white/80 p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setIsDebateOpen((v) => !v)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg transition-transform duration-200 ${
                        isDebateOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                    <div className="text-xl font-semibold">
                      Competitions
                    </div>
                  </div>
                </div>
              </button>

              {isDebateOpen && (
  <div className="mt-4 text-gray-600">
    Click{" "}
    <Link href="/case-competitions" className="underline font-medium">
      here
    </Link>{" "}
    to see more
  </div>
)}
            </div>
          </div>
        </section>

        <footer id="footer" className="mt-20 border-t pt-8 text-sm text-gray-600">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-gray-900">Reach me</p>

            <p>
              Email:{" "}
              <a className="underline" href="mailto:e1398538@u.nus.edu">
                e1398538@u.nus.edu
              </a>
            </p>

            <p>
              <a
                className="underline"
                href="https://www.linkedin.com/in/haren-raj-417625256/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
