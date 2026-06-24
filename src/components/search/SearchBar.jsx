function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="
      w-full
      p-4
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      placeholder:text-gray-300
      text-white
      focus:outline-none
      focus:border-[#e0aaff]
      transition
      "
    />
  );
}

export default SearchBar;
