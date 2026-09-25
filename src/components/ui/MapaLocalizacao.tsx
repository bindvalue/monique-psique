"use client";

// Importa o configurador do worker ANTES de qualquer coisa
import "@/lib/maplibre-worker";

import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

// Estilo Positron da OpenFreeMap
const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron";

const COORDENADAS = {
  longitude: -43.9352,
  latitude: -19.9245,
};

export default function MapaLocalizacao() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Map
        initialViewState={{
          longitude: COORDENADAS.longitude,
          latitude: COORDENADAS.latitude,
          zoom: 13.5,
        }}
        mapStyle={MAP_STYLE}
        scrollZoom={false}
        dragRotate={false}
        pitchWithRotate={false}
        touchPitch={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl
          position="bottom-right"
          showCompass={false}
          style={{ marginBottom: 80, marginRight: 12 }}
        />

        <Marker
          longitude={COORDENADAS.longitude}
          latitude={COORDENADAS.latitude}
          anchor="bottom"
        >
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vinho shadow-lg">
              <span className="font-serif text-lg text-creme" aria-hidden="true">
                Ψ
              </span>
            </div>
            <div className="absolute -bottom-1 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-vinho/30 blur-[2px]" />
          </div>
        </Marker>
      </Map>
    </div>
  );
}