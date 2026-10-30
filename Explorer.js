"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import listings from "../data/listings.json";

const LeafletMap = dynamic(() => import("./Map"), { ssr: false, loading: () => <div className="map" /> });

const MAIL = "hallo@werkei.de"; // TODO: echte Adresse eintragen

const T = {
  de: {
    intro: "Werkei bringt Eigentümer in Chemnitz und Studierende zusammen. Eigentümer stellen eine Wohnung mit Foto und Preis ein. Studierende buchen, reinigen und verdienen schnell etwas dazu.",
    map: "Freie Wohnungen auf der Karte",
    hint: "Karte mit Finger oder Maus bewegen. Gelbes Schild antippen für Details.",
    book: "Jetzt anfragen", pay: "Verdienst", h: "Std.", r: "Zi.",
    addr: "Genaue Adresse nach der Buchung.",
    owner: "Sie besitzen eine Wohnung?",
    ownerText: "Schreiben Sie uns kurz Ort, Größe, Preis und senden Sie ein Foto. Wir veröffentlichen Ihre Anzeige.",
    post: "Anzeige aufgeben", legal: "Impressum & Datenschutz",
    photo: "Foto folgt", demo: "Beispieldaten – Testphase",
  },
  en: {
    intro: "Werkei connects property owners in Chemnitz with students. Owners post a flat with a photo and a price. Students book it, clean it and earn quick cash.",
    map: "Available flats on the map",
    hint: "Move the map with finger or mouse. Tap a yellow sign for details.",
    book: "Request this job", pay: "You earn", h: "hrs", r: "rooms",
    addr: "Exact address after booking.",
    owner: "Do you own a flat?",
    ownerText: "Email us the district, size, price and a photo. We will publish your ad.",
    post: "Post an ad", legal: "Legal notice & privacy",
    photo: "Photo coming soon", demo: "Sample data – test phase",
  },
};

export default function Explorer() {
  const [lang, setLang] = useState("de");
  const [sel, setSel] = useState(null);
  const t = T[lang];
  const mail = (subject) => `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a className="logo" href="/" aria-label="Werkei">Werkei<small>.de</small></a>
          <div className="lang" role="group" aria-label="Sprache / Language">
            <button aria-pressed={lang === "de"} onClick={() => setLang("de")}>DE</button>
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <h1>Werkei</h1>
            <p className="intro">{t.intro}</p>
          </div>
        </section>

        <section className="wrap" aria-labelledby="mapH">
          <h2 id="mapH">{t.map}</h2>
          <p className="hint">{t.hint} <em>({t.demo})</em></p>
          <LeafletMap items={listings} selected={sel} onSelect={setSel} />

          <ul className="cards">
            {listings.map((i) => (
              <li key={i.id} className={sel === i.id ? "card sel" : "card"}>
                <button className="cardbtn" onClick={() => setSel(i.id)}>
                  <div className="photo">{i.photo ? <img src={i.photo} alt="" /> : t.photo}</div>
                  <h3>{i[lang]}</h3>
                  <p>{i.district} · {i.rooms} {t.r} · {i.m2} m² · {i.hours} {t.h}</p>
                  <p className="price">{t.pay}: <strong>{i.price} €</strong></p>
                </button>
                <p className="small">{t.addr}</p>
                <a className="btn" href={mail(`Werkei Anfrage #${i.id} ${i.district}`)}>{t.book}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="owner">
          <div className="wrap">
            <h2>{t.owner}</h2>
            <p>{t.ownerText}</p>
            <a className="btn" href={mail("Werkei Anzeige aufgeben")}>{t.post}</a>
          </div>
        </section>
      </main>

      <footer className="wrap foot"><a href="/legal">{t.legal}</a> · © Werkei.de</footer>
    </>
  );
}
