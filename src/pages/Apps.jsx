import { useEffect, useMemo, useState } from "react";
import data from "../data/apps.json";
import AppCard from "../components/AppCard";
import ill404 from "../assets/App-Error.png";
import BrandLoader from "../components/BrandLoader";

export default function Apps() {
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => setLoading(false), 250);
        return () => clearTimeout(t);
    }, [q]);

    // case-insensitive live search
    const filtered = useMemo(() => {
        const key = q.trim().toLowerCase();
        return key ? data.filter((a) => a.title.toLowerCase().includes(key)) : data;
    }, [q]);

    // ---------- EMPTY STATE: 404 block ----------
    if (!loading && filtered.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-10">
                <img src={ill404} alt="404" className="w-56 md:w-72 mx-auto" />
                <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-800 tracking-wide">
                    OPPS!! APP NOT FOUND
                </h1>
                <p className="mt-2 text-sm md:text-base text-slate-500">
                    The App you are requesting is not found on our system.&nbsp;please try another apps
                </p>

                {/* ALL Apps*/}
                <button
                    onClick={() => setQ("")}
                    className="btn mt-6 normal-case text-white"
                    style={{
                        background:
                            "linear-gradient(135deg, #6D36F7 0%, #8E4DFF 55%, #C07BFF 100%)",
                    }}
                >
                    Show All Apps
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6 py-6">
            {/* Title + subtitle */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">Our All Applications</h1>
                <p className="opacity-70">Explore all apps on the market developed by us.</p>
            </div>

            {/* top bar:Apps Found  +  Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <p className="font-semibold text-[14px] md:text-[15px] text-slate-700">
                    ({filtered.length}) Apps Found
                </p>

                
                <label
                    className="input input-bordered flex items-center gap-2
                     w-full md:w-80 lg:w-96
                     bg-white/70 backdrop-blur-sm
                     border-base-300 shadow-sm rounded-lg
                     focus-within:ring-2 focus-within:ring-primary/30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-70"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
                    <input
                        type="text"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        className="grow placeholder:text-slate-400"
                        placeholder="Search apps…"
                    />
                </label>
            </div>

            {/* list / loading */}
            {loading ? (
                <BrandLoader />
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filtered.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
}
