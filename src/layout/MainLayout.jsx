import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-1 bg-slate-50">{children}</main>
      <Footer /> {/* 👈 ADD HERE */}
    </>
  );
}
