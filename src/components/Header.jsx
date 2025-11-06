// src/components/Header/Header.jsx

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // أيقونات الهامبورجر (react-icons)
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative w-full px-4 py-4 sm:px-8 sm:py-6 xl:px-[100px] xl:py-[40px] bg-[rgba(96,96,96,0.2)] fixed top-0 z-50">
      <div className="flex items-center justify-between">
        <nav className="flex items-center justify-between flex-1">
          <a href="#home" className="hidden xl:inline">
            الرئيسية
          </a>
          <a href="#coffee" className="hidden xl:inline">
            قهوتنا
          </a>

          {/* Logo in the center */}
          <a href="#hero">
            <Logo width="120px" />
          </a>

          <a href="#about" className="hidden xl:inline">
            حول
          </a>
          <a href="#contact" className="hidden xl:inline">
            التواصل
          </a>
        </nav>

        {/* Hamburger icon */}
        <button
          className="xl:hidden text-3xl text-[var(--color-white)] cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Dropdown menu positioned below header */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 bg-[rgba(96,96,96,0.2)] py-4 rounded-b-xl ">
          <a href="#home" onClick={toggleMenu}>
            الرئيسية
          </a>
          <a href="#coffee" onClick={toggleMenu}>
            قهوتنا
          </a>
          <a href="#about" onClick={toggleMenu}>
            حول
          </a>
          <a href="#contact" onClick={toggleMenu}>
            التواصل
          </a>
        </div>
      </div>
    </header>
  );
}
