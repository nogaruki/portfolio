import { motion } from "motion/react";
import { valueProposition } from "../data/content";
import { MapPin } from "lucide-react";

export function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 text-[#D03A27]">
            <MapPin size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 tracking-tight">
            {valueProposition.title}
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
            {valueProposition.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
