import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  if (!movies.length) return null;

  return (
    <section className="my-10">
      <h2
        className="
        text-3xl
        text-[#e0aaff]
        font-bold
        mb-5
        "
      >
        {title}
      </h2>

      <div
        className="
        flex
        gap-5
        overflow-x-auto
        pb-5
        "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
