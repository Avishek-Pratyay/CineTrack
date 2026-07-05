import { Clapperboard } from "lucide-react";
import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";

export default function MovieGrid({ movies, isLoading, onToggleWatched, onDelete, onRate }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-cine-surface-2 py-20 text-center">
        <Clapperboard size={32} className="mb-1 text-cine-gold/60" strokeWidth={1.5} />
        <p className="font-display text-3xl tracking-wide text-cine-gold">
          No showings match this reel
        </p>
        <p className="max-w-sm text-sm text-cine-cream/60">
          Try a different search term or filter, or add a new movie to your
          collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDelete={onDelete}
          onRate={onRate}
        />
      ))}
    </div>
  );
}
