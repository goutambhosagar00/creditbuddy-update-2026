import MainLayout from "../layout/MainLayout";
import Hero from "../sections/home/Hero";
import Problems from "../sections/home/Problems";
import Features from "../sections/home/Features";
import Comparison from "../sections/home/Comparison";
import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Problems />
      <Features />
      <Comparison />
      <Testimonials />
      {/* <CTA /> */}
    </MainLayout>
  );
}
