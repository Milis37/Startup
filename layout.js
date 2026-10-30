import "./globals.css";

export const metadata = {
  title: "Werkei – Wohnungen reinigen, Geld verdienen",
  description: "Werkei verbindet Eigentümer in Chemnitz mit Studierenden, die Wohnungen reinigen und schnell Geld verdienen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
