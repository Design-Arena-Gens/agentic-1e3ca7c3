import type { Metadata } from "next";
import { Cinzel, Hind } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamakhya Temple Puja Vision",
  description:
    "Immersive animated experience of a serene puja at Kamakhya Temple."
};

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-cinzel"
});

const hind = Hind({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  variable: "--font-hind"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className={`${cinzel.variable} ${hind.variable}`}>{children}</body>
    </html>
  );
}
