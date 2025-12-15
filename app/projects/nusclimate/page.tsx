import Link from "next/link";

export default function NUSClimatePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link className="text-sm underline" href="/">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">NUSClimate [LTA Project]</h1>

      <p className="mt-4 text-gray-600 whitespace-pre-line">
        Overseen by a professor from NUS College, a group of friends and I embarked on a project in partnership with the Land Transport Authority (LTA) to create an online prediction market. NUSClimate used our prediction market to survey how much Singaporean youths know about climate change and to nudge them to learn a bit more and correct their misconceptions.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">Prediction market screenshot</h2>
      <div className="mt-4 rounded-2xl border p-6 text-sm text-gray-500">
        Insert screenshot here
        <div className="mt-2 text-xs">
          Put your image in <code className="font-mono">/public/images/</code> and replace this box with an &lt;img&gt; or Next Image.
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Team photo</h2>
      <div className="mt-4 rounded-2xl border p-6 text-sm text-gray-500">
        Insert group photo here
      </div>
    </main>
  );
}
