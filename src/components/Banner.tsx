import React from "react";

interface BannerProps {
  desktopImage: string;
  mobileImage?: string;
  alt?: string;
  className?: string;

  title?: string;
  subtitle?: string;

  button?: {
    label: string;
    href: string;
  };

  theme?: "light" | "dark";
  contentPosition?: "left" | "center" | "right";
}

const Banner: React.FC<BannerProps> = ({
  desktopImage,
  mobileImage,
  alt = "Banner",
  className = "",
  title,
  subtitle,
  button,
  theme = "light",
  contentPosition = "left",
}) => {
  const hasContent = title || subtitle || button;
  const isLight = theme === "light";

  const alignment = {
    left: "md:items-start md:text-left",
    center: "md:items-center md:text-center",
    right: "md:items-end md:text-right",
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <picture className="block w-full">
        {mobileImage && (
          <source
            media="(max-width: 768px)"
            srcSet={mobileImage}
          />
        )}

        <img
          src={desktopImage}
          alt={alt}
          className="block h-auto w-full"
        />
      </picture>

      {hasContent && (
        <>
          {/* Image overlay */}
          <div
            className={`pointer-events-none absolute inset-0 ${isLight
                ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/45 md:via-black/15 md:to-transparent"
                : "bg-gradient-to-t from-white/60 via-white/10 to-transparent md:bg-gradient-to-r md:from-white/45 md:via-white/15 md:to-transparent"
              }`}
          />

          {/* Content */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-end gap-5 px-5 pb-8 pt-6 text-center md:justify-center md:gap-0 md:p-10 lg:p-20 ${alignment[contentPosition]
              } ${isLight ? "text-white" : "text-neutral-900"}`}
          >
            <div className="w-full max-w-[550px] md:my-0">
              {title && (
                <h2 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:mb-4 md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="mx-auto max-w-[500px] text-base leading-relaxed sm:text-lg md:text-lg">
                  {subtitle}
                </p>
              )}
            </div>

            {button && (
              <a
                href={button.href}
                className={`inline-flex w-fit items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold tracking-wider transition-all duration-200 hover:opacity-80 md:mt-7 md:px-9 md:py-4 ${isLight
                    ? "bg-white text-neutral-900"
                    : "bg-neutral-900 text-white"
                  }`}
              >
                {button.label}
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
