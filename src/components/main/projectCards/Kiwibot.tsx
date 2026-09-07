import { useTranslation } from "react-i18next";

import kiwibotImage from "@/assets/images/kiwibot.jpg";
import { ProjectCard } from "@/components/ProjectCard";

export default function Kiwibot() {
  const { t } = useTranslation("home");

  return (
    <section id="kiwibot">
      <ProjectCard
        title={t("projects.kiwibot.title")}
        description={t("projects.kiwibot.description")}
        image={kiwibotImage}
        imageAlt={t("projects.kiwibot.imageAlt")}
        content={
          <>
            <p>{t("projects.kiwibot.paragraphs.intro")}</p>

            <p className="mt-4">
              {t("projects.kiwibot.paragraphs.automation")}
            </p>

            <p className="mt-4">
              {t("projects.kiwibot.paragraphs.debugging")}
            </p>

            <p className="mt-4">
              {t("projects.kiwibot.paragraphs.infrastructure")}
            </p>

            <div className="mt-8">
              <h4 className="font-playfair text-2xl font-semibold">
                {t("projects.kiwibot.technologies.title")}
              </h4>

              <p className="mt-3 text-muted-foreground">
                Python · Next.js · TypeScript · REST APIs · tRPC · GCP Cloud Run
                · Docker · SSH · Telemetry · Linux · Fleet Management
              </p>
            </div>
          </>
        }
      />
    </section>
  );
}
