
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div
      className="
          m-10
          grid
          grid-cols-2 gap-3
          sm:grid-cols-3
          md:grid-cols-4 md:gap-5 
          lg:grid-cols-5 lg:gap-6
          xl:grid-cols-6
          "
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
