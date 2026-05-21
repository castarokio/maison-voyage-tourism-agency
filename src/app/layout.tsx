import type { Metadata } from "next";
import "./globals.css";

const appBasePath = process.env.GITHUB_ACTIONS === "true" ? "/maison-voyage-tourism-agency" : "";

export const metadata: Metadata = {
  title: "Maison Voyage | Luxury travel marketplace",
  description: "Premium tourism agency UI for curated journeys, luxury escapes, Omra/Hajj, and custom travel.",
  icons: {
    icon: [
      { url: `${appBasePath}/favicon.ico`, sizes: "any" },
      { url: `${appBasePath}/icon.svg`, type: "image/svg+xml" },
    ],
  },
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
