import { useTranslation } from "react-i18next";

import fedeancoImage from "@/assets/images/SlipperyHands.png";
import { ProjectCard } from "@/components/ProjectCard";

import {
  FaJs,
  FaGamepad,
} from "react-icons/fa";

export default function SlipperyHands() {
  const { t } = useTranslation("home");

  return (
    <section id="slippery-hands">
      <ProjectCard
        title={t("projects.slipperyHands.title")}
        description={t("projects.slipperyHands.description")}
        image={fedeancoImage}
        imageAlt={t("projects.slipperyHands.imageAlt")}
        imagePosition="right"
        content={
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2">
                <FaJs />
                JavaScript
              </span>

              <span className="flex items-center gap-2">
                <FaGamepad />
                {t("projects.slipperyHands.technologies.gameDevelopment")}
              </span>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/franyol/Slippery-Hands"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                GitHub
              </a>

              <a
                href="/Slippery-Hands/"
                className="underline underline-offset-4 hover:opacity-70"
              >
                {t("projects.slipperyHands.links.play")}
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              {t("projects.slipperyHands.controls")}
            </p>

            <p>{t("projects.slipperyHands.paragraphs.intro")}</p>

            <p>
              {t("projects.slipperyHands.paragraphs.internship.before")}
              <a
                href="https://www.eecis.udel.edu/~badiey/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                {t("projects.slipperyHands.paragraphs.internship.lab")}
              </a>
              {t("projects.slipperyHands.paragraphs.internship.after")}
            </p>

            <p>
              {t("projects.slipperyHands.paragraphs.lambda.before")}
              <a
                href="#LambdaEngine"
                className="underline underline-offset-4 hover:opacity-70"
              >
                Lambda Engine
              </a>
              {t("projects.slipperyHands.paragraphs.lambda.after")}
            </p>

            <p>{t("projects.slipperyHands.paragraphs.gameplay")}</p>
          </div>
        }
      />
    </section>
  );
}
