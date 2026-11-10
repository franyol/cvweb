
import { useTranslation } from "react-i18next";
import { Package } from "@/components/services/Package";

import gatewayPackage from "@/assets/images/services/api_gateway.webp";
import lightsail from "@/assets/images/services/lightsail.webp";
import workflow from "@/assets/images/services/workflow.webp";
import migration from "@/assets/images/services/migration.webp";
import costmanagement from "@/assets/images/services/costmanagement.webp";
import governance from "@/assets/images/services/governance.webp";
import security from "@/assets/images/services/security.webp";

interface PackagesSectionProps {
  email?: string;
}

export function PackagesSection({
  email = "f.valbuenao64@gmail.com",
}: PackagesSectionProps) {
  const { t } = useTranslation("services");

  const categories = [
    {
      id: "development",
      title: t("packages.categories.development"),
      description: t("packages.categories.developmentDescription"),
      packages: [
        {
          id: "serverlessApi",
          image: gatewayPackage,
        },
        {
          id: "lightsail",
          image: lightsail,
        },
        {
          id: "workflowAutomation",
          image: workflow,
        },
      ],
    },
    {
      id: "migration",
      title: t("packages.categories.migration"),
      description: t("packages.categories.migrationDescription"),
      packages: [
        {
          id: "vmMigration",
          image: migration,
        },
        {
          id: "costAudit",
          image: costmanagement,
        },
      ],
    },
    {
      id: "infrastructure",
      title: t("packages.categories.infrastructure"),
      description: t("packages.categories.infrastructureDescription"),
      packages: [
        {
          id: "governanceAudit",
          image: governance,
        },
        {
          id: "securityAudit",
          image: security,
        },
      ],
    },
  ];

  return (
    <section id="packages" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t("packages.eyebrow")}
          </p>

          <h2 className="font-playfair text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("packages.title")}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("packages.description")}
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="mb-8 border-b border-border pb-5">
                <h3 className="font-playfair text-2xl font-semibold sm:text-3xl">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-2xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.packages.map((service) => (
                  <Package
                    key={service.id}
                    title={t(`packages.${service.id}.title`)}
                    description={t(`packages.${service.id}.description`)}
                    image={service.image}
                    imageAlt={t(`packages.${service.id}.imageAlt`)}
                    features={
                      t(`packages.${service.id}.features`, {
                        returnObjects: true,
                      }) as string[]
                    }
                    email={email}
                    buttonLabel={t("packages.contactButton")}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
