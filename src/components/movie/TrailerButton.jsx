export default function TrailerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" border
            border-[#e0aaff]
            text-[#e0aaff]
            rounded-full
            p-3
            m-1
            text-base
            lg:text-lg
            hover:bg-[#e0aaff]
            hover:text-[#10002b]
            transition"
      >
      ▶ Watch Trailer
    </button>
  );
}