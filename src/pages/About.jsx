import MainLayout from "../layout/MainLayout";
import AboutHero from "../sections/about/AboutHero";
import Story from "../sections/about/Story";
import Mission from "../sections/about/Mission";
import Values from "../sections/about/Values";
import Team from "../sections/about/Team";
import Advisors from "../sections/about/Advisors";
import WhyCTA from "../sections/about/WhyCTA";
export default function About() {
  return (
    <MainLayout>
      <AboutHero />
      <Story />
      <Mission />
      <Values />
      <Team /> {/* 👈 ADD */}
      <Advisors />
      <WhyCTA />
    </MainLayout>
  );
}
