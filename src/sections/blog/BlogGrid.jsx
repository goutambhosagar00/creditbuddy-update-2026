import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Earn", "Learn", "Credit", "Student Life"];

const posts = [
  {
    title: "Student survival guide",
    category: "Student Life",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Earn money as student",
    category: "Earn",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "What is APR?",
    category: "Learn",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
  {
    title: "Build credit score",
    category: "Credit",
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
  },
];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filteredPosts =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 
                hover:shadow-md hover:-translate-y-[3px] transition-all duration-300"
              >
                <motion.img
                  src={post.img}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[160px] object-cover"
                />

                <div className="p-4">
                  <p className="text-xs text-blue-600 mb-1">{post.category}</p>

                  <h3 className="text-sm font-semibold">{post.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
