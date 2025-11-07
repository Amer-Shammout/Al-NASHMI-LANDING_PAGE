import React from "react";
import Logo from "./Logo";
import "../styles/components.css";

import facebook from "../assets/icons/facebook.png";
import x from "../assets/icons/x.png";
import telegram from "../assets/icons/telegram.png";
import instagram from "../assets/icons/instagram.png";
import { useCallback } from "react";

export default function Footer() {
  const smoothScrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, []);

  const handleNavClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      smoothScrollTo(sectionId);
    },
    [smoothScrollTo]
  );
  return (
    <footer
      className="bg-(--color-secondary) w-full shadow-[0_4px_10px_#1E0E0A] mix-blend-hard-light z-50
     flex flex-col gap-8 md:flex-row justify-between items-center lg:py-20 md:py-8 py-4 px-4 sm:px-4 md:px-8 lg:px-[100px]"
    >
      <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
        <Logo
          width="120px"
          className="transition-transform duration-300 hover:scale-102 cursor-pointer"
        />
      </a>

      <div className="flex justify-between w-full sm:w-fit sm:gap-16 items-center">
        <a
          href="#hero"
          className="navLink"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          الرئيسية
        </a>
        <a
          href="#our-coffee"
          className="navLink"
          onClick={(e) => handleNavClick(e, "our-coffee")}
        >
          قهوتنا
        </a>
        <a
          href="#about"
          className="navLink"
          onClick={(e) => handleNavClick(e, "about")}
        >
          حول
        </a>
        <a
          href="#contact"
          className="navLink"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          التواصل
        </a>
      </div>

      <div className="flex justify-between items-center gap-2">
        <img src={telegram} loading="lazy" />
        <img src={x} loading="lazy" />
        <img src={facebook} loading="lazy" />
        <img src={instagram} loading="lazy" />
      </div>
    </footer>
  );
}
