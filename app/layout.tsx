import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tecaigo-pitch-2026.onrender.com"),
  title: "TeCaiGO | Pitch de inversión 2026",
  description: "La infraestructura digital que organiza el turismo colaborativo.",
  openGraph: {
    title: "TeCaiGO | Infraestructura digital para el turismo colaborativo",
    description: "Pitch de inversión de TeCaiGO para la Copa Mundial de Emprendimiento 2026.",
    images: [{ url: "/assets/tecaigo-share-card.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/tecaigo-share-card.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
