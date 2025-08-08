"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaGroup({ primary, secondary, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
    >
      <Link href={primary.href} className="btn btn-primary btn-lg" aria-label={primary.ariaLabel || primary.label}>
        {primary.label}
      </Link>
      {secondary && (
        <Link
          href={secondary.href}
          className="btn btn-secondary btn-lg"
          aria-label={secondary.ariaLabel || secondary.label}
        >
          {secondary.label}
        </Link>
      )}
    </motion.div>
  );
}
