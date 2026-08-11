import React from "react";

import heroImage from "@/assets/images/Hero.webp";
import heroImageMobile from "@/assets/images/Hero_Mobile.webp";
import { AboutMe } from "../components/main/AboutMe";
import { Projects } from "../components/main/Projects";
import Kiwibot from "../components/main/projectCards/Kiwibot";
import Mars from "../components/main/projectCards/MARS";
import SlipperyHands from "../components/main/projectCards/SlipperyHands";
import LambdaEngine from "../components/main/projectCards/LambdaEngine";
import { Contact } from "../components/main/Contact";

const sectionStyle: React.CSSProperties = {
  padding: "10px 0",
};

const headerStyle: React.CSSProperties = {
  padding: "20px",
  borderRadius: "12px",
};

const CategoryTitle = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <section id={id} style={sectionStyle}>
    <div className="plain" style={headerStyle}>
      <h2 style={{ margin: 0 }}>{children}</h2>
    </div>
  </section>
);

const Home = () => {
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
      <Contact />
    </>
  );
};

export default Home;
