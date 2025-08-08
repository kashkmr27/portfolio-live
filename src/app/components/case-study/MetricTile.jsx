"use client";
import { motion } from 'framer-motion';

export default function MetricTile({ value, label, icon, className = '', color = 'violet' }) {
  const colorClasses = {
    violet: 'text-violet-200 border-violet-500/30 bg-violet-500/15',
    green: 'text-green-200 border-green-500/30 bg-green-500/15',
    blue: 'text-blue-200 border-blue-500/30 bg-blue-500/15'
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border p-4 ${colorClasses[color]} ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon && <div aria-hidden className="text-current opacity-80">{icon}</div>}
        <div>
          <div className="text-2xl md:text-3xl font-bold">{value}</div>
          <div className="text-white/70 text-sm">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}
