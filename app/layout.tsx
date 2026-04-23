import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import AudioToggle from "@/components/AudioToggle";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title:
    "Press 1 for AI — Software with the intelligence of 2026 and the hold music of 1986",
  description:
    "We build AI that works for you — and a shield that keeps it from working against you. Anonyme, The Button Game, and Stockit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {children}
        <AudioToggle theme="amber" position="top-right" />
      </body>
    </html>
  );
}
