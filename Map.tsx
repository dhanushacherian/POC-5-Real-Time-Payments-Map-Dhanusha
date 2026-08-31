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
  maturity: "Mature" | "Emerging";
  description: string;
  lat?: number;
  lng?: number;
};

type MapProps = {
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

export default function Map({ schemes }: MapProps) {
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
      zoomControl: true,
      worldCopyJump: true,
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

    schemes.forEach((scheme) => {
      const fallback = coordinates[scheme.code];

      const lat = scheme.lat ?? fallback?.lat;
      const lng = scheme.lng ?? fallback?.lng;

      if (lat === undefined || lng === undefined) {
        return;
      }

      const isMature = scheme.maturity === "Mature";

      const markerColor = isMature
        ? "#22c55e"
        : "#f59e0b";

      const marker = L.circleMarker([lat, lng], {
        radius: 14,
        color: markerColor,
        weight: 3,
        fillColor: markerColor,
        fillOpacity: 0.8,
      });

      marker.bindPopup(`
        <div style="
          min-width: 240px;
          font-family: Arial, Helvetica, sans-serif;
        ">
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            margin-bottom: 6px;
          ">
            <h3 style="
              margin: 0;
              font-size: 19px;
              font-weight: 700;
              color: #0f172a;
            ">
              ${scheme.country}
            </h3>

            <span style="
              padding: 5px 10px;
              border-radius: 999px;
              font-size: 12px;
              font-weight: 700;
              color: ${isMature ? "#047857" : "#b45309"};
              background: ${isMature ? "#dcfce7" : "#fef3c7"};
            ">
              ${scheme.maturity}
            </span>
          </div>

          <div style="
            color: #2563eb;
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 15px;
          ">
            ${scheme.system}
          </div>

          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            font-size: 13px;
            color: #334155;
          ">
            <div>
              <div style="
                color: #8aa0b9;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 3px;
              ">
                Code
              </div>
              <strong>${scheme.code}</strong>
            </div>

            <div>
              <div style="
                color: #8aa0b9;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 3px;
              ">
                Launch Year
              </div>
              <strong>${scheme.launchYear}</strong>
            </div>

            <div>
              <div style="
                color: #8aa0b9;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 3px;
              ">
                Region
              </div>
              <strong>${scheme.region}</strong>
            </div>

            <div>
              <div style="
                color: #8aa0b9;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 3px;
              ">
                Maturity
              </div>
              <strong>${scheme.maturity}</strong>
            </div>
          </div>

          <div style="
            margin-top: 16px;
            padding-top: 13px;
            border-top: 1px solid #e2e8f0;
            color: #52708f;
            font-size: 14px;
            line-height: 1.55;
          ">
            ${scheme.description}
          </div>
        </div>
      `);

      marker.addTo(map);
    });

    /*
     * Leaflet sometimes calculates the map size incorrectly
     * when the map is rendered inside a responsive container.
     */
    const refreshMap = () => {
      map.invalidateSize();
    };

    setTimeout(refreshMap, 100);
    setTimeout(refreshMap, 500);
    setTimeout(refreshMap, 1000);

    window.addEventListener("resize", refreshMap);

    return () => {
      window.removeEventListener("resize", refreshMap);

      map.remove();

      mapInstanceRef.current = null;
    };
  }, [schemes]);

  return (
    <div
      className="map-wrapper"
      style={{
        width: "100%",
        height: "560px",
        padding: "12px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "24px",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        overflow: "hidden",
      }}
    >
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "500px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
