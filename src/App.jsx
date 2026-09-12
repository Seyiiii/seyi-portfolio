import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBackground";
import { C } from "./data/portfolioData";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: C.bg, color: C.ink }}>
      <SpaceBackground />
      <div className="relative z-10">
        <Nav />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
