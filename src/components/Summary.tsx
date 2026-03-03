import { motion } from "motion/react";
import { summary } from "../data/content";

export function Summary() {
  return (
    <section className="py-20 bg-white border-y border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl leading-relaxed text-[#4A4A4A] font-light"
        >
          {summary}
        </motion.p>
      </div>
    </section>
  );
}
