import { FaStar } from "react-icons/fa";
export default function RatingStars({ value=0 }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({length:5}).map((_,i)=>(
        <FaStar key={i} className={i<rounded ? "text-warning" : "text-base-300"} />
      ))}
      <span className="text-sm opacity-70">{value.toFixed(1)}</span>
    </div>
  );
}
