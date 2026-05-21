import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Voyage | Luxury travel marketplace",
  description: "Premium tourism agency UI for curated journeys, luxury escapes, Omra/Hajj, and custom travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
