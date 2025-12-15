"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isFootballOpen, setIsFootballOpen] = useState(false);
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);

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
            Hi! Welcome to my website. I’m Haren and I'm passionate about music,
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
            But that's not what you're here to find out about. This website is
            meant to give whoever's reading an idea on what I've been working on
            in my free time as well as the skills I've developed along the way.
          </p>
        </section>

        <section id="projects" className="mt-16">
          <h2 className="text-2xl font-semibold">Projects (click to see more)</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/projects/nusclimate"
              className="block rounded-2xl border bg-white/70 p-5 backdrop-blur hover:bg-gray-50/80"
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
              className="block rounded-2xl border bg-white/70 p-5 backdrop-blur hover:bg-gray-50/80"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="text-xl font-semibold">Sample Academic Planner</div>
                  <p className="mt-2 text-gray-600">
                    Excel template to automatically and systematically track
::contentReference[oaicite:1]{index=1}
