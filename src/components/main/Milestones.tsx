import { useState } from "react";

type Milestone = {
  date: string;
  title: string;
  description: string;
};

const MILESTONES: Milestone[] = [
  {
    date: "June 2026",
    title: "Backend Developer at Mazda",
    description:
      "Joined Mazda as a Backend Developer, working on backend systems and web technologies.",
  },
  {
    date: "July 2025",
    title: "Graduate Research Assistant",
    description:
      "Joined the Ocean Acoustics Laboratory at the University of Delaware as a Graduate Research Assistant, working under Dr. Mohsen Badiey.",
  },
  {
    date: "November 2022",
    title: "B.Sc. in Electronics Engineering",
    description:
      "Earned a Bachelor of Science in Electronics Engineering from Pontificia Universidad Javeriana.",
  },
  {
    date: "July 2022",
    title: "Robotics Engineer — Service Desk",
    description:
      "Joined robot.com as a Robotics Engineer on the Service Desk team.",
  },
  {
    date: "February 2022",
    title: "Control Integration Engineer Intern",
    description:
      "Joined robot.com as a Control Integration Engineer Intern, working on robotics control and integration.",
  },
];

const ITEMS_PER_PAGE = 4;

export function Milestones() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MILESTONES.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMilestones = MILESTONES.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="milestones" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-playfair text-5xl font-semibold tracking-tight">
          Milestones
        </h2>

        <div className="mt-10 space-y-6">
          {currentMilestones.map((milestone) => (
            <article
              key={`${milestone.date}-${milestone.title}`}
              className="border-l-2 pl-6"
            >
              <time className="text-sm font-medium text-muted-foreground">
                {milestone.date}
              </time>

              <h3 className="mt-1 text-xl font-semibold">
                {milestone.title}
              </h3>

              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-muted-foreground">
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
