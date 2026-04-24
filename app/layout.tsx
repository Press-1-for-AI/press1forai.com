import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import AudioToggle from "@/components/AudioToggle";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Press 1 for AI — AI that's actually fun.",
  description:
    "We build software that thinks faster than your group chat, and a security layer that's smarter than your crypto-bro cousin. Anonyme, The Button Game, Stockit, Mineme, Tiny Limp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>
        {children}
        <AudioToggle theme="neon" position="top-right" />
      </body>
    </html>
  );
}
