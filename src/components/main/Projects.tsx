import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation("home");

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-playfair text-5xl font-semibold tracking-tight">
          {t("projects.title")}
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{t("projects.paragraphs.intro")}</p>

          <p>{t("projects.paragraphs.experience")}</p>
        </div>
      </div>
    </section>
  );
}
