import heroImage from "@/assets/images/Hero.webp";
import heroImageMobile from "@/assets/images/Hero_Mobile.webp";
import { AboutMe } from "@/components/main/AboutMe";
import { Projects } from "@/components/main/Projects";
import Kiwibot from "@/components/main/projectCards/Kiwibot";
import Mars from "@/components/main/projectCards/MARS";
import SlipperyHands from "@/components/main/projectCards/SlipperyHands";
import LambdaEngine from "@/components/main/projectCards/LambdaEngine";
import { Contact } from "@/components/main/Contact";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Navigation, SidebarNavigation } from "@/components/sidebar/SidebarNavigation";
import { Milestones } from "@/components/main/Milestones";

const Home = () => {
  return (
    <SidebarProvider>
      <SideBar navigation={portfolioNavigation} />

      <main>
        <SidebarTrigger className="fixed top-20 z-50 w-12 h-12" />
        <Content />
      </main>
    </SidebarProvider>
  );
};

export const portfolioNavigation: Navigation = {
  items: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
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
      label: "Milestones",
      href: "#milestones",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};

type SideBarProps = {
  navigation: Navigation;
};

const SideBar = ({ navigation }: SideBarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="px-6 pt-10 pb-5">
        <span className="text-lg font-semibold">
          Navigation
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
}

export default Home;
