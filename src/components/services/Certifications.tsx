import { useTranslation } from "react-i18next";

import ghActionsBadge from "@/assets/images/services/ghActionsCertBage.png";
import awsSolutionsArchitectBadge from "@/assets/images/services/solutionsArchitectBadge.png";

const certifications = [
  {
    id: "aws",
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    issued: "November 2026",
    expires: "November 2029",
    credentialUrl:
      "https://www.credly.com/badges/d447ffb3-0b55-4961-87af-a76b6eb4aff9/linked_in_profile",
    badgeImage: awsSolutionsArchitectBadge,
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    issuer: "Microsoft",
    issued: "September 2026",
    expires: "September 2028",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/FranciscoJavierValbuenaOrtega-7036/2968F135C4904093",
    badgeImage: ghActionsBadge,
  },
];

export function Certifications() {
  const { t } = useTranslation("services");

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="font-playfair text-5xl font-semibold tracking-tight">
            {t("certifications.title")}
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("certifications.description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.id}
              className="flex flex-col gap-6 rounded-2xl border border-border p-6 transition-colors hover:bg-muted/30 sm:flex-row sm:items-center"
            >
              {/* Certification badge */}
              <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 sm:w-40">
                {certification.badgeImage ? (
                  <img
                    src={certification.badgeImage}
                    alt={`${certification.name} badge`}
                    className="h-full w-full rounded-xl object-contain p-3"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {t("certifications.badgePlaceholder")}
                  </span>
                )}
              </div>

              {/* Certification details */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-semibold leading-snug">
                  {certification.name}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {certification.issuer}
                </p>

                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p>
                    {t("certifications.issued")}: {certification.issued}
                  </p>
                  <p>
                    {t("certifications.expires")}: {certification.expires}
                  </p>
                </div>

                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {t("certifications.showCredential")}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

