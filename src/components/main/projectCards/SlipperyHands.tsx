import fedeancoImage from "@/assets/images/SlipperyHands.png";
import { ProjectCard } from "@/components/ProjectCard";

import {
  FaJs,
  FaGamepad,
} from "react-icons/fa";

export default function SlipperyHands() {
  return (
    <section id="slippery-hands">
      <ProjectCard
        title="Slippery Hands"
        description="A browser game built from scratch in vanilla JavaScript as an experiment in low-level game development and software architecture."
        image={fedeancoImage}
        imageAlt="Slippery Hands browser game"
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
                Game Development
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
                Play the Game
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Move: W A S D · Jump: K · Shoot: H
            </p>

            <p>
              I built this project as an experiment in{" "}
              <strong>raw JavaScript game development</strong>, after primarily
              working with TypeScript. The goal was to explore a simpler,
              lower-abstraction workflow for browser games.
            </p>

            <p>
              The project was developed over two months between jobs while
              preparing for an internship at{" "}
              <a
                href="https://www.eecis.udel.edu/~badiey/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                the Laboratory of Ocean Acoustics & Engineering
              </a>
              .
            </p>

            <p>
              Its structure was influenced by my C++ work on{" "}
              <a
                href="#LambdaEngine"
                className="underline underline-offset-4 hover:opacity-70"
              >
                Lambda Engine
              </a>
              , with an emphasis on understanding the underlying systems rather
              than relying on a game engine or framework.
            </p>

            <p>
              The game includes basic character movement, collision detection,
              hitboxes, and early animation systems. The original concept
              centered around a hitman whose weapon would bounce out of his
              hands after every shot.
            </p>
          </div>
        }
      />
    </section>
  );
}
