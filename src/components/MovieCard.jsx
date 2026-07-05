import { Eye, EyeOff, Trash2, Film } from "lucide-react";
import StarRating from "./StarRating";

export default function MovieCard({ movie, onToggleWatched, onDelete, onRate }) {
  const { id, title, genre, year, posterUrl, watched, rating = 0 } = movie;

  return (
    <article
      className="ticket-notch group relative flex flex-col overflow-hidden rounded-lg border border-cine-surface-2 bg-cine-surface shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
      aria-label={`${title}, ${year}, ${genre}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={posterUrl}
          alt={`${title} poster`}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/342x513/1b1b1f/e3b23c?text=${encodeURIComponent(
              title
            )}`;
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cine-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Film size={28} className="text-cine-gold/90 drop-shadow" strokeWidth={1.5} />
        </div>
        <span
          className={`absolute right-2 top-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
            watched
              ? "bg-cine-teal text-cine-bg"
              : "bg-cine-bg/80 text-cine-cream/80"
          }`}
        >
          {watched ? <Eye size={11} /> : <EyeOff size={11} />}
          {watched ? "Watched" : "Unwatched"}
        </span>
      </div>

      <div className="ticket-divider mx-4" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-2xl leading-none tracking-wide text-cine-cream">
            {title}
          </h3>
          <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-cine-gold">
            {genre} &middot; {year}
          </p>
        </div>

        <StarRating value={rating} onChange={(n) => onRate(id, n)} />

        <div className="mt-auto flex gap-2 pt-2">
          <button
            onClick={() => onToggleWatched(id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
              watched
                ? "border border-cine-surface-2 text-cine-cream/70 hover:text-cine-cream"
                : "bg-cine-gold text-cine-bg hover:brightness-110"
            }`}
          >
            {watched ? <EyeOff size={15} /> : <Eye size={15} />}
            {watched ? "Mark Unwatched" : "Mark as Watched"}
          </button>
          <button
            onClick={() => onDelete(id)}
            aria-label={`Delete ${title}`}
            className="flex items-center justify-center rounded-md border border-cine-crimson/50 px-3 py-2 text-cine-crimson transition-colors hover:bg-cine-crimson hover:text-cine-cream"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
