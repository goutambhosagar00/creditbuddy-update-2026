import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-black py-24 text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          We’ve been broke students too.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4 text-sm md:text-base"
        >
          That’s not a marketing line. That’s why this exists.
        </motion.p>
      </div>
    </section>
  );
}
