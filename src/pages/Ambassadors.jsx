import MainLayout from "../layout/MainLayout";
import AmbassadorHero from "../sections/ambassadors/AmbassadorHero";
import RoleBenefits from "../sections/ambassadors/RoleBenefits";
import EligibilityFAQ from "../sections/ambassadors/EligibilityFAQ";
import ApplyCTA from "../sections/ambassadors/ApplyCTA";

export default function Ambassadors() {
  return (
    <MainLayout>
      <AmbassadorHero />
      <RoleBenefits />
      <EligibilityFAQ />
      {/* <ApplyCTA /> 🔥 FINAL */}
    </MainLayout>
  );
}
