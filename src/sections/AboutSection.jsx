import React from "react";
import SectionDetails from "../components/SectionDetails";

import { ABOUT_DATA } from "../constants/about";
import beans from "../assets/images/beans.png";
import dist from "../assets/images/dist.png";
import AnimatedImage from "../components/AnimatedImage";
import AnimatedSection from "../components/AnimatedSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="من نحن"
      className=" px-4 sm:px-4 md:px-8 lg:px-[100px] py-8 relative"
    >
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <AnimatedSection direction="left" delay={0.2}>
          <SectionDetails className="md:w-1/2" data={ABOUT_DATA} />
        </AnimatedSection>

        <AnimatedImage
          src={ABOUT_DATA.image}
          alt="كأس قهوة"
          className="object-contain w-[300px] md:w-1/2 lg:w-[450px]"
          direction="right"
        />
      </div>
      <img
        src={beans}
        className="-z-1000 -left-30 -bottom-30  absolute w-md mix-blend-soft-light"
        loading="lazy"
      />
      <img src={dist} className="z-40 right-0 -bottom-20  absolute w-10 " />
    </section>
  );
}
