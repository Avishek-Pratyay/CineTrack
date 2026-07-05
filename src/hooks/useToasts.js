import { useCallback, useState } from "react";

let idCounter = 0;

export default function useToasts() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, tone = "default") => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, tone }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2600);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, dismissToast };
}
