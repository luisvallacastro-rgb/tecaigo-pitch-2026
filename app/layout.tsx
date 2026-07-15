import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pitch-tecaigo.sites.openai.com"),
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
