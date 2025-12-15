import Link from "next/link";
import Image from "next/image";

export default function NUSClimatePage() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-lg font-semibold hover:bg-gray-50"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          NUSClimate (LTA Project)
        </h1>

        <p className="mt-4 text-lg text-gray-600 whitespace-pre-line">
          Overseen by a professor from NUS College, a group of friends and I embarked on a
          project in partnership with the Land Transport Authority (LTA) to study and improve Singaporean youths&apos;
          knowledge of climate change. Our project seeks to do this through the use of a prediction market, where
          youths can seek rewards by correctly answering questions about climate change.
          As of December 2025, NUSClimate wrapped up our pilot study and have conducted our post-study surveys and focus group
          discussions with our participants.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-gray-600">
          What the prediction market looks like:
        </h2>

        <Image
          src="/images/prediction_market.png"
          alt="Prediction Market Screenshot"
          width={1600}
          height={900}
          className="mt-4 w-full rounded-2xl border object-cover"
        />

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
      </div>
    </main>
  );
}
