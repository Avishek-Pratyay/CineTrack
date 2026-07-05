// Hardcoded seed data. Used only the first time the app runs
// (i.e. when localStorage has no "cinetrack:movies" key yet).
const initialMovies = [
  {
    id: "seed-1",
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    watched: true,
    rating: 5,
  },
  {
    id: "seed-2",
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    watched: true,
    rating: 5,
  },
  {
    id: "seed-3",
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    year: 2024,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    watched: false,
    rating: 0,
  },
  {
    id: "seed-4",
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    watched: false,
    rating: 0,
  },
  {
    id: "seed-5",
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    watched: true,
    rating: 4,
  },
  {
    id: "seed-6",
    title: "Whiplash",
    genre: "Drama",
    year: 2014,
    posterUrl:
      "https://image.tmdb.org/t/p/w342/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    watched: false,
    rating: 0,
  },
];

export default initialMovies;
