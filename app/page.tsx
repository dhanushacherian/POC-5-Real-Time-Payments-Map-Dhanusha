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
      "UK real-time payment infrastructure enabling fast bank transfers.",
  },
  {
    country: "Singapore",
    code: "SG",
    scheme: "FAST",
    launch_year: 2014,
    maturity: "Mature",
    region: "Asia",
    description:
      "Singapore's Fast And Secure Transfers payment system.",
  },
  {
    country: "Brazil",
    code: "BR",
    scheme: "Pix",
    launch_year: 2020,
    maturity: "Mature",
    region: "South America",
    description:
      "Brazil's instant payment system operated by the Central Bank.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">
          Real-Time Payments Map
        </h1>

        <p className="mb-6 text-gray-600">
          Explore real-time payment systems around the world.
        </p>

        <PaymentMap schemes={schemes} />
      </div>
    </main>
  );
}
