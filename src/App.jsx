import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Students from "./pages/Students";
import Ambassadors from "./pages/Ambassadors";
import Blog from "./pages/Blog";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/students" element={<Students />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/blog" element={<Blog />} />
        {/* Fallback (optional) */}
        <Route
          path="*"
          element={<div className="text-white p-10">Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
