import MainLayout from "../layout/MainLayout";
import StudentsHero from "../sections/students/StudentsHero";
import Borrow from "../sections/students/Borrow";
import Earn from "../sections/students/Earn";
import Learn from "../sections/students/Learn";
import TrustCTA from "../sections/students/TrustCTA";

export default function Students() {
  return (
    <MainLayout>
      <StudentsHero />
      <Borrow />
      <Earn />
      <Learn />
      <TrustCTA />
    </MainLayout>
  );
}
