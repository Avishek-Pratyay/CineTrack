import { Check, Trash2, Film, X } from "lucide-react";

const ICONS = {
  add: Check,
  delete: Trash2,
  watched: Film,
  default: Check,
};

export default function ToastStack({ toasts, onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:right-4 sm:left-auto">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.tone] || ICONS.default;
        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex w-full max-w-xs items-center gap-2.5 rounded-md border border-cine-surface-2 bg-cine-surface px-4 py-3 shadow-lg shadow-black/30 animate-[toast-in_0.2s_ease-out]"
          >
            <Icon size={16} className="shrink-0 text-cine-gold" />
            <p className="flex-1 text-sm text-cine-cream">{toast.message}</p>
            <button
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss notification"
              className="text-cine-cream/40 hover:text-cine-cream"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
