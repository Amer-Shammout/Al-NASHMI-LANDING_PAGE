import React from "react";
import Logo from "../components/Logo";
import "../styles/components.css";

import heroImg from "../assets/images/hero_img.png";

import { HERO_DATA } from "../constants/hero";


export default function HeroSection() {
  return (
    <div className="flex justify-between items-center xl:mx-[100px]  flex-col-reverse md:flex-row gap-8">
      {/* النص والأزرار */}
      <div className="flex flex-col gap-6 items-center md:items-center">
        <h3 className="text-center ">
          {HERO_DATA.title}
        </h3>
        <Logo
          width="422px"
          height="147px"
          blendMode="hard-light"
          className="mb-2"
        />
        <div className="flex gap-2">
          <button className="btn-primary">اطلب الآن</button>
          <button className="btn-outline">المزيد</button>
        </div>
      </div>

      {/* الصورة */}
      <img
        src={heroImg}
        alt="قهوة عربية"
        className="w-full max-w-sm md:max-w-md"
      />
    </div>
  );
}
