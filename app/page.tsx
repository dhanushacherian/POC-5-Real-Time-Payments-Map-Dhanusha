"use client";

import PaymentMap from "./Map";

type Scheme = {
  country: string;
  system: string;
  code: string;
  launchYear: number;
  region: string;
  maturity: string;
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

export default function Home() {
  const totalCountries = schemes.length;

  const totalSystems = schemes.length;

  const matureSystems = schemes.filter(
    (scheme) => scheme.maturity === "Mature"
  ).length;

  const emergingSystems = schemes.filter(
    (scheme) => scheme.maturity === "Emerging"
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "32px 40px 60px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <section
          style={{
            marginBottom: "42px",
          }}
        >
          <div
            style={{
              color: "#2563eb",
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "14px",
            }}
          >
            PAYMENT INFRASTRUCTURE POC
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "56px",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#0f172a",
            }}
          >
            Real-Time Payments Map
          </h1>

          <p
            style={{
              margin: "14px 0 0",
              fontSize: "23px",
              lineHeight: 1.45,
              color: "#52708f",
              maxWidth: "1000px",
            }}
          >
            Explore real-time payment systems and instant payment
            infrastructure across different countries.
          </p>
        </section>

        {/* STAT CARDS */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "22px",
            marginBottom: "58px",
          }}
        >
          {/* Countries */}

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "140px",
              boxSizing: "border-box",
              boxShadow:
                "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#52708f",
                marginBottom: "20px",
              }}
            >
              Countries
            </div>

            <div
              style={{
                fontSize: "44px",
                lineHeight: 1,
                fontWeight: 800,
                color: "#020617",
                marginBottom: "12px",
              }}
            >
              {totalCountries}
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#8aa0b9",
              }}
            >
              Payment markets tracked
            </div>
          </div>

          {/* Payment Systems */}

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "140px",
              boxSizing: "border-box",
              boxShadow:
                "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#52708f",
                marginBottom: "20px",
              }}
            >
              Payment Systems
            </div>

            <div
              style={{
                fontSize: "44px",
                lineHeight: 1,
                fontWeight: 800,
                color: "#020617",
                marginBottom: "12px",
              }}
            >
              {totalSystems}
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#8aa0b9",
              }}
            >
              Real-time schemes
            </div>
          </div>

          {/* Mature Systems */}

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "140px",
              boxSizing: "border-box",
              boxShadow:
                "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#52708f",
                marginBottom: "20px",
              }}
            >
              Mature Systems
            </div>

            <div
              style={{
                fontSize: "44px",
                lineHeight: 1,
                fontWeight: 800,
                color: "#020617",
                marginBottom: "12px",
              }}
            >
              {matureSystems}
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#8aa0b9",
              }}
            >
              Established infrastructure
            </div>
          </div>

          {/* Emerging Systems */}

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "140px",
              boxSizing: "border-box",
              boxShadow:
                "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#52708f",
                marginBottom: "20px",
              }}
            >
              Emerging Systems
            </div>

            <div
              style={{
                fontSize: "44px",
                lineHeight: 1,
                fontWeight: 800,
                color: "#020617",
                marginBottom: "12px",
              }}
            >
              {emergingSystems}
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#8aa0b9",
              }}
            >
              Developing infrastructure
            </div>
          </div>
        </section>

        {/* MAP SECTION */}

        <section
          style={{
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              lineHeight: 1.2,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.025em",
            }}
          >
            Global Payment Infrastructure
          </h2>

          <p
            style={{
              margin: "10px 0 24px",
              fontSize: "20px",
              color: "#52708f",
            }}
          >
            Click a marker to view payment-system details.
          </p>

          {/* LEGEND */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              marginBottom: "20px",
              fontSize: "17px",
              color: "#334155",
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

              <span>Mature</span>
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

              <span>Emerging</span>
            </div>
          </div>

          {/* MAP */}

          <PaymentMap schemes={schemes} />
        </section>

        {/* PAYMENT SYSTEMS */}

        <section>
          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              lineHeight: 1.2,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.025em",
            }}
          >
            Payment Systems
          </h2>

          <p
            style={{
              margin: "10px 0 28px",
              fontSize: "20px",
              color: "#52708f",
            }}
          >
            Overview of the real-time payment systems represented
            on the map.
          </p>

          {/* PAYMENT CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "26px",
            }}
          >
            {schemes.map((scheme) => {
              const isMature =
                scheme.maturity === "Mature";

              return (
                <div
                  key={scheme.code}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dbe4ee",
                    borderRadius: "22px",
                    padding: "30px",
                    boxSizing: "border-box",
                    boxShadow:
                      "0 10px 30px rgba(15, 23, 42, 0.06)",
                    minHeight: "330px",
                  }}
                >
                  {/* CARD HEADER */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "flex-start",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "26px",
                          lineHeight: 1.2,
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        {scheme.country}
                      </h3>

                      <div
                        style={{
                          marginTop: "5px",
                          color: "#2563eb",
                          fontSize: "21px",
                          fontWeight: 700,
                        }}
                      >
                        {scheme.system}
                      </div>
                    </div>

                    <span
                      style={{
                        flexShrink: 0,
                        padding:
                          "7px 13px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: isMature
                          ? "#047857"
                          : "#b45309",
                        background: isMature
                          ? "#dcfce7"
                          : "#fef3c7",
                      }}
                    >
                      {scheme.maturity}
                    </span>
                  </div>

                  {/* DETAILS */}

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "1fr 1fr",
                      gap: "22px",
                      marginTop: "25px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "#8aa0b9",
                          fontSize: "12px",
                          fontWeight: 800,
                          textTransform:
                            "uppercase",
                          marginBottom: "5px",
                        }}
                      >
                        Code
                      </div>

                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {scheme.code}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          color: "#8aa0b9",
                          fontSize: "12px",
                          fontWeight: 800,
                          textTransform:
                            "uppercase",
                          marginBottom: "5px",
                        }}
                      >
                        Launch Year
                      </div>

                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {scheme.launchYear}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          color: "#8aa0b9",
                          fontSize: "12px",
                          fontWeight: 800,
                          textTransform:
                            "uppercase",
                          marginBottom: "5px",
                        }}
                      >
                        Region
                      </div>

                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {scheme.region}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          color: "#8aa0b9",
                          fontSize: "12px",
                          fontWeight: 800,
                          textTransform:
                            "uppercase",
                          marginBottom: "5px",
                        }}
                      >
                        Maturity
                      </div>

                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {scheme.maturity}
                      </div>
                    </div>
                  </div>

                  {/* DIVIDER */}

                  <div
                    style={{
                      height: "1px",
                      background: "#e2e8f0",
                      margin:
                        "24px 0 20px",
                    }}
                  />

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.65,
                      color: "#52708f",
                    }}
                  >
                    {scheme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* RESPONSIVE CSS */}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #f8fafc;
        }

        body {
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        @media (max-width: 1100px) {
          main > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          h1 {
            font-size: 46px !important;
          }
        }

        @media (max-width: 850px) {
          main > div {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          section:first-child h1 {
            font-size: 40px !important;
          }

          section {
            width: 100%;
          }

          section > div {
            max-width: 100%;
          }
        }

        @media (max-width: 700px) {
          main > div {
            padding-top: 24px !important;
          }

          section:first-child h1 {
            font-size: 34px !important;
          }

          section:first-child p {
            font-size: 18px !important;
          }

          section:nth-child(2) {
            grid-template-columns:
              1fr 1fr !important;
          }

          section:nth-child(3) h2,
          section:nth-child(4) h2 {
            font-size: 30px !important;
          }

          section:nth-child(4) > div {
            grid-template-columns:
              1fr !important;
          }
        }

        @media (max-width: 480px) {
          section:nth-child(2) {
            grid-template-columns:
              1fr !important;
          }
        }

        .leaflet-container {
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .leaflet-popup-content-wrapper {
          border-radius: 12px;
        }

        .leaflet-popup-content {
          margin: 14px;
        }
      `}</style>
    </main>
  );
}
