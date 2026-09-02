"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

type PaymentMapProps = {
  schemes: Scheme[];
};

const coordinates: Record<
  string,
  {
    lat: number;
    lng: number;
  }
> = {
  US: {
    lat: 39.8283,
    lng: -98.5795,
  },
  IN: {
    lat: 20.5937,
    lng: 78.9629,
  },
  UK: {
    lat: 55.3781,
    lng: -3.436,
  },
  SG: {
    lat: 1.3521,
    lng: 103.8198,
  },
  BR: {
    lat: -14.235,
    lng: -51.9253,
  },
};

export default function PaymentMap({
  schemes,
}: PaymentMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return;
    }

    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: false,
    });

    mapInstanceRef.current = map;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(map);

    schemes.forEach((scheme) => {
      const fallback = coordinates[scheme.code];

      const lat = scheme.lat ?? fallback?.lat;
      const lng = scheme.lng ?? fallback?.lng;

      if (lat === undefined || lng === undefined) {
        return;
      }

      const isMature =
        scheme.maturity === "Mature";

      const markerColor = isMature
        ? "#22c55e"
        : "#f59e0b";

      const marker = L.circleMarker(
        [lat, lng],
        {
          radius: 13,
          color: markerColor,
          weight: 3,
          fillColor: markerColor,
          fillOpacity: 0.78,
        }
      );

      marker.bindPopup(`
        <div style="
          min-width:220px;
          font-family:Arial,Helvetica,sans-serif;
        ">

          <h3 style="
            margin:0 0 6px;
            font-size:18px;
            font-weight:700;
            color:#0f172a;
          ">
            ${scheme.country}
          </h3>

          <div style="
            margin-bottom:12px;
            color:#2563eb;
            font-size:16px;
            font-weight:700;
          ">
            ${scheme.system}
          </div>

          <div style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:10px;
            font-size:13px;
            color:#334155;
          ">

            <div>
              <span style="color:#94a3b8;">
                Code
              </span>
              <br />
              <strong>${scheme.code}</strong>
            </div>

            <div>
              <span style="color:#94a3b8;">
                Launch Year
              </span>
              <br />
              <strong>${scheme.launchYear}</strong>
            </div>

            <div>
              <span style="color:#94a3b8;">
                Region
              </span>
              <br />
              <strong>${scheme.region}</strong>
            </div>

            <div>
              <span style="color:#94a3b8;">
                Maturity
              </span>
              <br />
              <strong>${scheme.maturity}</strong>
            </div>

          </div>

          <p style="
            margin:14px 0 0;
            padding-top:12px;
            border-top:1px solid #e2e8f0;
            color:#64748b;
            font-size:13px;
            line-height:1.5;
          ">
            ${scheme.description}
          </p>

        </div>
      `);

      marker.addTo(map);
    });

    const updateMapSize = () => {
      map.invalidateSize();
    };

    setTimeout(updateMapSize, 100);
    setTimeout(updateMapSize, 500);
    setTimeout(updateMapSize, 1000);

    window.addEventListener(
      "resize",
      updateMapSize
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateMapSize
      );

      map.remove();
      mapInstanceRef.current = null;
    };
  }, [schemes]);

  return (
    <div
      style={{
        width: "100%",
        height: "560px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "24px",
        padding: "10px",
        boxShadow:
          "0 10px 30px rgba(15,23,42,0.08)",
        overflow: "hidden",
      }}
    >
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
