import { useEffect, useState } from "react";
import profile from "@/assets/images/profile.svg";

export function Header() {
  const [visible, setVisible] = useState(true);

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
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-black px-6 py-4 text-white transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <a href="/" className="flex items-center gap-3">
        <img
          src={profile}
          alt="Franyol"
          className="h-10 w-10 rounded-full"
        />
        <span className="font-heading text-lg font-semibold">
          Francisco Valbuena
        </span>
      </a>

      <nav className="flex items-center gap-6">
        <a href="/">Home</a>
        <a href="/Slippery-Hands">Slippery Hands</a>
      </nav>
    </header>
  );
}
