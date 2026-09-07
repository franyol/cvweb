import { useState } from "react";
import { useTranslation } from "react-i18next";

type Milestone = {
  date: string;
  title: string;
  description: string;
};

const MILESTONES: Milestone[] = [
  {
    date: "June 2026",
    title: "milestones.items.mazda.title",
    description: "milestones.items.mazda.description",
  },
  {
    date: "July 2025",
    title: "milestones.items.research.title",
    description: "milestones.items.research.description",
  },
  {
    date: "November 2022",
    title: "milestones.items.degree.title",
    description: "milestones.items.degree.description",
  },
  {
    date: "July 2022",
    title: "milestones.items.robotics.title",
    description: "milestones.items.robotics.description",
  },
  {
    date: "February 2022",
    title: "milestones.items.internship.title",
    description: "milestones.items.internship.description",
  },
];

const ITEMS_PER_PAGE = 4;

export function Milestones() {
  const { t } = useTranslation("home");
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
          {t("milestones.title")}
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
                {t(milestone.title)}
              </h3>

              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                {t(milestone.description)}
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
              {t("milestones.previous")}
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
              {t("milestones.next")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
