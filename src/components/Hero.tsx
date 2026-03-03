import { motion } from "motion/react";
import { personalInfo, summary } from "../data/content";
import { ArrowRight, Download, Briefcase, Code2, Globe2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-6xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-[#D03A27]/10 px-3 py-1 text-xs font-medium text-[#D03A27] ring-1 ring-inset ring-[#D03A27]/20">
              {personalInfo.visa}
            </span>
            <span className="text-sm font-medium text-[#8A8A8A] tracking-wide">
              Based in {personalInfo.location} · {personalInfo.relocation}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-4 tracking-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-[#4A4A4A] font-light mb-6 text-balance">
            {personalInfo.title}
          </h2>

          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8 max-w-2xl font-light">
            {summary}
          </p>

          {/* Recruiter Proof Strip */}
          <div className="bg-white border border-[#E5E5E5] rounded-xl p-5 mb-10 shadow-sm max-w-2xl">
            <ul className="space-y-3 text-sm text-[#4A4A4A] font-medium">
              <li className="flex items-start gap-3">
                <Briefcase
                  size={18}
                  className="text-[#8A8A8A] shrink-0 mt-0.5"
                />
                <span>{personalInfo.history}</span>
              </li>
              <li className="flex items-start gap-3">
                <Code2 size={18} className="text-[#8A8A8A] shrink-0 mt-0.5" />
                <span>
                  Enterprise + product experience · {personalInfo.subtitle}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 size={18} className="text-[#8A8A8A] shrink-0 mt-0.5" />
                <span>{personalInfo.languages.join(" · ")}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-lg font-medium hover:bg-[#D03A27] transition-colors"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] border border-[#E5E5E5] rounded-lg font-medium hover:border-[#1A1A1A] transition-colors shadow-sm"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Column: Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[400px] aspect-4/5 rounded-2xl border border-[#E5E5E5] relative overflow-hidden bg-[#E5E5E5]/30">
            <img
              src="/profile.png"
              alt="Johann Avramov, Full-Stack Engineer"
              width={400}
              height={500}
              fetchPriority="high"
              className="w-full h-full object-cover object-top"
            />
            {/* Decorative subtle framing */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#8A8A8A]/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#8A8A8A]/30 rounded-br-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
