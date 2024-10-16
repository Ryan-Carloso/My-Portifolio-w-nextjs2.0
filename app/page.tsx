// Seu componente principal
"use client";

import { useState, useEffect } from "react";
import Componentes from "@/components/componentes";
import NavBar from "@/components/navbar"; // Importe o novo componente

export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "education", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Fechar o menu após a navegação
    }
  };

  return (
    <main className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden transition-all duration-300 ${menuOpen ? "pb-32" : ""}`}>

      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className={`transition-all duration-300 ${menuOpen ? "mt-48" : ""}`}>
        <Componentes />
      </div>
    </main>
  );
}
