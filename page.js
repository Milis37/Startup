export const metadata = { title: "Impressum & Datenschutz – Werkei" };

// TODO vor dem Livegang von Anwalt/Generator prüfen lassen (Pflicht in Deutschland).
export default function Legal() {
  return (
    <main className="wrap legal">
      <h1>Impressum</h1>
      <p>Werkei.de – [Firmenname, Rechtsform]<br />[Straße Nr., PLZ Chemnitz]<br />E-Mail: hallo@werkei.de<br />Vertretungsberechtigt: [Name]</p>
      <h1>Datenschutz</h1>
      <p>Diese Seite setzt keine Cookies und bindet keine Google-Dienste ein. Kartenkacheln werden von OpenStreetMap geladen; dabei wird Ihre IP-Adresse an den Kartenanbieter übertragen. [Vollständige Datenschutzerklärung nach DSGVO ergänzen.]</p>
      <p><a href="/">Zurück zur Startseite</a></p>
    </main>
  );
}
