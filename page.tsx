           "use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PaymentMap = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center rounded-xl bg-slate-900 text-slate-400">
      Loading map...
    </div>
  ),
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

export default function Home() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [maturityFilter, setMaturityFilter] = useState("All");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/payment-schemes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch payment data");
        }

        return response.json();
      })
      .then((data) => {
        setSchemes(data.schemes);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to connect to the payment data API.");
        setLoading(false);
      });
  }, []);

  // Filter schemes according to selected maturity
  const filteredSchemes =
    maturityFilter === "All"
      ? schemes
      : schemes.filter((item) => item.maturity === maturityFilter);

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-8">

        {/* HEADER */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Real Rails Intelligence Library
              </p>

              <h1 className="text-4xl font-bold tracking-tight">
                Real-Time Payments Map
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Global instant payment schemes by country and maturity.
              </p>
            </div>

            <div className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-wider text-slate-300">
              Payments
            </div>
          </div>
        </header>

        {/* MAIN SECTION */}
        <section className="grid gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(300px,3fr)]">

          {/* MAP */}
          <div className="min-h-[600px] rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Global Instant Payment Coverage
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Interactive geographic intelligence
                </p>
              </div>

              <select
                value={maturityFilter}
                onChange={(event) =>
                  setMaturityFilter(event.target.value)
                }
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300"
              >
                <option value="All">All maturity levels</option>
                <option value="Mature">Mature</option>
                <option value="Emerging">Emerging</option>
              </select>
            </div>

            {/* IMPORTANT: filtered data is sent to the map */}
            <PaymentMap schemes={filteredSchemes} />

          </div>

          {/* RIGHT SIDE */}
          <aside className="space-y-5">

            {/* KEY SIGNAL */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Key Signal
              </p>

              <p className="mt-3 text-4xl font-bold">
                {loading ? "..." : filteredSchemes.length}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Payment schemes in current view
              </p>
            </div>

            {/* WHY THIS MATTERS */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Why This Matters
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Real-time payment infrastructure is changing how money moves
                between people, businesses and financial institutions.
              </p>
            </div>

            {/* WHO CONTROLS THE RAIL */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Who Controls the Rail
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Payment rails are typically operated or governed by central
                banks, payment authorities or regulated infrastructure
                providers.
              </p>
            </div>

            {/* SCHEMES */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Schemes
              </h2>

              <div className="mt-4 space-y-3">

                {loading && (
                  <p className="text-sm text-slate-500">
                    Loading payment data...
                  </p>
                )}

                {error && (
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                )}

                {!loading &&
                  !error &&
                  filteredSchemes.length === 0 && (
                    <p className="text-sm text-slate-500">
                      No schemes found.
                    </p>
                  )}

                {filteredSchemes.map((item) => (
                  <div
                    key={item.code}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {item.country}
                      </span>

                      <span className="text-xs text-slate-500">
                        {item.launch_year}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {item.scheme}
                      </span>

                      <span className="text-xs text-cyan-400">
                        {item.maturity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </section>

        {/* LAUNCH TIMELINE */}
        <section className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">

          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Launch Timeline
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-5">

            {filteredSchemes
              .slice()
              .sort((a, b) => a.launch_year - b.launch_year)
              .map((item) => (
                <div
                  key={item.code}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
                >
                  <p className="text-2xl font-bold">
                    {item.launch_year}
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {item.scheme}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.country}
                  </p>
                </div>
              ))}

          </div>
        </section>

      </div>
    </main>
  );
}