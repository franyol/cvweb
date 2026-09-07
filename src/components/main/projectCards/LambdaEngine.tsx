import { useTranslation } from "react-i18next";

import fedeancoImage from "@/assets/images/BulletHeaven.png";
import { ProjectCard } from "@/components/ProjectCard";

import {
  FaCode,
  FaCubes,
  FaGamepad,
  FaBook,
} from "react-icons/fa";

export default function LambdaEngine() {
  const { t } = useTranslation("home");

  return (
    <section id="lambda-engine">
      <ProjectCard
        title={t("projects.lambdaEngine.title")}
        description={t("projects.lambdaEngine.description")}
        image={fedeancoImage}
        imageAlt={t("projects.lambdaEngine.imageAlt")}
        imagePosition="left"
        content={
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2">
                <FaCode />
                C++
              </span>

              <span className="flex items-center gap-2">
                <FaCubes />
                SDL2
              </span>

              <span className="flex items-center gap-2">
                <FaGamepad />
                {t("projects.lambdaEngine.technologies.gameDevelopment")}
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/franyol/Lambda_Engine"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                GitHub
              </a>
            </div>

            <p>{t("projects.lambdaEngine.paragraphs.interest")}</p>

            <p>{t("projects.lambdaEngine.paragraphs.engine")}</p>

            <p>{t("projects.lambdaEngine.paragraphs.sdl")}</p>

            <p className="flex items-center justify-center gap-2">
              <FaBook />

              <a
                href="https://elhacker.info/manuales/Lenguajes%20de%20Programacion/C++/SDL.Game.Development.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                SDL Game Development
              </a>
            </p>
          </div>
        }
      />
    </section>
  );
}
