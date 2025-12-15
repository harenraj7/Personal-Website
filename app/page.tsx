export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <nav className="flex items-center justify-between">
        <div className="font-semibold">Haren Raj</div>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </nav>

      <header className="mt-14">
        <h1 className="text-4xl font-bold tracking-tight">Business Analytics @ NUS</h1>
        <p className="mt-3 text-lg text-gray-600">
          I build data-driven stories and analyses using SQL, R, Python, and Tableau.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="rounded-xl bg-black px-4 py-2 text-white" href="#projects">View projects</a>
          <a className="rounded-xl border px-4 py-2" href="#contact">Contact</a>
        </div>
      </header>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <div className="font-medium">Airbnb London Analysis</div>
            <p className="mt-2 text-gray-600">
              Built regression models and a dashboard to explain engagement drivers.
            </p>
            <p className="mt-3 text-sm text-gray-500">R · SQL · Tableau</p>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="font-medium">Java Simulation (CS2030S)</div>
            <p className="mt-2 text-gray-600">
              Functional, immutable event simulation with priority queue processing.
            </p>
            <p className="mt-3 text-sm text-gray-500">Java 21</p>
          </div>
        </div>
      </section>

      <section id="about" className="mt-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-gray-600">
          I’m interested in product analytics, experimentation, and turning messy data into decisions people can act on.
        </p>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-3 text-gray-600">
          <p>Email: <a className="underline" href="mailto:you@example.com">you@example.com</a></p>
          <p className="mt-2">
            <a className="underline" href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">GitHub</a>{" "}
            ·{" "}
            <a className="underline" href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </section>
    </main>
  );
}
