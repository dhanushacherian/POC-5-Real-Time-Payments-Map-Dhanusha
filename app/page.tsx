"use client";

import dynamic from "next/dynamic";

const PaymentMap = dynamic(() => import("../Map"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e2e8f0",
        borderRadius: "20px",
        color: "#475569",
        fontSize: "18px",
      }}
    >
      Loading payment map...
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
  const matureSystems = schemes.filter(
    (item) => item.maturity === "Mature"
  ).length;

  const emergingSystems = schemes.filter(
    (item) => item.maturity === "Emerging"
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        padding: "40px 5%",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Header */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            color: "#2563eb",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Payment Infrastructure POC
        </div>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: "1.1",
            fontWeight: "800",
            margin: "0 0 16px 0",
            color: "#0f172a",
          }}
        >
          Real-Time Payments Map
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            margin: "0 0 35px 0",
          }}
        >
          Explore real-time payment systems and instant payment
          infrastructure across different countries.
        </p>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "18px",
            marginBottom: "45px",
          }}
        >
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
        </div>

        {/* Map section */}
        <section>
          <div style={{ marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "750",
                margin: "0 0 8px 0",
              }}
            >
              Global Payment Infrastructure
            </h2>

            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "16px",
              }}
            >
              Click a marker to view payment-system details.
            </p>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "15px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
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
                gap: "8px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#f59e0b",
                  display: "inline-block",
                }}
              />
              Emerging
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "10px",
              borderRadius: "20px",
              boxShadow:
                "0 10px 30px rgba(15, 23, 42, 0.10)",
              marginBottom: "50px",
            }}
          >
            <PaymentMap schemes={schemes} />
          </div>
        </section>

        {/* Payment Systems */}
        <section>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "750",
              margin: "0 0 8px 0",
            }}
          >
            Payment Systems
          </h2>

          <p
            style={{
              color: "#64748b",
              margin: "0 0 25px 0",
              fontSize: "16px",
            }}
          >
            Overview of the real-time payment systems represented
            on the map.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {schemes.map((item) => (
              <PaymentCard
                key={item.code}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: "55px",
            paddingTop: "25px",
            borderTop: "1px solid #e2e8f0",
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Real-Time Payments Map • Proof of Concept
        </footer>
      </section>
    </main>
  );
}


/* -----------------------------
   STAT CARD
------------------------------ */

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
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "24px",
        boxShadow:
          "0 5px 18px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "34px",
          fontWeight: "800",
          color: "#0f172a",
          marginBottom: "5px",
        }}
      >
        {value}
      </div>

      <div
        style={{
          color: "#94a3b8",
          fontSize: "13px",
        }}
      >
        {description}
      </div>
    </div>
  );
}


/* -----------------------------
   PAYMENT CARD
------------------------------ */

function PaymentCard({
  item,
}: {
  item: Scheme;
}) {
  const isMature = item.maturity === "Mature";

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "18px",
        padding: "24px",
        boxShadow:
          "0 5px 18px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "750",
              color: "#0f172a",
            }}
          >
            {item.country}
          </h3>

          <div
            style={{
              color: "#2563eb",
              fontSize: "16px",
              fontWeight: "700",
              marginTop: "5px",
            }}
          >
            {item.scheme}
          </div>
        </div>

        <span
          style={{
            padding: "5px 10px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "700",
            background: isMature
              ? "#dcfce7"
              : "#fef3c7",
            color: isMature
              ? "#166534"
              : "#92400e",
          }}
        >
          {item.maturity}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <Info
          label="Code"
          value={item.code}
        />

        <Info
          label="Launch year"
          value={String(item.launch_year)}
        />

        <Info
          label="Region"
          value={item.region}
        />

        <Info
          label="Maturity"
          value={item.maturity}
        />
      </div>

      <p
        style={{
          margin: 0,
          paddingTop: "15px",
          borderTop: "1px solid #e2e8f0",
          color: "#64748b",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}


/* -----------------------------
   INFO ITEM
------------------------------ */

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: "11px",
          color: "#94a3b8",
          textTransform: "uppercase",
          fontWeight: "700",
          marginBottom: "3px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#334155",
          fontWeight: "600",
        }}
      >
        {value}
      </div>
    </div>
  );
}
