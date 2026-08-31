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

/*
 * React-Leaflet v5 can sometimes produce incorrect TypeScript
 * prop errors depending on the installed React/TypeScript types.
 * These aliases keep the runtime components unchanged while
 * allowing the project to build correctly.
 */
const SafeMapContainer = MapContainer as any;
const SafeTileLayer = TileLayer as any;
const SafeCircleMarker = CircleMarker as any;

export default function PaymentMap({
  schemes,
}: PaymentMapProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <SafeMapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{
          height: "600px",
          width: "100%",
        }}
      >
        <SafeTileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {schemes.map((item) => {
          const location = paymentLocations[item.code];

          if (!location) {
            return null;
          }

          return (
            <SafeCircleMarker
              key={item.code}
              center={[location.lat, location.lng]}
              radius={12}
              pathOptions={{
                color: "#3b82f6",
                fillColor: "#60a5fa",
                fillOpacity: 0.35,
                weight: 3,
              }}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <h3 className="text-base font-bold">
                    {item.country}
                  </h3>

                  <p className="mt-1 font-medium">
                    {item.scheme}
                  </p>

                  <p className="mt-1 text-sm">
                    Launch year: {item.launch_year}
                  </p>

                  <p className="text-sm">
                    Maturity: {item.maturity}
                  </p>

                  <p className="mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </Popup>
            </SafeCircleMarker>
          );
        })}
      </SafeMapContainer>
    </div>
  );
}
