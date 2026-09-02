"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const PaymentMap = dynamic(() => import("../Map"), {
  ssr: false,
});

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
  const [maturityFilter, setMaturityFilter] = useState<
    "All" | "Mature" | "Emerging"
  >("All");

  const filteredSchemes = schemes.filter((scheme) => {
    if (maturityFilter === "All") {
      return true;
    }

    return scheme.maturity === maturityFilter;
  });

  const matureSystems = schemes.filter(
    (scheme) => scheme.maturity === "Mature"
  ).length;

  const emergingSystems = schemes.filter(
    (scheme) => scheme.maturity === "Emerging"
  ).length;

  const downloadSampleData = () => {
    const headers = [
      "Country",
      "Payment System",
      "Code",
      "Launch Year",
      "Region",
      "Maturity",
      "Description",
    ];

    const rows = schemes.map((scheme) => [
      scheme.country,
      scheme.system,
      scheme.code,
      scheme.launchYear,
      scheme.region,
      scheme.maturity,
      scheme.description,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "real-time-payments-sample-data.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="mx-auto max-w-[1600px] px-5 py-8 lg:px-8">

        {/* HEADER */}
        <header className="mb-8 border-b border-slate-800 pb-7">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
            Real Rails • Payment Infrastructure Intelligence
          </p>

          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Real-Time Payments Map
              </h1>

              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
                Intelligence view of real-time payment infrastructure,
                launch maturity, and institutional control across key markets.
              </p>
            </div>

            <div className="w-full shrink-0 rounded-xl border border-slate-800 bg-[#0B1117] px-5 py-4 lg:w-40">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Systems Tracked
              </p>

              <p className="mt-1 text-3xl font-extrabold text-sky-400">
                {schemes.length}
              </p>
            </div>
          </div>
        </header>

        {/* 70 / 30 LAYOUT */}
        <div className="grid min-w-0 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]">

          {/* MAIN STAGE - 70% */}
          <section className="min-w-0 lg:pr-7">

            {/* KPI CARDS */}
            <section className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">

              <KpiCard
                title="Countries"
                value={schemes.length}
                description="Markets tracked"
              />

              <KpiCard
                title="Payment Systems"
                value={schemes.length}
                description="Instant rails"
              />

              <KpiCard
                title="Mature"
                value={matureSystems}
                description="Established rails"
              />

              <KpiCard
                title="Emerging"
                value={emergingSystems}
                description="Developing rails"
              />

            </section>

            {/* MAP */}
            <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5 shadow-2xl">
              <div className="mb-5 flex min-w-0 flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                    Main Stage
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">
                    Global Payment Infrastructure
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    Select a rail marker to inspect infrastructure details.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-5 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    Mature
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    Emerging
                  </div>
                </div>
              </div>

              <div className="min-w-0 overflow-hidden rounded-2xl">
                <PaymentMap schemes={filteredSchemes} />
              </div>
            </section>

            {/* PAYMENT SYSTEMS */}
            <section className="mt-8 min-w-0">
              <div className="mb-5 flex min-w-0 flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                    Rail Inventory
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-white md:text-3xl">
                    Payment Systems
                  </h2>
                </div>

                <p className="shrink-0 text-sm font-semibold text-slate-500">
                  Showing {filteredSchemes.length} of {schemes.length}
                </p>
              </div>

              {filteredSchemes.length === 0 ? (
                <div className="rounded-2xl border border-slate-800 bg-[#0B1117] p-10 text-center">
                  <p className="text-slate-400">
                    No payment systems match this filter.
                  </p>
                </div>
              ) : (
                <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-2">

                  {filteredSchemes.map((scheme) => (
                    <div
                      key={scheme.code}
                      className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5"
                    >
                      <div className="flex min-w-0 items-start justify-between gap-4">

                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {scheme.country}
                          </p>

                          <h3 className="mt-1 break-words text-xl font-extrabold text-white">
                            {scheme.system}
                          </h3>
                        </div>

                        <span
                          className={
                            scheme.maturity === "Mature"
                              ? "shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400"
                              : "shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400"
                          }
                        >
                          {scheme.maturity}
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-4">
                        <DarkDetail
                          label="Code"
                          value={scheme.code}
                        />

                        <DarkDetail
                          label="Launch Year"
                          value={String(scheme.launchYear)}
                        />

                        <DarkDetail
                          label="Region"
                          value={scheme.region}
                        />

                        <DarkDetail
                          label="Maturity"
                          value={scheme.maturity}
                        />
                      </div>

                      <div className="mt-5 border-t border-slate-800 pt-4">
                        <p className="text-sm leading-6 text-slate-400">
                          {scheme.description}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </section>
          </section>

          {/* INTELLIGENCE SIDEBAR - 30% */}
          <aside className="mt-8 min-w-0 border-slate-800 lg:mt-0 lg:border-l lg:pl-7">

            <div className="min-w-0 space-y-5">

              {/* SIDEBAR HEADER */}
              <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                  Intelligence Sidebar
                </p>

                <h2 className="mt-2 break-words text-2xl font-extrabold text-white">
                  Payment Rail Signals
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A compact intelligence layer translating the map into
                  infrastructure and governance signals.
                </p>
              </section>

              {/* WHY THIS MATTERS */}
              <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                  Why This Matters
                </p>

                <h3 className="mt-2 break-words text-lg font-extrabold text-white">
                  Instant rails are strategic infrastructure
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Real-time payment rails determine how quickly money moves
                  between consumers, businesses, banks, and public institutions.
                  Their launch timing and maturity indicate how developed a
                  market's instant-payment infrastructure has become.
                </p>
              </section>

              {/* WHO CONTROLS THE RAIL */}
              <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
                  Who Controls the Rail
                </p>

                <h3 className="mt-2 break-words text-lg font-extrabold text-white">
                  Central institutions shape access
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Payment rails are governed by central banks, national
                  payment operators, and regulated financial institutions.
                  Governance determines participation, standards, settlement
                  rules, and the operating model of the infrastructure.
                </p>
              </section>

              {/* FILTERS */}
              <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                    Filters
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold text-white">
                    Maturity Lens
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">

                  <SidebarFilter
                    label="All"
                    active={maturityFilter === "All"}
                    onClick={() => setMaturityFilter("All")}
                  />

                  <SidebarFilter
                    label="Mature"
                    active={maturityFilter === "Mature"}
                    onClick={() => setMaturityFilter("Mature")}
                  />

                  <SidebarFilter
                    label="Emerging"
                    active={maturityFilter === "Emerging"}
                    onClick={() => setMaturityFilter("Emerging")}
                  />

                </div>

                <div className="mt-4 rounded-xl border border-slate-800 bg-[#030712] p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Current view
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    {maturityFilter}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {filteredSchemes.length} rail
                    {filteredSchemes.length === 1 ? "" : "s"} visible
                  </p>
                </div>
              </section>

              {/* DOWNLOAD */}
              <section className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                  Data Access
                </p>

                <h3 className="mt-2 break-words text-lg font-extrabold text-white">
                  Sample Dataset
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Download the structured payment-rail dataset used in this
                  proof of concept.
                </p>

                <button
                  type="button"
                  onClick={downloadSampleData}
                  className="mt-4 w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                >
                  Download Sample Data
                </button>
              </section>

            </div>
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-800 pt-5 text-center text-xs text-slate-600">
          Real Rails • Real-Time Payments Map • Phase 1 Proof of Concept
        </footer>
      </div>
    </main>
  );
}

function KpiCard({
  title,
  value,
  description,
}: {
  title: string;
  value: number;
  description: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-800 bg-[#0B1117] p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-extrabold text-white">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function DarkDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <p className="mt-1 break-words text-sm font-bold text-slate-200">
        {value}
      </p>
    </div>
  );
}

function SidebarFilter({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-lg bg-sky-500 px-3 py-2.5 text-xs font-bold text-slate-950"
          : "rounded-lg border border-slate-700 bg-[#030712] px-3 py-2.5 text-xs font-bold text-slate-400 hover:border-sky-500/50 hover:text-white"
      }
    >
      {label}
    </button>
  );
}
