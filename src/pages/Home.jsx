import { useState } from "react";

import Hero from "../components/hero/Hero";
import SearchBar from "../components/search/SearchBar";
import MovieGrid from "../components/movie/MovieGrid";

import useTrendingMovies from "../hooks/useTrendingMovies";
import useDebounce from "../hooks/useDebounce";
import useSearchMovies from "../hooks/useSearchMovies";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { trendingMovies } = useTrendingMovies();
  const { movies, loading } = useSearchMovies(
    debouncedSearchTerm,
    trendingMovies,
  );

  return (
    <>
      <main
        className="
        bg-linear-to-br
        from-[#10002b]
        to-[#3c096c]
        text-white
        "
      >
        <Hero movies={trendingMovies.slice(0, 7)} />
      </main>

      <section
        className="
        min-h-screen
        bg-linear-to-t
        from-[#3c096c]
        via-[#10002b]
        to-[#10002b]
        "
      >
        <div className="max-w-10/12 mx-auto px-6 py-10">
          <h1
            className="
            text-5xl
            font-bold
            text-[#e0aaff]
            mb-2
            "
          >
            {debouncedSearchTerm
              ? `Results for "${debouncedSearchTerm}"`
              : "Trending Movies"}
          </h1>

          <p className="text-gray-300 mb-8">
            Search and explore your favorite films.
          </p>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {loading && <p className="text-[#e0aaff] mt-4">Searching...</p>}
        </div>
        <MovieGrid movies={trendingMovies} />
      </section>
    </>
  );
}

// MY THEME
// Backgrounds  → Violet
// Highlights   → Lavender
// Important CTA→ Gold
// Text         → White

// COLOUR PALETTE
// Deep Violet      #10002b
// Royal Violet     #3c096c
// Lavender Accent  #e0aaff
// Gold Accent      #ffcc00
// CTA Gold         #f9a825
// Dark Purple      #1a0033
// White            #ffffff
