"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type PaymentSystem = {
  country: string;
  system: string;
  code: string;
  launchYear: number;
  region: string;
  maturity: "Mature" | "Emerging";
  description: string;
  lat: number;
  lng: number;
};

const paymentSystems: PaymentSystem[] = [
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
    description: "India's widely adopted instant payment system.",
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
    description: "Singapore's fast and secure domestic payment system.",
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

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return;
    }

    const map = L.map(mapRef.current, {
      center: [20, 10],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      worldCopyJump: true,
      zoomControl: true,
      attributionControl: true,
    });

    mapInstanceRef.current = map;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        noWrap: false,
      }
    ).addTo(map);

    paymentSystems.forEach((item) => {
      const markerColor =
        item.maturity === "Mature" ? "#22c55e" : "#f59e0b";

      const marker = L.circleMarker([item.lat, item.lng], {
        radius: 14,
        color: markerColor,
        weight: 3,
        fillColor: markerColor,
        fillOpacity: 0.75,
      });

      marker.bindPopup(`
        <div style="min-width:220px;">
          <h3 style="
            margin:0 0 6px;
            font-size:18px;
            font-weight:700;
            color:#0f172a;
          ">
            ${item.country}
          </h3>

          <div style="
            color:#2563eb;
            font-size:16px;
            font-weight:700;
            margin-bottom:12px;
          ">
            ${item.system}
          </div>

          <div style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:8px;
            font-size:13px;
          ">
            <div>
              <strong>Code</strong><br/>
              ${item.code}
            </div>

            <div>
              <strong>Launch</strong><br/>
              ${item.launchYear}
            </div>

            <div>
              <strong>Region</strong><br/>
              ${item.region}
            </div>

            <div>
              <strong>Status</strong><br/>
              ${item.maturity}
            </div>
          </div>

          <p style="
            margin:14px 0 0;
            padding-top:12px;
            border-top:1px solid #e2e8f0;
            color:#52708f;
            line-height:1.5;
          ">
            ${item.description}
          </p>
        </div>
      `);

      marker.addTo(map);
    });

    // Very important when the map is inside a responsive container.
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    const handleResize = () => {
      map.invalidateSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="map-wrapper">
      <div
        ref={mapRef}
        className="leaflet-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
