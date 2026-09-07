import { useTranslation } from "react-i18next";

export function AboutMe() {
  const { t } = useTranslation("home");

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-playfair text-5xl font-semibold tracking-tight">
          {t("about.title")}
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{t("about.paragraphs.intro")}</p>
          <p>{t("about.paragraphs.experience")}</p>
          <p>{t("about.paragraphs.interests")}</p>
          <p>{t("about.paragraphs.phd")}</p>
        </div>

        <div className="mt-10">
          <h3 className="font-playfair text-2xl font-semibold">
            {t("about.researchInterests.title")}
          </h3>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Robotics · Computer Vision · Machine Learning · Cybersecurity ·
            Embedded Systems · Signal Processing · Generative Models ·
            Reinforcement Learning
          </p>
        </div>

        <div className="mt-10">
          <h3 className="font-playfair text-2xl font-semibold">
            {t("about.technicalBackground.title")}
          </h3>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Python · C++ · C · TypeScript · ROS2 · C#/.NET · React · Next.js ·
            ESP32 · FreeRTOS · AWS · Docker · Linux · Git · REST APIs ·
            Signal Processing
          </p>
        </div>
      </div>
    </section>
  );
}
