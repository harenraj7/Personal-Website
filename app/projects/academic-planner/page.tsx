import Link from "next/link";
import Image from "next/image";

export default function AcademicPlannerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-20 -right-24 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border bg-white/70 px-4 py-2 text-lg font-semibold backdrop-blur hover:bg-gray-50/80"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Sample Academic Planner
        </h1>

        <p className="mt-4 text-gray-600 whitespace-pre-line">
          In an attempt to calculate my GPA and make my academic plan for university,
          I made my job 10 times as complicated as it needed to be. I created an excel
          sheet that helped me track the modules I needed to take to fulfil my
          graduation requirements and automatically calculate both my pre- and post-
          S/U CAPs.
        </p>

        <p className="mt-4 text-gray-600 whitespace-pre-line">
          But I didn’t do more work than I need to just for fun, I did it to make
          other people’s lives easier too. I’ve uploaded the template below for anyone
          who might find the sheet helpful. Small note, change the colour of each
          entry to match the colours of the 4 categories at the bottom and run the
          macro titled “RefreshColourRouting” to automatically tabulate how many module
          credits fulfil each requirement.
        </p>

        <Image
          src="/images/acad_planner1.png"
          alt="Modules"
          width={1600}
          height={900}
          className="w-full sm:w-1/2 rounded-2xl border object-cover"
        />

        <Image
          src="/images/acad_planner2.png"
          alt="GPA calculation"
          width={1600}
          height={900}
          className="w-full sm:w-1/2 rounded-2xl border object-cover"
        />

        <div className="mt-8">
          <a
            className="inline-flex items-center rounded-xl bg-black px-4 py-2 font-semibold text-white hover:bg-black/90"
            href="/images/sample_acad_planner.xlsm"
            download
          >
            Download here
          </a>
        </div>
      </div>
    </main>
  );
}
