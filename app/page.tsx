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
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 lg:px-14">

        {/* HEADER */}

        <header className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Payment Infrastructure POC
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Real-Time Payments Map
          </h1>

          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-500 md:text-xl">
            Explore real-time payment systems and instant payment
            infrastructure across different countries.
          </p>
        </header>

        {/* STAT CARDS */}

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

        {/* MAP SECTION */}

        <section className="mb-14">

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Global Payment Infrastructure
          </h2>

          <p className="mt-2 mb-5 text-lg text-slate-500">
            Click a marker to view payment-system details.
          </p>

          {/* LEGEND */}

          <div className="mb-5 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
              <span>Mature</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-amber-500" />
              <span>Emerging</span>
            </div>

          </div>

          {/* IMPORTANT: USE
