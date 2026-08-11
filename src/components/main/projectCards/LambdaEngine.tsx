import fedeancoImage from "@/assets/images/BulletHeaven.png";
import { ProjectCard } from "@/components/ProjectCard";

import {
  FaCode,
  FaCubes,
  FaGamepad,
  FaBook,
} from "react-icons/fa";

export default function LambdaEngine() {
  return (
    <section id="LambdaEngine">
      <ProjectCard
        title="Lambda Engine"
        description="A custom C++ game engine developed as a long-term exploration of engine architecture, low-level systems, and software design."
        image={fedeancoImage}
        imageAlt="Lambda Engine"
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
                Game Development
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

            <p>
              I became interested in <strong>game development</strong>, but
              found myself particularly drawn to{" "}
              <strong>engine architecture</strong> and{" "}
              <strong>low-level systems</strong>.
            </p>

            <p>
              Instead of using an existing engine such as Unity or Unreal, I
              decided to build my own engine in C++. The project became a
              long-term solo effort focused on understanding system design,
              abstractions, and design patterns.
            </p>

            <p>
              The engine uses SDL2 as its foundation, including{" "}
              <strong>SDL2_image</strong>, <strong>SDL2_mixer</strong>, and{" "}
              <strong>SDL2_ttf</strong>. The work has given me practical
              experience with memory management, performance considerations,
              rendering systems, and the organization of larger C++ projects.
            </p>

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
