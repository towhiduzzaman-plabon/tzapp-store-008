import { useEffect, useMemo, useState } from "react";
import { getInstalled, uninstallApp } from "../utils/storage";
import EmptyState from "../components/EmptyState";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { resolveAsset } from "../utils/asset";

function toShort(n) {
  if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return n?.toString() ?? "0";
}

export default function Installations() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("none");

  const refresh = () => setItems(getInstalled());
  useEffect(() => { refresh(); }, []);

  const handleUninstall = (id, title) => {
    Swal.fire({
      title: "Uninstall?",
      text: `Remove ${title} from your device?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Uninstall",
    }).then((res) => {
      if (res.isConfirmed) {
        uninstallApp(id);
        refresh();
        toast.info(`${title} uninstalled`);
      }
    });
  };

  const list = useMemo(() => {
    if (sort === "sl") return [...items].sort((a, b) => a.size - b.size);
    if (sort === "ls") return [...items].sort((a, b) => b.size - a.size);
    return items;
  }, [items, sort]);

  if (list.length === 0)
    return (
      <EmptyState
        title="No Installed Apps"
        subtitle="Install from the Apps list"
      />
    );

  return (
    <div className="py-8 space-y-6">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Your Installed Apps
        </h1>
        <p className="opacity-70 mt-1 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* top bar: count + sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <p className="font-semibold text-[14px] md:text-[15px] text-slate-700">
          ({list.length}) Apps Found
        </p>

        <div className="flex items-center gap-2">
          <select
            className="select select-bordered select-sm md:select-md w-40"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort by size"
            title="Sort By Size"
          >
            <option value="none">Sort By Size</option>
            <option value="sl">Small–Large</option>
            <option value="ls">Large–Small</option>
          </select>
        </div>
      </div>

      {/* list */}
      <div className="grid gap-4">
        {list.map((app) => {
          const imgSrc = resolveAsset(app.image);
          return (
            <div key={app.id} className="rounded-xl border border-base-200 bg-base-100">
              <div className="px-4 py-3 flex flex-col md:flex-row md:items-center gap-4">
                {/* left: icon + text */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={imgSrc}
                    alt={app.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-xl bg-base-200"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {app.title}
                    </h3>

                    {/* badges row*/}
                    <div className="mt-1 flex items-center gap-3 text-[12px]">
                      <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                          <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293 1.414 1.414L12 16.414 7.293 11.707l1.414-1.414L11 12.586V4a1 1 0 011-1z"></path>
                          <path d="M5 19a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
                        </svg>
                        {toShort(app.downloads)}
                      </span>

                      <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md bg-orange-50 text-orange-600 border border-orange-100">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
                        </svg>
                        {app.ratingAvg}
                      </span>

                      <span className="text-slate-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                {/* right: uninstall */}
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-success btn-sm text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
