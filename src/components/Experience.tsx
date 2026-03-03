import { motion } from "motion/react";
import { experience } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 max-w-4xl mx-auto px-6">
      <SectionHeading
        title="Experience"
        subtitle="A track record of delivering scalable solutions and modernizing critical systems."
      />

      <div className="space-y-16">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line (mobile only) */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-[#E5E5E5] md:hidden" />
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#D03A27] md:hidden" />

            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-4 md:mb-0 md:col-span-1 text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                {job.period}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                  {job.role}
                </h3>
                <h4 className="text-lg text-[#D03A27] font-medium mb-4">
                  {job.company}
                </h4>
                <ul className="space-y-3 text-[#4A4A4A]">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D03A27]/50 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
