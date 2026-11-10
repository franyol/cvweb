import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { ContactButton } from "@/components/services/ContactButton";

interface PackageProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  features?: string[];
  email?: string;
  buttonLabel?: string;
  className?: string;
}

export function Package({
  title,
  description,
  image,
  imageAlt,
  features = [],
  email = "your-email@example.com",
  buttonLabel = "Get in Touch",
  className = "",
}: PackageProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <article
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
      >
        {/* Package image */}
        <button
          type="button"
          onClick={() => setIsImageOpen(true)}
          aria-label={`Zoom in on ${imageAlt ?? title}`}
          className="group relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-muted"
        >
          <img
            src={image}
            alt={imageAlt ?? title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <ZoomIn size={32} />
          </span>
        </button>

        {/* Package content */}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-playfair text-2xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="mt-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 text-primary" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Contact button */}
          <div className="mt-auto pt-8">
            <ContactButton
              email={email}
              label={buttonLabel}
              subject={`Inquiry about ${title}`}
              message={`Hi Francisco, I'm interested in your ${title} service. I'd like to know more about it.`}
              className="w-full"
            />
          </div>
        </div>
      </article>

      {/* Image lightbox */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt ?? title}
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <img
            src={image}
            alt={imageAlt ?? title}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
