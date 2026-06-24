
function GenreList({ genres }) {
  return (
    <div className="flex gap-2">
      {genres?.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </div>
  );
}

export default GenreList;

