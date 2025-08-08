export default function BadgeRow({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/15 text-violet-300 text-xs font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
