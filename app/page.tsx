import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <nav className="flex items-center justify-between">
        <div className="font-semibold">Haren Raj</div>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-black">
            About me
          </a>
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
          <a href="#extracurriculars" className="hover:text-black">
            Extracurriculars
          </a>
          <a href="#contact" className="hover:text-black">
            Reach me
          </a>
        </div>
      </nav>

      <header className="mt-14">
        <h1 className="text-4xl font-bold tracking-tight">
          NUS College and Business Analytics Sophomore
        </h1>

        {/* Removed description under the headline */}

        <div className="mt-6 flex gap-3">
          <a className="rounded-xl bg-black px-4 py-2 text-white" href="#projects">
            View projects
          </a>
          <a className="rounded-xl border px-4 py-2" href="#contact">
            Reach me
          </a>
        </div>
      </header>

      {/* About moved up + renamed */}
      <section id="about" className="mt-16">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-3 text-gray-600 whitespace-pre-line">
          Hi! I’m Haren and I love listening to different genres of music and learning about different cultures, but that’s not what you’re here to read about.

          {"\n\n"}
          Welcome to my website. It’ll give you some insight into what I’ve been working on in my free time as well as my skills and career goals.
        </p>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href="/projects/nusclimate"
            className="block rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="font-medium">NUSClimate (LTA Project)</div>
            <p className="mt-2 text-gray-600">
              An online prediction market built with LTA to survey and nudge Singaporean youths’ climate knowledge.
            </p>
          </Link>

          <Link
            href="/projects/academic-planner"
            className="block rounded-2xl border p-5 hover:bg-gray-50"
          >
            <div className="font-medium">Sample Academic Planner</div>
            <p className="mt-2 text-gray-600">
              Excel template to track graduation requirements and automatically calculate pre- and post- S/U CAPs.
            </p>
          </Link>
        </div>
      </section>

      <section id="extracurriculars" className="mt-16">
        <h2 className="text-2xl font-semibold">Extracurriculars</h2>

        <div className="mt-5 grid gap-4">
          <details className="rounded-2xl border p-5">
            <summary className="cursor-pointer list-none">
              <div className="font-medium">NUS College Football</div>
            </summary>
            <div className="mt-4 text-gray-600">
              <p>
                As part of NUS College’s Football team, I was fielded for NUS’ Inter Faculty and Inter College Games in AY 24/25.
                We even managed to clinch silver medals for the Inter College Games. I’m looking forward to competing more with this team.
              </p>

              {/* Replace these placeholders with your photos later */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border p-4 text-sm text-gray-500">Insert photo 1</div>
                <div className="rounded-xl border p-4 text-sm text-gray-500">Insert photo 2</div>
              </div>
            </div>
          </details>

          <details className="rounded-2xl border p-5">
            <summary className="cursor-pointer list-none">
              <div className="font-medium">NUS College Peer Mentorship Programme</div>
            </summary>
            <div className="mt-4 text-gray-600">
              <p>
                NUS College runs a programme every year where incoming freshmen are paired with a senior taking a similar programme to help answer any questions regarding university, campus life, their major or NUS College.
                As someone who benefitted from this programme greatly as a freshman, I decided to join it in my sophomore year as the Faculty Coordinator for the School of Computing.
                I matched mentees to mentors, coordinated with professors, and trained mentors on how to advise their mentees.
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
          </details>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold">Reach me</h2>
        <div className="mt-3 text-gray-600">
          <p>
            Email:{" "}
            <a className="underline" href="mailto:e1398538@u.nus.edu">
              e1398538@u.nus.edu
            </a>
          </p>
          <p className="mt-2">
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
      </section>
    </main>
  );
}
