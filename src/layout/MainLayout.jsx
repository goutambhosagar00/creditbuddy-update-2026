import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-17">{children}</main>
      <Footer /> {/* 👈 ADD HERE */}
    </>
  );
}
