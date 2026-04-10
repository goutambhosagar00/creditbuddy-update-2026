import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/creditbuddy-main-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-black";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4   flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              {/* LOGO */}
              <img
                src={logo}
                alt="CreditBuddy"
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </Link>
          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-md font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "For Students", path: "/students" },
              { name: "Ambassadors", path: "/ambassadors" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path)} transition`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 rounded-full text-sm font-medium text-white 
                bg-gradient-to-r from-blue-600 to-purple-700 
                hover:from-blue-500 hover:to-purple-600 transition shadow-sm"
              >
                Get Early Access →
              </motion.button>
            </Link>
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
                      className={`block ${
                        location.pathname === item.path
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <Link to="/contact">
                  <button
                    className="w-full py-2 rounded-full text-white 
                  bg-gradient-to-r from-blue-600 to-purple-700"
                  >
                    Get Early Access →
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 👇 IMPORTANT SPACER */}
      <div className="h-[72px]" />
    </>
  );
}
