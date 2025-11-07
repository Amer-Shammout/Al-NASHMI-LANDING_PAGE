import React from "react";
import SectionDetails from "../components/SectionDetails";

import { ABOUT_DATA } from "../constants/about";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="من نحن"
      className=" px-4 sm:px-4 md:px-8 lg:px-[100px] py-8"
    >
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <SectionDetails className="md:w-1/2"  data={ABOUT_DATA} />
        <img
          src={ABOUT_DATA.image}
          alt="كأس قهوة"
          className="object-contain w-[300px] md:w-1/2 lg:w-[450px]"
        />
      </div>
    </section>
  );
}
