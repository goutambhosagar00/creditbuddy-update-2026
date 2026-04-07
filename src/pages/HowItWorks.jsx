import MainLayout from "../layout/MainLayout";
import HowHero from "../sections/howitworks/HowHero";
import StepOne from "../sections/howitworks/StepOne";
import StepTwo from "../sections/howitworks/StepTwo";
import StepThree from "../sections/howitworks/StepThree";
import StepFour from "../sections/howitworks/StepFour";
import Security from "../sections/howitworks/Security";
import FAQ from "../sections/howitworks/FAQ";

export default function HowItWorks() {
  return (
    <MainLayout>
      <HowHero />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <Security />
      <FAQ />
    </MainLayout>
  );
}
