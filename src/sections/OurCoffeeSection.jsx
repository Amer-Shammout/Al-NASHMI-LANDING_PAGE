import React from "react";
import SectionDetails from "../components/SectionDetails";

import { OUR_COFFEE_DATA } from "../constants/our_coffee";
import beans from "../assets/images/beans.png";
import spoon from "../assets/images/spoon.png";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedImage from "../components/AnimatedImage";

export default function OurCoffeeSection() {
  return (
    <section
      id="our-coffee"
      aria-label="قسم قهوتنا"
      className="relative pl-4 sm:px-4 md:pl-8 lg:pl-[100px] py-8"
    >
      <img
        src={beans}
        className="-z-100 -left-30  absolute w-md mix-blend-soft-light"
        loading="lazy"
      />

      <div className="flex justify-between items-center flex-col md:flex-row">
        <AnimatedImage
          direction="left"
          src={OUR_COFFEE_DATA.image}
          alt="ملعقة قهوة"
          className="object-contain md:w-1/2 sm:translate-x-40 translate-x-28 md:translate-0 sm:relative"
        />
        <AnimatedSection direction="none" delay={0.2}>
          <SectionDetails className="md:w-1/2" data={OUR_COFFEE_DATA} />
        </AnimatedSection>
      </div>
      <img
        src={spoon}
        className="-z-1000 left-0 -bottom-10  absolute w-[50px] md:w-20"
        loading="lazy"
      />
    </section>
  );
}
