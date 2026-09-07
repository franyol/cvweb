import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import profile from "@/assets/images/profile.svg";
import { LanguageButton } from "../LanguageButton";

const navItems = [
  {
    label: "header.home",
    path: "/",
  },
  {
    label: "header.slipperyHands",
    path: "/Slippery-Hands",
  },
];

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation("home");
  const location = useLocation();

  const currentLanguage =
    location.pathname.split("/")[1] === "es" ? "es" : "en";

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={`/${currentLanguage}${item.path}`}
          onClick={onNavigate}
          className="transition-colors hover:text-gray-300"
        >
          {t(item.label)}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const { t } = useTranslation("home");
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLanguage =
    location.pathname.split("/")[1] === "es" ? "es" : "en";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      } else {
        // Scrolling down
        setVisible(false);
        setMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-black text-white transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          to={`/${currentLanguage}`}
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={profile}
            alt="Francisco Valbuena"
            className="h-10 w-10 rounded-full"
          />

          <span className="font-heading text-lg font-semibold">
            Francisco Valbuena
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationLinks />
          <LanguageButton />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language is always visible on mobile */}
          <LanguageButton />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-md p-2 transition-colors hover:bg-white/10"
            aria-label={
              menuOpen
                ? t("header.closeMenu")
                : t("header.openMenu")
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${menuOpen
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col px-6 py-3">
          <NavigationLinks onNavigate={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
