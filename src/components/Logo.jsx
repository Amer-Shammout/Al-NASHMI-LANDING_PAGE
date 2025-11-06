// src/components/Logo/Logo.jsx
import LogoSVG from "../assets/icons/logo.svg?react";

export default function Logo({
  className = "", // للتحكم بالألوان والحجم عبر Tailwind
  width = "64px", // عرض افتراضي
  height = "64px", // ارتفاع افتراضي
  blendMode = "normal", // الوضع الافتراضي لل-blend mode
  style = {}, // أي ستايل إضافي
  ...rest // أي خصائص إضافية مثل onClick, id, aria-*, ...
}) {
  return (
    <LogoSVG
      className={className}
      width={width}
      height={height}
      style={{ mixBlendMode: blendMode, ...style }}
      {...rest}
    />
  );
}
