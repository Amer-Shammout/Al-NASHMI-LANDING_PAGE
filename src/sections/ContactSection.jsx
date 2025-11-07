import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT_DATA } from "../constants/contact";

// خريطة الأيقوانات
const iconMap = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
};

export default function ContactSection() {
  // دالة للتعامل مع النقر على عناصر التواصل
  const handleContactClick = (type, text) => {
    switch (type) {
      case "email":
        window.open(`mailto:${text}`);
        break;
      case "phone":
        window.open(`tel:${text}`);
        break;
      case "location":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(text)}`);
        break;
      default:
        break;
    }
  };

  const contactList = CONTACT_DATA.contact_info.map((contact, index) => {
    const IconComponent = iconMap[contact.type];

    return (
      <button
        key={index}
        onClick={() => handleContactClick(contact.type, contact.text)}
        className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg border border-white/60 hover:border-[var(--color-primary)]/30 text-right focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 flex-1 min-w-[280px] max-w-[400px]"
      >
        {/* الأيقونة */}
        <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-lg rounded-lg group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 shadow-sm">
          <IconComponent className="text-[var(--color-primary)] text-lg group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* الخط الفاصل العمودي */}
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent group-hover:via-[var(--color-primary)] transition-all duration-300"></div>

        {/* النص */}
        <div className="flex-1">
          <h3>{contact.text}</h3>
          <p>{contact.name}</p>
        </div>
      </button>
    );
  });

  return (
    <section className="px-8  lg:px-[100px] py-8" id="contact">
      <div className="bg-[var(--color-secondary)] w-full shadow-[0_4px_10px_#1E0E0A] mix-blend-hard-light flex flex-col justify-center items-center gap-8 lg:py-8 md:py-8 py-4 rounded-2xl relative overflow-hidden">
        {/* تأثير إضاءة خلفية */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
          <div className="absolute inset-0 bg-radial-gradient from-[var(--color-primary)]/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* العنوان والوصف */}
        <div className="flex flex-col gap-2 text-center relative z-10">
          <h3>{CONTACT_DATA.subtitle}</h3>
          <h1>{CONTACT_DATA.title}</h1>
        </div>

        {/* قائمة معلومات التواصل - معدلة لـ Wrap */}
        <div className="flex flex-wrap justify-center gap-4 w-full px-4 relative z-10 max-w-6xl mx-auto">
          {contactList}
        </div>
      </div>
    </section>
  );
}
