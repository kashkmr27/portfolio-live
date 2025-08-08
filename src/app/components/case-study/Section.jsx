"use client";
import { motion } from 'framer-motion';

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={className} aria-labelledby={`${id}-title`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut', staggerChildren: 0.06 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
