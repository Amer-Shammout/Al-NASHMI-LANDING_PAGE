import React from "react";
import Logo from "./Logo";

import  facebook  from "../assets/icons/facebook.png";
import  x  from "../assets/icons/x.png";
import  telegram  from "../assets/icons/telegram.png";
import  instagram  from "../assets/icons/instagram.png";

export default function Footer() {
  return (
    <footer
      className="bg-(--color-secondary) w-full shadow-[0_4px_10px_#1E0E0A] mix-blend-hard-light z-50
     flex flex-col gap-8 md:flex-row justify-between items-center lg:py-20 md:py-8 py-4 px-4 sm:px-4 md:px-8 lg:px-[100px]"
    >
      <a href="#hero">
        <Logo width="120px" className="transition-transform duration-300 hover:scale-102 cursor-pointer" />
      </a>

      <div className="flex gap-20 items-center">
        <a href="#hero">الرئيسية</a>
        <a href="#our-coffee">قهوتنا</a>
        <a href="#about">حول</a>
        <a href="#contact">التواصل</a>
      </div>

      <div className="flex justify-between items-center gap-2">
        <img src={telegram} />
        <img src={x} />
        <img src={facebook} />
        <img src={instagram} />
      </div>
    </footer>
  );
}
