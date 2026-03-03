import { motion } from "motion/react";
import { projects } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight, Lock } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-white border-y border-[#E5E5E5]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Selected Projects"
          subtitle="Concrete examples of products and systems I have built."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith("http");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-[#F9F9F8] border border-[#E5E5E5] rounded-2xl p-8 hover:shadow-md hover:border-[#D03A27]/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-[#D03A27] font-medium text-sm">
                    {project.role}
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4 pb-4 border-b border-[#E5E5E5]">
                    {project.context}
                  </p>
                  <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">
                    {project.outcome}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white border border-[#E5E5E5] rounded-md text-xs font-medium text-[#4A4A4A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-[#E5E5E5]">
                  {isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#4A4A4A] hover:text-[#D03A27] transition-colors"
                    >
                      View Project <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#8A8A8A]">
                      <Lock size={14} /> {project.link}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
