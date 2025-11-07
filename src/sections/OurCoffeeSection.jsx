import React from "react";
import SectionDetails from "../components/SectionDetails";


import { OUR_COFFEE_DATA } from "../constants/our_coffee";

export default function OurCoffeeSection() {
  return (
    <section
      id="our-coffee"
      aria-label="قسم قهوتنا الخاصة"
      className="pl-4 sm:px-4 md:pl-8 lg:pl-[100px] py-8"
    >
      <div className="flex justify-between items-center flex-col md:flex-row">
        <img
          src={OUR_COFFEE_DATA.image}
          alt="ملعقة قهوة تدخل من يمين الشاشة"
          className="object-contain md:w-1/2 sm:translate-x-40 translate-x-28 md:translate-0 sm:relative"
        />
        <SectionDetails className="md:w-1/2" data={OUR_COFFEE_DATA} />
      </div>
    </section>
  );
}
