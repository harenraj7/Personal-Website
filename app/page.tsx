"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isFootballOpen, setIsFootballOpen] = useState(false);
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
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
      href="#extracurriculars"
      className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
    >
      Extracurriculars
    </a>
  </div>
</nav>

      <header className="mt-14">
        <h1 className="text-5xl font-bold tracking-tight">Haren Raj</h1>
        <p className="mt-3 text-2xl font-semibold text-gray-600">
          NUS College and Business Analytics Sophomore
        </p>
      </header>

      <section id="about" className="mt-16">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-3 text-gray-600">
  Hi! I’m Haren and I love listening to different genres of music and learning
  about different cultures, but that’s not what you’re here to read about.
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
    src="/images/self-photo2.png"
    alt="self photo 2"
    width={1600}
    height={1200}
    className="w-full rounded-2xl border object-cover"
  />
</div>

<p className="mt-6 text-gray-600">
  Welcome to my website. It’ll give you some insight into what I’ve been working
  on in my free time as well as my skills and career goals.
</p>

      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold">Projects (click to see more)</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href="/projects/nusclimate"
            className="block rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="text-xl font-semibold">NUSClimate (LTA Project)</div>
            <p className="mt-2 text-gray-600">
              An online prediction market built with LTA to study and improve
              Singaporean youths’ climate knowledge.
            </p>
          </Link>

          <Link
            href="/projects/academic-planner"
            className="block rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="text-xl font-semibold">Sample Academic Planner</div>
            <p className="mt-2 text-gray-600">
              Excel template to automatically and systematically track graduation
              requirements and calculate pre- and post- S/U CAPs.
            </p>
          </Link>
        </div>
      </section>

      <section id="extracurriculars" className="mt-16">
        <h2 className="text-2xl font-semibold">Extracurriculars</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 md:items-start">
          {/* Football card */}
          <div className="h-fit rounded-2xl border p-4">
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
                  Inter Faculty and Inter College Games in AY 24/25. We even
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
          <div className="h-fit rounded-2xl border p-4">
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
                  major or NUS College. As someone who benefitted from this
                  programme greatly as a freshman, I decided to join it in my
                  sophomore year as the Faculty Coordinator for the School of
                  Computing. I matched mentees to mentors, coordinated with
                  professors, and trained mentors on how to advise their mentees.
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
        </div>
      </section>

      <footer id="footer" className="mt-20 border-t pt-8 text-sm text-gray-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
    </main>
  );
}
