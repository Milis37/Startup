# Werkei.de – MVP (Phase 1)

Next.js 14 (App Router) + Leaflet/OpenStreetMap. Kein API-Key, keine Cookies, keine Google-Dienste (DSGVO-freundlich).

## Lokal starten
```
npm install
npm run dev      # http://localhost:3000
```

## Deployment (Vercel)
1. Alle Dateien in das GitHub-Repo pushen (Ordnerstruktur beibehalten, `package.json` im Root).
2. vercel.com → *Add New Project* → GitHub-Repo wählen → Framework wird als **Next.js** erkannt → *Deploy*.
3. Domain `werkei.de` unter *Settings → Domains* hinzufügen.

## Vor dem Livegang (TODO)
- `components/Explorer.js`: `MAIL` durch echte Adresse ersetzen.
- `app/legal/page.js`: Impressum + Datenschutzerklärung vollständig ausfüllen (Pflicht).
- Karte: Für mehr als Pilot-Traffic `NEXT_PUBLIC_TILE_URL` in Vercel setzen (z. B. MapTiler-Raster-URL mit Key). Die öffentlichen OSM-Server sind keine Produktions-CDN.
- Echte Anzeigen: `data/listings.json` bearbeiten (Foto in `public/photos/` legen, Pfad bei `photo` eintragen, z. B. `"/photos/1.jpg"`).

## Phase 2 (nicht enthalten)
Supabase (EU-Region Frankfurt): Login, Anzeigen-Formular mit Foto-Upload, Buchungen, Admin-Freigabe; Zahlungsabwicklung (Stripe).
