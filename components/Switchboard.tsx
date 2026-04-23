"use client";

import CRTWrap from "./switchboard/CRTWrap";
import Nav from "./switchboard/Nav";
import Hero from "./switchboard/Hero";
import Ticker from "./switchboard/Ticker";
import AppsSection from "./switchboard/AppsSection";
import ShieldSection from "./switchboard/ShieldSection";
import DialSection from "./switchboard/DialSection";
import Footer from "./switchboard/Footer";

export default function Switchboard() {
  return (
    <CRTWrap>
      <Nav />
      <Hero />
      <Ticker />
      <AppsSection />
      <ShieldSection />
      <DialSection />
      <Footer />
    </CRTWrap>
  );
}
