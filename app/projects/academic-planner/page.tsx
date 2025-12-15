import Link from "next/link";

export default function AcademicPlannerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link className="text-sm underline" href="/">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        Sample Academic Planner
      </h1>

      <p className="mt-4 text-gray-600 whitespace-pre-line">
        In an attempt to calculate my GPA and make my academic plan for university,
        I made my job 10 times as complicated as it needed to be. I created an
        excel sheet that helped me track the modules I needed to take to fulfil my
        graduation requirements and automatically calculate both my pre- and post-
        S/U CAPs.

        {"\n\n"}
        But I didn’t do more work than I need to just for fun, I did it to make
        other people’s lives easier too. I’ve uploaded the template below for anyone
        who might find the sheet helpful. Small note, change the colour of each
        entry to match the colours of the 4 categories at the bottom and run the
        macro titled “RefreshColourRouting” to automatically tabulate how many module
        credits fulfil each requirement.
      </p>

      <div className="mt-8">
        <a
          className="inline-block rounded-xl bg-black px-4 py-2 text-white"
          href="/images/sample_acad_planner.xlsm"
          download
        >
          Download the Excel template
        </a>
      </div>
    </main>
  );
}
