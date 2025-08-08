"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickySubnav({ items }) {
  const [active, setActive] = useState(items?.[0]?.id || '');

  useEffect(() => {
    const observers = [];
    (items || []).forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: '-60px 0px -60% 0px', threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="sticky top-16 z-30 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <ul className="flex flex-wrap gap-3 py-3 text-sm">
          {(items || []).map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-full border transition-colors ${
                  active === item.id
                    ? 'border-violet-500/40 bg-violet-500/15 text-violet-300'
                    : 'border-white/10 text-white/70 hover:text-white hover:border-white/20'
                }`}
                prefetch
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
