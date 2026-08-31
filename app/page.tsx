"use client";

import dynamic from "next/dynamic";

const PaymentMap = dynamic(() => import("../Map"), {
  ssr: false,
});

const schemes = [
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
  const matureCount = schemes.filter(
    (item) => item.maturity === "Mature"
  ).length;

  const emergingCount = schemes.filter(
    (item) => item.maturity === "Emerging"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Payment Infrastructure POC
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real-Time Payments Map
            </h1>

            <p className="max-w-2xl text-slate-600">
              Explore real-time payment systems and instant payment
              infrastructure across different countries.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Statistics */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Countries
            </p>

            <p className="mt-2 text-3xl font-bold">
              {schemes.length}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Payment markets tracked
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Payment Systems
            </p>

            <p className="mt-2 text-3xl font-bold">
              {schemes.length}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Real-time schemes
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Mature Systems
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {matureCount}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Established infrastructure
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Emerging Systems
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              {emergingCount}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Developing infrastructure
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b px-6 py-5">
            <h2 className="text-xl font-bold">
              Global Payment Infrastructure
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Click a marker to view payment-system details.
            </p>
          </div>

          <div className="p-3">
            <PaymentMap schemes={schemes} />
          </div>
        </section>

        {/* Payment systems */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold">
              Payment Systems
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Overview of the real-time payment systems represented
              on the map.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schemes.map((item) => (
              <div
                key={item.code}
                className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      {item.country}
                    </h3>

                    <p className="mt-1 font-medium text-blue-600">
                      {item.scheme}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                    {item.code}
                  </span>
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Launch year
                    </span>

                    <span className="font-semibold">
                      {item.launch_year}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Region
                    </span>

                    <span className="font-semibold">
                      {item.region}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Maturity
                    </span>

                    <span
                      className={
                        item.maturity === "Mature"
                          ? "font-semibold text-green-600"
                          : "font-semibold text-orange-500"
                      }
                    >
                      {item.maturity}
                    </span>
                  </div>
                </div>

                <p className="mt-5 border-t pt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t py-6 text-center text-sm text-slate-500">
          Real-Time Payments Map • Proof of Concept
        </footer>
      </div>
    </main>
  );
}
