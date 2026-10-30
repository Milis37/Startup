"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Standard: OSM-Kacheln (nur Pilot/kleine Last). Für Livebetrieb NEXT_PUBLIC_TILE_URL setzen (z. B. MapTiler).
const TILES = process.env.NEXT_PUBLIC_TILE_URL || "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

export default function LeafletMap({ items, selected, onSelect }) {
  const el = useRef(null);
  const map = useRef(null);
  const pins = useRef({});

  useEffect(() => {
    if (map.current) return;
    const m = L.map(el.current).setView([50.8278, 12.9214], 13);
    L.tileLayer(TILES, { maxZoom: 19, attribution: "© OpenStreetMap-Mitwirkende" }).addTo(m);
    items.forEach((i) => {
      pins.current[i.id] = L.marker([i.lat, i.lng], {
        title: i.district,
        icon: L.divIcon({ className: "pin", html: `<span>${i.price} €</span>`, iconSize: [64, 40], iconAnchor: [32, 40] }),
      }).addTo(m).on("click", () => onSelect(i.id));
    });
    map.current = m;
    return () => { m.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    Object.entries(pins.current).forEach(([id, mk]) =>
      mk.getElement()?.classList.toggle("sel", Number(id) === selected)
    );
    const s = items.find((i) => i.id === selected);
    if (s && map.current) map.current.flyTo([s.lat, s.lng], 15, { duration: 0.6 });
  }, [selected]);

  return <div ref={el} className="map" role="application" aria-label="Karte" />;
}
