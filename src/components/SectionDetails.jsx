import React from "react";

export default function SectionDetails({ data }) {
  // destructure البيانات من props
  const { title, subtitle, desc } = data;

  return (
    <div className="flex flex-col gap-2 text-center sm:text-center md:text-start">
      {/* العنوان الفرعي */}
      <h3>{subtitle}</h3>

      {/* العنوان الرئيسي */}
      <h1>{title}</h1>

      {/* الوصف */}
      <p>{desc}</p>
    </div>
  );
}
