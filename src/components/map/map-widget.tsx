"use client";

import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";

type MapPoint = {
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
};

type MapWidgetProps = {
  points: MapPoint[];
  fill?: boolean;
};

const FALLBACK_CENTER: LatLngExpression = [27.7172, 85.324];

function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map]);

  return null;
}

export function MapWidget({ points, fill = false }: MapWidgetProps) {
  const validPoints = points.filter(
    (point): point is MapPoint & { latitude: number; longitude: number } =>
      typeof point.latitude === "number" &&
      Number.isFinite(point.latitude) &&
      typeof point.longitude === "number" &&
      Number.isFinite(point.longitude),
  );
  const center: LatLngExpression = validPoints[0]
    ? [validPoints[0].latitude, validPoints[0].longitude]
    : FALLBACK_CENTER;

  return (
    <div className={fill ? "h-[360px] w-full" : "h-72 w-full"}>
      <MapContainer
        center={center}
        zoom={validPoints.length ? 15 : 12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <ResizeMap />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {validPoints.map((point) => (
          <CircleMarker
            key={`${point.latitude}-${point.longitude}-${point.name}`}
            center={[point.latitude, point.longitude]}
            radius={10}
            pathOptions={{
              color: "#0e4d98",
              fillColor: "#42a5f5",
              fillOpacity: 0.9,
              weight: 3,
            }}
          >
            <Popup>
              <strong>{point.name}</strong>
              {point.address && <div>{point.address}</div>}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}