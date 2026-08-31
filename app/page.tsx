"use client";

import dynamic from "next/dynamic";

const PaymentMap = dynamic(() => import("../Map"), {
  ssr: false,
});

type Scheme = {
  country: string;
  code: string;
  scheme: string;
  launch_year: number;
  maturity: string;
  region: string;
  description: string;
};

const schemes: Scheme[] = [
  {
    country: "United States",
    code: "US",
    scheme: "FedNow",
    launch_year: 2023,
    maturity: "Emerging",
    region: "North America",
    description:
      "Real-time payment infrastructure operated by the Federal Reserve.",
  },
  {
    country: "India",
    code: "IN",
    scheme: "UPI",
    launch_year: 2016,
    maturity: "Mature",
    region: "Asia",
    description:
      "India's widely adopted instant payment system.",
  },
  {
    country: "United Kingdom",
    code: "UK",
    scheme: "Faster Payments",
    launch_year: 2008,
    maturity: "Mature",
    region: "Europe",
    description:
      "UK instant payment infrastructure enabling near real-time transfers.",
  },
  {
    country: "Singapore",
    code: "SG",
    scheme: "FAST",
    launch_year: 2014,
    maturity: "Mature",
    region: "Asia",
    description:
      "Singapore's fast and secure domestic payment system.",
  },
  {
    country: "Brazil",
    code: "BR",
    scheme: "Pix",
    launch_year: 2020,
    maturity: "Mature",
    region: "South America",
    description:
      "Brazil's instant payment platform developed by the Central Bank of Brazil.",
  },
];

export default function Home() {
  const totalCountries = schemes.length;

  const matureSystems = schemes.filter(
    (item) => item.maturity === "Mature"
  ).length;

  const emergingSystems = schemes.filter(
    (item) => item.maturity === "Emerging"
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Payment Infrastructure POC
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Real-Time Payments Map
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Explore real-time payment systems and instant payment
                infrastructure across different countries.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Statistics */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Countries */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm font-medium text-slate-400">
              Countries
            </p>

            <p className="mt-3 text-4xl font-bold text-white">
              {totalCountries}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Payment markets tracked
            </p>
          </div>

          {/* Payment Systems */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm font-medium text-slate-400">
              Payment Systems
            </p>

            <p className="mt-3 text-4xl font-bold text-white">
              {schemes.length}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Real-time schemes
            </p>
          </div>

          {/* Mature */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm font-medium text-slate-400">
              Mature Systems
            </p>

            <p className="mt-3 text-4xl font-bold text-emerald-400">
              {matureSystems}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Established infrastructure
            </p>
          </div>

          {/* Emerging */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <p className="text-sm font-medium text-slate-400">
              Emerging Systems
            </p>

            <p className="mt-3 text-4xl font-bold text-amber-400">
              {emergingSystems}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Developing infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Map Header */}
          <div className="border-b border-slate-800 px-6 py-6">
            <h2 className="text-2xl font-bold text-white">
              Global Payment Infrastructure
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Click a marker to view payment-system details.
            </p>

            {/* Legend */}
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-slate-400">
                  Mature
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="text-slate-400">
                  Emerging
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-800 p-3">
            <div className="overflow-hidden rounded-xl">
              <PaymentMap schemes={schemes} />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Systems */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            Payment Systems
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Overview of the real-time payment systems represented on the map.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {schemes.map((item) => (
            <article
              key={item.code}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-slate-700"
            >
              {/* Country + maturity */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.country}
                  </h3>

                  <p className="mt-1 text-base font-semibold text-blue-400">
                    {item.scheme}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.maturity === "Mature"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-amber-400/10 text-amber-400"
                  }`}
                >
                  {item.maturity}
                </span>
              </div>

              {/* Code */}
              <div className="mt-5 inline-flex rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold tracking-wider text-slate-300">
                {item.code}
              </div>

              {/* Details */}
              <div className="mt-5 space-y-3 border-t border-slate-800 pt-5">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Launch year
                  </span>

                  <span className="text-sm font-medium text-slate-200">
                    {item.launch_year}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Region
                  </span>

                  <span className="text-sm font-medium text-slate-200">
                    {item.region}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center lg:px-8">
          <p className="text-sm text-slate-500">
            Real-Time Payments Map • Proof of Concept
          </p>
        </div>
      </footer>
    </main>
  );
}
