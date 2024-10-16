// components/Navigation.tsx
"use client";

import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme necessário
import { useRef, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const NavBar: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Função para fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // Adiciona o evento de clique
    document.addEventListener("mousedown", handleClickOutside);

    // Limpa o evento ao desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      {/* Navegação para telas grandes */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center gap-6">
            {["Home", "About", "Projects", "Education", "Contact"].map((item) => (
              <li key={item}>
                <Button
                  variant="ghost"
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-400"
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Botão de menu hamburger */}
      <button
      className="md:hidden fixed top-4 right-4 z-50 p-2 text-white bg-blue-500 rounded focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)} // Correctly toggle the state
      aria-label="Toggle Navigation"
    >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Navegação Hamburger */}
      {menuOpen && (
        <nav ref={menuRef} className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col justify-center gap-4">
              {["Home", "About", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className={`text-sm transition-colors duration-200 ${
                      activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-400"
                    }`}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setMenuOpen(false); // Fechar o menu após a navegação
                    }}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
