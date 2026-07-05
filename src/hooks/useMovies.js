import { useEffect, useState, useCallback } from "react";
import initialMovies from "../data/initialMovies";

const STORAGE_KEY = "cinetrack:movies";
const SIMULATED_DELAY_MS = 900;

function loadFromStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialMovies;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return initialMovies;
    return parsed;
  } catch (err) {
    console.error("CineTrack: failed to read localStorage, using seed data.", err);
    return initialMovies;
  }
}

function saveToStorage(movies) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (err) {
    console.error("CineTrack: failed to persist to localStorage.", err);
  }
}

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an async fetch/parse of the initial state so the
  // skeleton loading UI has something real to showcase.
  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(() => {
      if (cancelled) return;
      setMovies(loadFromStorage());
      setIsLoading(false);
    }, SIMULATED_DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // Persist whenever movies change (after the initial load completes).
  useEffect(() => {
    if (isLoading) return;
    saveToStorage(movies);
  }, [movies, isLoading]);

  const addMovie = useCallback((movie) => {
    setMovies((prev) => [
      {
        id: `movie-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        watched: false,
        rating: 0,
        ...movie,
      },
      ...prev,
    ]);
  }, []);

  const toggleWatched = useCallback((id) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }, []);

  const setRating = useCallback((id, rating) => {
    setMovies((prev) => prev.map((m) => (m.id === id ? { ...m, rating } : m)));
  }, []);

  const deleteMovie = useCallback((id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return { movies, isLoading, addMovie, toggleWatched, deleteMovie, setRating };
}
