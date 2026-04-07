import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 👇 detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-medium"
      : "text-gray-700 hover:text-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <motion.h1
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent flex items-center"
          >
            <span>C</span>

            <span className="text-[0.7em] relative -top-[2px] mx-[1px] text-purple-500">
              ₹
            </span>

            <span>editBuddy</span>

            <span className="relative -top-3 -ml-2 text-sm">🎓</span>
          </motion.h1>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link to="/" className={`${isActive("/")} transition`}>
            Home
          </Link>
          <Link
            to="/how-it-works"
            className={`${isActive("/how-it-works")} transition`}
          >
            How It Works
          </Link>
          <Link
            to="/students"
            className={`${isActive("/students")} transition`}
          >
            For Students
          </Link>
          <Link
            to="/ambassadors"
            className={`${isActive("/ambassadors")} transition`}
          >
            Ambassadors
          </Link>
          <Link to="/blog" className={`${isActive("/blog")} transition`}>
            Blog
          </Link>
          <Link to="/about" className={`${isActive("/about")} transition`}>
            About
          </Link>
          <Link to="/contact" className={`${isActive("/contact")} transition`}>
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-full text-sm font-medium text-white 
            bg-gradient-to-r from-blue-600 to-purple-700 
            hover:from-blue-500 hover:to-purple-600 transition shadow-sm hover:shadow-md"
          >
            Get Early Access →
          </motion.button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-xl text-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 bg-white text-gray-700">
              {[
                { name: "Home", path: "/" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "For Students", path: "/students" },
                { name: "Ambassadors", path: "/ambassadors" },
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full py-2 rounded-full text-white 
                bg-gradient-to-r from-blue-600 to-purple-700"
              >
                Get Early Access →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
