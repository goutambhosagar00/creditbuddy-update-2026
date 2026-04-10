import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { posts } from "../../data/blogPosts";

const categories = ["All", "Earn", "Learn", "Credit", "Student Life"];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filteredPosts =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* FILTER */}
        {/* <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm ${
                active === cat
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200 text-gray-600"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div> */}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl overflow-hidden border hover:shadow-lg flex flex-col"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-blue-600">{post.category}</p>

                  <h3 className="font-semibold">{post.title}</h3>

                  <p className="text-xs text-gray-400 mb-3">
                    By {post.author} · {post.read} · {post.date}
                  </p>

                  {/* ✅ SLUG BASED LINK */}
                  <div className="mt-auto">
                    <Link to={`/blog/${post.slug}`}>
                      <button className="text-sm hover:underline">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
