import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Contact Section Data
export const CONTACT_DATA = {
  subtitle: "النشمي دوم موجود !",
  title: "تواصل معنا",
  contact_info: [
    {
      text: "alnashmi@gmail.com",
      iconName: "FaEnvelope", // اسم الأيقونة فقط
      type: "email",
      name: "البريد الالكتروني",
    },
    {
      text: "0499888777",
      iconName: "FaPhone", // اسم الأيقونة فقط
      type: "phone",
      name: "رقم الهاتف",
    },
    {
      text: "الخليج العربي",
      iconName: "FaMapMarkerAlt", // اسم الأيقونة فقط
      type: "location",
      name: "العنوان",
    },
  ],
};

// كائن لتعيين الأسماء إلى مكونات
export const ICON_MAP = {
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaMapMarkerAlt: FaMapMarkerAlt,
};
