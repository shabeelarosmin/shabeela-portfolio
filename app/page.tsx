"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [activePage, setActivePage] = useState("Home");

  const pages: Record<string, React.ReactNode> = {
    Home: <Hero />,
    About: <About />,
    Education: <Education />,
    Skills: <Skills />,
    Projects: <Projects />,
    Contact: <Contact />,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f0e5]">
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <div className="min-h-screen pt-20">{pages[activePage]}</div>

      <Footer />
    </main>
  );
}
