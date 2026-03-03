import { motion } from "motion/react";
import { personalInfo } from "../data/content";
import { ArrowUpRight, Mail, FileText, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
            Ready to Interview
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            I am actively applying for roles in Japan and available for
            interviews.
          </p>
          <div className="w-12 h-1 bg-[#D03A27] mt-6 rounded-full mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F9F9F8] border border-[#E5E5E5] rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Direct Contact */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-6">
                Direct Contact
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#D03A27] transition-colors mb-4"
              >
                <div className="p-3 bg-[#F9F9F8] rounded-lg text-[#4A4A4A] group-hover:text-[#D03A27] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#8A8A8A] uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-[#1A1A1A] font-medium">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#D03A27] transition-colors"
              >
                <div className="p-3 bg-[#F9F9F8] rounded-lg text-[#4A4A4A] group-hover:text-[#D03A27] transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#8A8A8A] uppercase tracking-wider mb-0.5">
                    Resume
                  </p>
                  <p className="text-[#1A1A1A] font-medium">Download PDF</p>
                </div>
              </a>
            </div>

            {/* Professional Links */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-6">
                Professional Profiles
              </h3>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#D03A27] transition-colors mb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F9F9F8] rounded-lg text-[#4A4A4A] group-hover:text-[#D03A27] transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-[#1A1A1A] font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[#8A8A8A] group-hover:text-[#D03A27] transition-colors"
                />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-[#E5E5E5] rounded-xl hover:border-[#D03A27] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F9F9F8] rounded-lg text-[#4A4A4A] group-hover:text-[#D03A27] transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="text-[#1A1A1A] font-medium">GitHub</span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[#8A8A8A] group-hover:text-[#D03A27] transition-colors"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
