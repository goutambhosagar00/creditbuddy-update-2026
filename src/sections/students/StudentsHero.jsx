import { motion } from "framer-motion";

export default function StudentsHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-16 sm:py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-700/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/20 blur-[120px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
        >
          This one’s <br className="hidden sm:block" />
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            for you.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Not “student-friendly”. Built from scratch, by students, for students.
        </motion.p>
      </div>
    </section>
  );
}
