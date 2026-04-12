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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Students", path: "/students" },
    { name: "Ambassadors", path: "/ambassadors" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo}
              alt="CreditBuddy"
              className="h-10 w-auto drop-shadow-sm transition-shadow duration-300 group-hover:drop-shadow-md"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path} className="relative group">
                  <span
                    className={`transition duration-200 ${
                      active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 group-hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Animated underline with premium gradient */}
                  <span
                    className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600"
              >
                Get Early Access
              </motion.button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-3xl font-light text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100/50 active:bg-gray-200/50"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-xl"
            >
              <div className="px-6 py-6 space-y-5">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA in mobile */}
                <div className="pt-4">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    <button className="w-full py-3 rounded-full text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600">
                      Get Early Access
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SPACER */}
      <div className="h-[80px]" />
    </>
  );
}
