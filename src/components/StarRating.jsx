import { Star } from "lucide-react";

export default function StarRating({ value = 0, onChange, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= value;
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={filled}
            aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
            onClick={() => onChange(n === value ? 0 : n)}
            className="p-0.5 text-cine-gold/90 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-cine-gold"
          >
            <Star
              size={size}
              fill={filled ? "currentColor" : "none"}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}
