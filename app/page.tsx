"use client";

import PaymentMap from "../Map";

type Scheme = {
  country: string;
  system: string;
  code: string;
  launchYear: number;
  region: string;
  maturity: "Mature" | "Emerging";
  description: string;
  lat?: number;
  lng?: number;
};

const schemes: Scheme[] = [
  {
    country: "United States",
    system: "FedNow",
    code: "US",
    launchYear: 2023,
    region: "North America",
    maturity: "Emerging",
    description:
      "Real-time payment infrastructure operated by the Federal Reserve.",
    lat: 39.8283,
    lng: -98.5795,
  },
  {
    country: "India",
    system: "UPI",
    code: "IN",
    launchYear: 2016,
    region: "Asia",
    maturity: "Mature",
    description:
      "India's widely adopted instant payment system.",
    lat: 20.5937,
    lng: 78.9629,
  },
  {
    country: "United Kingdom",
    system: "Faster Payments",
    code: "UK",
    launchYear: 2008,
    region: "Europe",
    maturity: "Mature",
    description:
      "UK instant payment infrastructure enabling near real-time transfers.",
    lat: 55.3781,
    lng: -3.436,
  },
  {
    country: "Singapore",
    system: "FAST",
    code: "SG",
    launchYear: 2014,
    region: "Asia",
    maturity: "Mature",
    description:
      "Singapore's fast and secure domestic payment system.",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    country: "Brazil",
    system: "Pix",
    code: "BR",
    launchYear: 2020,
    region: "South America",
    maturity: "Mature",
    description:
      "Brazil's instant payment platform developed by the Central Bank of Brazil.",
    lat: -14.235,
    lng: -51.9253,
  },
];

export default function Page() {
  const matureSystems = schemes.filter(
    (scheme) => scheme.maturity === "Mature"
  ).length;

  const emergingSystems = schemes.filter(
    (scheme) => scheme.maturity === "Emerging"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* HEADER */}
        <header className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            Payment Infrastructure POC
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Real-Time Payments Map
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-slate-500">
            Explore real-time payment systems and instant payment
            infrastructure across different countries.
          </p>
        </header>

        {/* STATISTICS */}
        <section className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Countries"
            value={schemes.length}
            description="Payment markets tracked"
          />

          <StatCard
            title="Payment Systems"
            value={schemes.length}
            description="Real-time schemes"
          />

          <StatCard
            title="Mature Systems"
            value={matureSystems}
            description="Established infrastructure"
          />

          <StatCard
            title="Emerging Systems"
            value={emergingSystems}
            description="Developing infrastructure"
          />

        </section>

        {/* MAP */}
        <section className="mb-14">

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Global Payment Infrastructure
          </h2>

          <p className="mb-5 mt-2 text-lg text-slate-500">
            Click a marker to view payment-system details.
          </p>

          {/* LEGEND */}
          <div className="mb-5 flex flex-wrap gap-6 text-sm font-medium text-slate-600">

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
              <span>Mature</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-amber-500" />
              <span>Emerging</span>
            </div>

          </div>

          <PaymentMap schemes={schemes} />

        </section>

        {/* PAYMENT SYSTEMS */}
        <section>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Payment Systems
          </h2>

          <p className="mb-7 mt-2 text-lg text-slate-500">
            Overview of the real-time payment systems represented on the map.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {schemes.map((scheme) => (
              <div
                key={scheme.code}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                {/* COUNTRY AND SYSTEM */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-extrabold">
                      {scheme.country}
                    </h3>

                    <p className="mt-1 text-lg font-bold text-blue-600">
                      {scheme.system}
                    </p>
                  </div>

                  <span
                    className={
                      scheme.maturity === "Mature"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700"
                        : "rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700"
                    }
                  >
                    {scheme.maturity}
                  </span>

                </div>

                {/* DETAILS */}
                <div className="mt-6 grid grid-cols-2 gap-5">

                  <Detail
                    label="Code"
                    value={scheme.code}
                  />

                  <Detail
                    label="Launch Year"
                    value={String(scheme.launchYear)}
                  />

                  <Detail
                    label="Region"
                    value={scheme.region}
                  />

                  <Detail
                    label="Maturity"
                    value={scheme.maturity}
                  />

                </div>

                {/* DESCRIPTION */}
                <div className="mt-6 border-t border-slate-200 pt-5">

                  <p className="text-sm leading-6 text-slate-500">
                    {scheme.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          Real-Time Payments Map • Proof of Concept
        </footer>

      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: number;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-4xl font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>

    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-700">
        {value}
      </p>

    </div>
  );
}
