import React from "react";

export default function CoffeeCard({ data }) {
  const { title, price, image } = data;

  return (
    <div className="relative bg-(--color-secondary) sm:mix-blend-hard-light bg-blend-hard-light  w-full shadow-[0_4px_10px_#1E0E0A] transition-transform duration-300 hover:scale-102 cursor-pointer">
      <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={title}
          className="w-32 sm:w-36 lg:w-40 object-contain"
          loading="lazy"
        />
      </div>

      <div className="pt-[calc(100px/2+24px)] sm:pt-[calc(144px/2+24px)] lg:pt-[calc(147px/2+24px)] flex flex-col items-center text-center gap-2 pb-6">
        <p>{title}</p>
        <h3>${price}</h3>
      </div>
    </div>
  );
}
