import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Debasish Mallick (Dev)",
    role: "Founder & CEO",
    desc: "A student founder building CreditBuddy to solve real financial challenges students face. Combining technology and insight to create a system where students can borrow, earn, and grow with confidence.",
    image: "/team/dev.jpeg",
    linkedin: "https://www.linkedin.com/in/debasishmallick077",
  },
  {
    name: "Goutam Bhosagar",
    role: "Chief Technology Officer (CTO)",
    desc: "Leads the technology behind CreditBuddy, building scalable and reliable systems designed around real student needs.",
    image: "/team/goutampass.jpg",
    linkedin: "#",
  },
  {
    name: "Ipsit Kumar Thakur",
    role: "Technical Lead",
    desc: "Transforms student problems into practical tech solutions. Focused on building fast and user-friendly features.",
    image: "/team/ipsit.jpg",
    linkedin: "#",
  },
  {
    name: "Ayush Nanda",
    role: "Growth & Operations Lead",
    desc: "Drives growth through data, strategy, and strong campus connections.",
    image: "/team/ayush.jpeg",
    linkedin: "#",
  },
];
export default function Team() {
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => {
    setExpanded((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <section className="bg-gray-50 py-24">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          The people behind <span className="text-blue-600">CreditBuddy</span>.
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => {
          const isExpanded = expanded[i];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 
              shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* TOP */}
              <div className="h-24 bg-gradient-to-r from-blue-100 to-indigo-100 relative flex items-center justify-center">
                <div className="absolute top-12 w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/team/default-avatar.png";
                      }}
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-12 px-6 pb-6 text-left mx-auto max-w-[280px] min-h-[260px] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-xs text-blue-600 font-medium mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>

                  {/* DESCRIPTION */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isExpanded ? "open" : "closed"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`text-sm text-gray-600 leading-[1.7] mb-2 text-justify ${
                        !isExpanded ? "line-clamp-4" : ""
                      }`}
                    >
                      {member.desc}
                    </motion.p>
                  </AnimatePresence>

                  {/* TOGGLE BUTTON */}
                  <button
                    onClick={() => toggle(i)}
                    className="text-xs text-blue-600 font-medium hover:underline mb-3"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                </div>

                {/* LINKEDIN */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-medium text-gray-500 hover:text-blue-600 transition"
                >
                  LinkedIn →
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
