"use client";

import PaymentMap from "./map";

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
      "Real-time payment infrastructure operated by the Federal Reserve for instant account-to-account payments.",
    lat: 39.8283,
    lng: -98.5795,
  },
  {
    country: "United Kingdom",
    system: "Faster Payments",
    code: "UK",
    launchYear: 2008,
    region: "Europe",
    maturity: "Mature",
    description:
      "A mature real-time payment system enabling fast account-to-account transfers across the United Kingdom.",
    lat: 55.3781,
    lng: -3.436,
  },
  {
    country: "India",
    system: "UPI",
    code: "IN",
    launchYear: 2016,
    region: "Asia",
    maturity: "Mature",
    description:
      "India's unified real-time payment infrastructure supporting instant bank-to-bank payments.",
    lat: 20.5937,
    lng: 78.9629,
  },
  {
    country: "Singapore",
    system: "FAST / PayNow",
    code: "SG",
    launchYear: 2014,
    region: "Asia",
    maturity: "Mature",
    description:
      "Singapore's real-time payment infrastructure supporting instant transfers and mobile-number based payments.",
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
      "Brazil's instant payment system enabling 24/7 real-time transfers between individuals and businesses.",
    lat: -14.235,
    lng: -51.9253,
  },
];

export default function Page() {
  const matureCount = schemes.filter(
    (scheme) => scheme.maturity === "Mature"
  ).length;

  const emergingCount = schemes.filter(
    (scheme) => scheme.maturity === "Emerging"
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "0 0 60px",
      }}
    >
      {/* Header */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "42px 56px 20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#0f2747",
            fontSize: "38px",
            lineHeight: 1.2,
            fontWeight: 800,
            letterSpacing: "-0.8px",
          }}
        >
          Global Payment Infrastructure
        </h1>

        <p
          style={{
            margin: "10px 0 0",
            color: "#52708f",
            fontSize: "18px",
            lineHeight: 1.5,
          }}
        >
          Click a marker to view payment-system details.
        </p>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginTop: "24px",
            fontSize: "17px",
            color: "#334e68",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <span
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            Mature
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <span
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#f59e0b",
                display: "inline-block",
              }}
            />
            Emerging
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "0 56px",
        }}
      >
        <PaymentMap schemes={schemes} />
      </section>

      {/* Summary cards */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "28px auto 0",
          padding: "0 56px",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "22px",
        }}
      >
        <SummaryCard
          value={schemes.length}
          label="Payment markets tracked"
        />

        <SummaryCard
          value={schemes.length}
          label="Real-time schemes"
        />

        <SummaryCard
          value={matureCount}
          label="Established infrastructure"
        />

        <SummaryCard
          value={emergingCount}
          label="Developing infrastructure"
        />
      </section>
    </main>
  );
}

function SummaryCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "20px",
        padding: "26px 28px",
        minHeight: "110px",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.05)",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          lineHeight: 1,
          fontWeight: 800,
          color: "#0f2747",
          marginBottom: "14px",
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: "15px",
          color: "#8aa0b9",
        }}
      >
        {label}
      </div>
    </div>
  );
}
