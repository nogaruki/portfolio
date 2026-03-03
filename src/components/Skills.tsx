import { motion } from "motion/react";
import { skills } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <SectionHeading
        title="Tech Stack"
        subtitle="Core technologies and practices I use in production."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#F9F9F8] rounded-xl text-[#D03A27]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A]">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#F9F9F8] text-[#4A4A4A] text-sm font-medium rounded-lg border border-[#E5E5E5]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
