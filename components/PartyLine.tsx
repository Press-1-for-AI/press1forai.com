import AppsSection from "./party-line/AppsSection";
import CallSection from "./party-line/CallSection";
import Footer from "./party-line/Footer";
import Hero from "./party-line/Hero";
import Marquee from "./party-line/Marquee";
import Nav from "./party-line/Nav";
import ShieldSection from "./party-line/ShieldSection";
import { BG, INK } from "./party-line/constants";

export default function PartyLine() {
  return (
    <div
      style={{
        background: BG,
        color: INK,
        minHeight: "100%",
        fontFamily: "inherit",
      }}
    >
      <Nav />
      <Hero />
      <Marquee />
      <AppsSection />
      <ShieldSection />
      <CallSection />
      <Footer />
    </div>
  );
}
