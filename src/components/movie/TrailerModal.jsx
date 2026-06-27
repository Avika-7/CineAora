export default function TrailerModal({
  isOpen,
  onClose,
  trailerKey,
}) {
  if (!isOpen || !trailerKey) return null;

  return (
    <div
      className="
      fixed
      inset-0
      backdrop-blur-sm
      flex
      justify-center
      items-center
      z-50
      "
    >
      <div className="relative w-11/12 max-w-4xl ">

        <button
          onClick={onClose}
          className="
          absolute
          -top-10
          right-0
          text-white
          text-3xl
          cursor-pointer
          "
        >
          ✕
        </button>

        <iframe
          className="w-full aspect-video rounded-xl"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer"
          allowFullScreen
        />
      </div>
    </div>
  );
}