import { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const NAV_ITEMS = [
  { id: "hero", label: "الرئيسية", href: "#hero" },
  { id: "our-coffee", label: "قهوتنا", href: "#our-coffee" },
  { id: "about", label: "حول", href: "#about" },
  { id: "contact", label: "التواصل", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const smoothScrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  const handleNavClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      smoothScrollTo(sectionId);
      setIsOpen(false);
    },
    [smoothScrollTo]
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          const scrollPosition = window.scrollY + 100;
          for (const item of NAV_ITEMS) {
            const element = document.getElementById(item.id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              const offsetBottom = offsetTop + offsetHeight;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetBottom
              ) {
                setActiveSection(item.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // دالة محسنة للكلاسات - الحل الجذري
  const getNavLinkClasses = (sectionId) => {
    const isActive = activeSection === sectionId;

    return [
      "nav-link", // لاستبعاد CSS العام
      "transition-all",
      "!duration-300",
      "ease-in",
      // إعادة تعيين كل أنماط CSS العام بالقوة
      "!text-base",
      "!text-[18px]",
      "hover:!text-white",
      "hover:!font-bold",
      "hover:!mix-blend-normal",

      // الحالة النشطة
      isActive
        ? "!text-[var(--color-white)] !font-bold"
        : "!text-white !font-normal mix-blend-soft-light",
    ].join(" ");
  };

  const renderNavLinks = (isMobile = false) =>
    NAV_ITEMS.map((item) => (
      <a
        key={item.id}
        href={item.href}
        className={
          isMobile
            ? getNavLinkClasses(item.id)
            : `${getNavLinkClasses(item.id)} hidden xl:inline`
        }
        onClick={(e) => handleNavClick(e, item.id)}
      >
        {item.label}
      </a>
    ));

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 py-4 sm:px-8 sm:py-6 xl:px-[100px] xl:py-10 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(96,96,96,0.2)] backdrop-blur-sm shadow-lg"
          : "bg-[rgba(96,96,96,0.2)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <nav className="flex items-center justify-between flex-1">
          {renderNavLinks().slice(0, 2)}

          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="shrink-0 nav-link"
          >
            <Logo
              width="120px"
              className="transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </a>

          {renderNavLinks().slice(2)}
        </nav>

        <button
          className="xl:hidden text-3xl text-white cursor-pointer hover:text-(--color-primary) transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 rounded-md"
          onClick={toggleMenu}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div
        className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-lg ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 bg-[rgba(96,96,96,0.3)] backdrop-blur-lg py-4 rounded-b-xl border-t border-white/20">
          {renderNavLinks(true)}
        </div>
      </div>
    </header>
  );
}
