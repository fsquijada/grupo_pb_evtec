import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative px-5 py-24 sm:px-8 lg:px-12 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.section>
  );
}
