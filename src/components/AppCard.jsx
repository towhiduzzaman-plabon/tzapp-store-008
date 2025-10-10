import { Link } from "react-router-dom";
import { resolveAsset } from "../utils/asset";

function toShort(n) {
  if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return n?.toString() ?? "0";
}

export default function AppCard({ app }) {
  const imgSrc = resolveAsset(app.image);

  return (
    <Link
      to={`/apps/${app.id}`}
      className="card bg-base-100 border border-base-200 hover:shadow-md transition"
    >
      <figure className="p-3">
        <img
          src={imgSrc}
          alt={app.title}
          className="w-full h-44 object-cover rounded-lg bg-base-200"
          loading="lazy"
        />
      </figure>

      <div className="px-4 pb-4">
        <h3 className="font-semibold text-slate-800 leading-snug line-clamp-1">
          {app.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[12px] px-2 py-[3px] rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100">
            {/* download icon */}
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293 1.414 1.414L12 16.414 7.293 11.707l1.414-1.414L11 12.586V4a1 1 0 011-1z"></path>
              <path d="M5 19a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
            </svg>
            {toShort(app.downloads)}
          </span>

          <span className="inline-flex items-center gap-1 text-[12px] px-2 py-[3px] rounded-md bg-orange-50 text-orange-600 border border-orange-100 ml-auto">
            {/* star icon */}
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
            </svg>
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
}
