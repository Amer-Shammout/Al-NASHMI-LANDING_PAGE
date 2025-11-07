import React from "react";
import Logo from "../components/Logo";
import "../styles/components.css";

import heroImg from "../assets/images/hero_img.png";

import { HERO_DATA } from "../constants/hero";
import { useCallback } from "react";
import beans from "../assets/images/beans.png";

export default function HeroSection() {
  const smoothScrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, []);
  return (
    <section
      className=" py-8  md:px-8 sm:px-4 px-4  xl:mx-[100px]"
      id="hero"
      aria-label="قسم المقدمة - القهوة العربية الأصيلة"
    >
      <img
        src={beans}
        className="-z-1000 -right-20 -top-30 absolute w-md mix-blend-soft-light"
      />

      <div className="flex justify-between items-center   flex-col-reverse md:flex-row gap-8 ">
        {/* النص والأزرار */}
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-center ">{HERO_DATA.title}</h3>
          <Logo
            blendMode="hard-light"
            className="block w-[200px]  lg:w-[422px] h-20 sm:h-[100px] lg:h-[147px] mb-2"
          />

          <div className="flex gap-2">
            <button
              className="btn-primary"
              onClick={() => smoothScrollTo("coffee-types")}
            >
              اطلب الآن
            </button>
            <button
              className="btn-outline"
              onClick={() => smoothScrollTo("about")}
            >
              المزيد
            </button>
          </div>
        </div>

        {/* الصورة */}
        <img
          src={heroImg}
          alt="قهوة عربية"
          className=" w-[200px] sm:w-[250px] md:w-[400px]"
        />
      </div>
    </section>
  );
}
