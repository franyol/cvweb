import { useTranslation } from "react-i18next";

import heroImage from "@/assets/images/Hero.webp";
import heroImageMobile from "@/assets/images/Hero_Mobile.webp";

import { AboutMe } from "@/components/main/AboutMe";
import { Projects } from "@/components/main/Projects";
import Kiwibot from "@/components/main/projectCards/Kiwibot";
import Mars from "@/components/main/projectCards/MARS";
import SlipperyHands from "@/components/main/projectCards/SlipperyHands";
import LambdaEngine from "@/components/main/projectCards/LambdaEngine";
import { Milestones } from "@/components/main/Milestones";
import { Contact } from "@/components/main/Contact";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Navigation,
  SidebarNavigation,
} from "@/components/sidebar/SidebarNavigation";

const Home = () => {
  const { t } = useTranslation("home");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francisco Valbuena",
    url: "https://franyol.com",
    jobTitle: "Backend Developer",
    description:
      "Backend Developer specializing in TypeScript, Node.js, AWS, APIs, and serverless applications.",
    sameAs: [
      "https://github.com/franyol",
      "https://www.linkedin.com/in/francisco-valbuena-ortega-90a56922b",
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "REST APIs",
      "Serverless Architecture",
      "Docker",
      "GitHub Actions",
    ],
  };

  const portfolioNavigation: Navigation = {
    items: [
      {
        label: t("navigation.about"),
        href: "#about",
      },
      {
        label: t("navigation.projects"),
        href: "#projects",
        children: [
          {
            label: "Kiwibot",
            href: "#kiwibot",
          },
          {
            label: "MARS",
            href: "#mars",
          },
          {
            label: "Slippery Hands",
            href: "#slippery-hands",
          },
          {
            label: "Lambda Engine",
            href: "#lambda-engine",
          },
        ],
      },
      {
        label: t("navigation.milestones"),
        href: "#milestones",
      },
      {
        label: t("navigation.contact"),
        href: "#contact",
      },
    ],
  };

  return (
    <SidebarProvider>
      <SideBar navigation={portfolioNavigation} />

      <main className="w-full">
        <SidebarTrigger className="fixed top-20 z-50 h-12 w-12" />
        <Content />
      </main>
    </SidebarProvider>
  );
};

type SideBarProps = {
  navigation: Navigation;
};

const SideBar = ({ navigation }: SideBarProps) => {
  const { t } = useTranslation("home");

  return (
    <Sidebar>
      <SidebarHeader className="px-6 pt-10 pb-5">
        <span className="text-lg font-semibold">
          {t("navigation.title")}
        </span>
      </SidebarHeader>

      <SidebarContent className="pl-3">
        <SidebarNavigation navigation={navigation} />
      </SidebarContent>

      <SidebarFooter className="p-4">
        {/* Footer content */}
      </SidebarFooter>
    </Sidebar>
  );
};

const Content = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={heroImageMobile}
        />
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: "100%",
          }}
        />
      </picture>

      <br />

      <AboutMe />

      <br />

      <section className="bg-muted pb-20">
        <Projects />
        <Kiwibot />
        <Mars />
        <SlipperyHands />
        <LambdaEngine />
      </section>

      <Milestones />
      <Contact />
    </>
  );
};

export default Home;
