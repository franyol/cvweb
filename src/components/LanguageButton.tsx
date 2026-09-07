import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const languages = {
  en: {
    label: "English",
    flag: "🇺🇸",
  },
  es: {
    label: "Español",
    flag: "🇨🇴",
  },
};

export function LanguageButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const pathParts = location.pathname.split("/");
  const currentLanguage =
    pathParts[1] === "es" ? "es" : "en";

  const current = languages[currentLanguage];

  const changeLanguage = (language: "en" | "es") => {
    const newPath = [
      "",
      language,
      ...pathParts.slice(2),
    ].join("/");

    setOpen(false);
    navigate(newPath);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="text-base">{current.flag}</span>

        <span>{currentLanguage.toUpperCase()}</span>

        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 min-w-36 overflow-hidden rounded-md border bg-background p-1 shadow-md"
          role="menu"
        >
          {Object.entries(languages).map(([code, language]) => (
            <button
              key={code}
              type="button"
              onClick={() => changeLanguage(code as "en" | "es")}
              className={`flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted ${code === currentLanguage
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
                }`}
              role="menuitem"
            >
              <span className="text-base">{language.flag}</span>
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
