import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!movies?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % movies.length)
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies?.length) return null;

  const movie = movies[currentIndex];

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/placeholder.jpg";

  return (
    <section
      className="
      relative
      h-[75vh]
      overflow-hidden    
      "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={movie.id}
          src={imageUrl}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div
        className="
        absolute
        inset-0
        bg-linear-to-t
        from-black
        via-black/70
        to-transparent
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-linear-to-t
        from-[#10002b]
        via-transparent
        to-transparent
        "
      />

      <div
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        justify-center
        px-8
        md:px-16
        max-w-3xl
        "
      >
        <p
          className="
          uppercase
          tracking-widest
          text-[#ffcc00]
          font-semibold
          mb-2
          "
        >
          Trending Now
        </p>

        <h1
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-[#e0aaff]
          mb-4
          "
        >
          {movie.title}
        </h1>

        <p
          className="
          text-gray-200
          line-clamp-4
          mb-6
          "
        >
          {movie.overview}
        </p>

        <div className="flex gap-4">
          <button
            className="
            bg-[#f9a825]
            text-[#2a003f]
            px-6
            py-3
            rounded-full
            font-bold
            hover:scale-105
            transition
            "
          >
            Watch Now
          </button>

          <button
            className="
            border
            border-[#e0aaff]
            text-[#e0aaff]
            px-6
            py-3
            rounded-full
            hover:bg-[#e0aaff]
            hover:text-[#10002b]
            transition
            "
          >
            More Info
          </button>
        </div>
      </div>

      <div
        className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        z-20
        "
      >
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-3
              w-3
              cursor-pointer
              rounded-full
              transition-all
              ${
                currentIndex === index
                  ? "bg-[#ffcc00] scale-125"
                  : "bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
