import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      inset-x-0
      z-50
      bg-black/20
      backdrop-blur-lg
      border-b
      border-[#e0aaff]/20
      text-white
      "
    >
      <div
        className="
        max-w-full
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        
        "
      >
        <Link
          to="/"
          className="
          font-myfont
          text-4xl
          text-[#e0aaff]
          transition
          "
        >
          CineAora
        </Link>

        <div className="flex gap-8">
          <Link
            to="/"
            className="
            font-medium
            hover:text-[#ffcc00]
            transition
            "
          >
            Home
          </Link>

          <Link
            to="/watchlist"
            className="
            font-medium
            hover:text-[#ffcc00]
            transition
            "
          >
            Watchlist
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
