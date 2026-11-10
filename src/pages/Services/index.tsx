import { useTranslation } from "react-i18next";

import heroImage from "@/assets/images/services/services_hero.webp";
import heroImageMobile from "@/assets/images/services/services_hero_mobile.webp";
import Banner from "@/components/Banner";
import { Certifications } from "@/components/services/Certifications";
import { ContactBanner } from "@/components/services/ContactBanner";
import { PackagesSection } from "@/components/services/Packages";


const Services = () => {
  const { t } = useTranslation("services");

  return (
    <>
      <Banner
        desktopImage={heroImage}
        mobileImage={heroImageMobile}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        contentPosition="left"
        alt=""
      />
      <br />
      <Certifications />
      <PackagesSection />
      <ContactBanner />
    </>
  )
}

export default Services;
