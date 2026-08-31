"use client";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

type Scheme = {
  country: string;
  code: string;
  scheme: string;
  launch_year: number;
  maturity: string;
  region: string;
  description: string;
};

type PaymentMapProps = {
  schemes: Scheme[];
};

const paymentLocations: Record<
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
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={6}
        scrollWheelZoom={true}
        worldCopyJump={false}
        style={{
          height: "520px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {schemes.map((item) => {
          const location = paymentLocations[item.code];

          if (!location) {
            return null;
          }

          const isEmerging =
            item.maturity.toLowerCase() === "emerging";

          return (
            <CircleMarker
              key={item.code}
              center={[location.lat, location.lng]}
              radius={11}
              pathOptions={{
                color: isEmerging ? "#f59e0b" : "#22c55e",
                fillColor: isEmerging ? "#f59e0b" : "#22c55e",
                fillOpacity: 0.75,
                weight: 3,
              }}
            >
              <Popup>
                <div
                  style={{
                    minWidth: "220px",
                    padding: "4px",
                    fontFamily:
                      "Arial, Helvetica, sans-serif",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0f172a",
                      marginBottom: "8px",
                    }}
                  >
                    {item.country}
                  </div>

                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#2563eb",
                      marginBottom: "12px",
                    }}
                  >
                    {item.scheme}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        Code
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#0f172a",
                        }}
                      >
                        {item.code}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        Launch Year
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#0f172a",
                        }}
                      >
                        {item.launch_year}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        Region
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#0f172a",
                        }}
                      >
                        {item.region}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        Maturity
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: isEmerging
                            ? "#d97706"
                            : "#16a34a",
                        }}
                      >
                        {item.maturity}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid #e2e8f0",
                      paddingTop: "10px",
                      fontSize: "13px",
                      lineHeight: "1.5",
                      color: "#64748b",
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
