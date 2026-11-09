import { useTranslation } from "react-i18next";
import { ContactButton } from "@/components/services/ContactButton";

interface ContactBannerProps {
  email?: string;
}

export function ContactBanner({
  email = "f.valbuenao64@gmail.com",
}: ContactBannerProps) {
  const { t } = useTranslation("services");

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-muted/30 px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("contactBanner.eyebrow")}
        </p>

        <h2 className="font-playfair text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {t("contactBanner.title")}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("contactBanner.description")}
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-6 inline-block text-lg font-semibold underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-xl"
        >
          {email}
        </a>

        <div className="mt-8">
          <ContactButton
            email={email}
            label={t("contactBanner.button")}
            subject={t("contactBanner.subject")}
            message={t("contactBanner.message")}
          />
        </div>
      </div>
    </section>
  );
}

