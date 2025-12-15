import Link from "next/link";
import Image from "next/image";

export default function NUSClimatePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link className="text-sm underline" href="/">
        ← Back
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        NUSClimate (LTA Project)
      </h1>

      <p className="mt-4 text-lg text-gray-600 whitespace-pre-line">
  Overseen by a professor from NUS College, a group of friends and I embarked on a
  project in partnership with the Land Transport Authority (LTA) to create an
  online prediction market. NUSClimate used our prediction market to survey how
  much Singaporean youths know about climate change and to nudge them to learn a
  bit more and correct their misconceptions.
</p>

<h2 className="mt-10 text-lg font-semibold text-gray-600">
  What the prediction market looks like:
</h2>
<div className="mt-4 flex justify-center">
<Image
    src="/images/prediction_market.png"
    alt="Prediction Market Screenshot"
    width={1600}
    height={900}
    className="w-full max-w-xl rounded-2xl border object-cover"
  />
</div>

<h2 className="mt-10 text-lg font-semibold text-gray-600">
  and (part of) the team behind it!
</h2>
<div className="mt-4 flex justify-center">
<Image
    src="/images/IEX1.JPG"
    alt="NUSClimate team photo"
    width={1600}
    height={900}
    className="w-full max-w-xl rounded-2xl border object-cover"
  />
  </div>
    </main>
  );
}
