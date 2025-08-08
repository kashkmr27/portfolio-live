"use client";
import { motion } from 'framer-motion';

export default function Callout({ children, className = '', variant = 'default' }) {
  const variantClasses = {
    default: 'bg-white/[0.03] border-white/10',
    testimonial: 'bg-violet-500/10 border-violet-500/20',
    warning: 'bg-amber-500/10 border-amber-500/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className={`rounded-2xl border p-6 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
