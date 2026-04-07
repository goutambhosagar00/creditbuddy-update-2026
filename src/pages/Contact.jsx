import MainLayout from "../layout/MainLayout";
import ContactHero from "../sections/contact/ContactHero";
import ContactOptions from "../sections/contact/ContactOptions";
import ContactForm from "../sections/contact/ContactForm";

export default function Contact() {
  return (
    <MainLayout>
      <ContactHero />
      <ContactOptions />
      <ContactForm /> {/* 🔥 FINAL */}
    </MainLayout>
  );
}
