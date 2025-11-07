import React from "react";
import CoffeeCard from "../components/CoffeeCard";

import { COFFEE_TYPES_DATA, COFFEE_CARDS } from "../constants/coffee_types";
import beans from "../assets/images/beans.png";

export default function CoffeeTypesSection() {
  return (
    <section
      id="coffee-types"
      className="relative py-8 px-4 sm:px-4 md:px-8 lg:px-[100px] flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-2 text-center ">
        <h3>{COFFEE_TYPES_DATA.subtitle}</h3>

        <h1>{COFFEE_TYPES_DATA.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-24 sm:gap-24 md:gap-4 w-full mt-16">
        {COFFEE_CARDS.map((coffee, idx) => (
          <CoffeeCard key={idx} data={coffee} />
        ))}
      </div>

      <button className="btn-primary ">المزيد</button>
      <img src={beans} className="-z-1000 -right-30 -bottom-30  absolute w-md mix-blend-soft-light" />
    </section>
  );
}
