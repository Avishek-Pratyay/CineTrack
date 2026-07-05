export default function SkeletonCard() {
  return (
    <div
      className="ticket-notch relative overflow-hidden rounded-lg border border-cine-surface-2 bg-cine-surface"
      aria-hidden="true"
    >
      <div className="skeleton-shimmer h-56 w-full" />
      <div className="ticket-divider mx-4" />
      <div className="flex flex-col gap-3 p-4">
        <div className="skeleton-shimmer h-5 w-3/4 rounded" />
        <div className="skeleton-shimmer h-3 w-1/2 rounded" />
        <div className="mt-2 flex gap-2">
          <div className="skeleton-shimmer h-9 flex-1 rounded-md" />
          <div className="skeleton-shimmer h-9 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
}
