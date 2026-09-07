import { useTranslation } from "react-i18next";

import marsImage from "@/assets/images/MARS.png";
import { ProjectCard } from "@/components/ProjectCard";

export default function Mars() {
  const { t } = useTranslation("home");

  return (
    <section id="mars">
      <ProjectCard
        title={t("projects.mars.title")}
        description={t("projects.mars.description")}
        image={marsImage}
        imageAlt={t("projects.mars.imageAlt")}
        imagePosition="left"
        content={
          <>
            <p>{t("projects.mars.paragraphs.intro")}</p>

            <p className="mt-4">
              {t("projects.mars.paragraphs.embedded")}
            </p>

            <p className="mt-4">
              {t("projects.mars.paragraphs.analog")}
            </p>

            <p className="mt-4">
              {t("projects.mars.paragraphs.signalProcessing")}
            </p>

            <p className="mt-4">
              {t("projects.mars.paragraphs.evolution")}
            </p>

            <div className="mt-8">
              <h4 className="font-playfair text-2xl font-semibold">
                {t("projects.mars.technologies.title")}
              </h4>

              <p className="mt-3 text-muted-foreground">
                ESP32 · C · ESP-IDF · FreeRTOS · KiCad · LTspice · Python ·
                MATLAB · Signal Processing · PCB Design · Hydrophones · Data
                Acquisition
              </p>
            </div>
          </>
        }
      />
    </section>
  );
}
