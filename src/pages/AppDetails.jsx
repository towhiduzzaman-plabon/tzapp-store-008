import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import appNF from "../assets/App-Error.png";
import data from "../data/apps.json";
import { installApp, isInstalled } from "../utils/storage";
import { resolveAsset } from "../utils/asset";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";



const toShort = (n) =>
  n >= 1_000_000 ? `${Math.round(n / 1_000_000)}M`
  : n >= 1_000   ? `${Math.round(n / 1_000)}K`
  : `${n}`;

// toast body
function InstalledToast({ title }) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex w-7 h-7 rounded-full bg-green-100 text-green-600 items-center justify-center text-lg leading-none">✓</span>
      <div className="text-slate-800">
        <p className="font-semibold text-[15px]">Yahoo ⚡!! {title}</p>
        <p className="text-[13px] opacity-80">Installed Successfully</p>
      </div>
    </div>
  );
}

export default function AppDetails() {
  const { id } = useParams();
  const app = useMemo(() => data.find((a) => a.id === Number(id)), [id]);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setInstalled(isInstalled(id));
  }, [id]);

  // Not Found
  if (!app) {
    return (
      <div className="text-center py-16">
        <img src={appNF} alt="App not found" className="w-44 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">OPPS!! APP NOT FOUND</h2>
        <p className="opacity-70">The app may be removed or the id is wrong.</p>
      </div>
    );
  }

  const imgSrc = resolveAsset(app.image);

  // Chart data (5 → 1)
  const order = ["5 star", "4 star", "3 star", "2 star", "1 star"];
  const chartData = (app.ratings || [])
    .slice()
    .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))
    .map((r) => ({ name: r.name, count: r.count }));

  const handleInstall = () => {
    if (installed) return;
    installApp(app);
    setInstalled(true);

    toast(<InstalledToast title={app.title} />, {
      type: "success",
      icon: false,
      closeButton: true,
      className: "border border-green-200 shadow-lg rounded-lg",
      progressStyle: { background: "#16a34a" },
      position: "top-right",
    });
  };

  return (
    <div className="py-6 space-y-6">
      {/* ======= Top card ======= */}
      <div className="rounded-xl border border-base-200 bg-base-100">
        <div className="p-4 md:p-6 grid md:grid-cols-[140px_1fr] gap-4 md:gap-6 items-start">
          {/* left icon */}
          <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-xl bg-base-200 grid place-items-center overflow-hidden">
            <img src={imgSrc} alt={app.title} className="w-[85%] h-[85%] object-contain" />
          </div>

          {/* right meta */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              {app.title}
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Developed by <span className="text-indigo-600">{app.companyName}</span>
            </p>

            {/* divider under -Developed by */}
            <hr className="border-0 bg-blue-700 h-[1px] bg-[#CBD5E1]" />

            {/* stat strip */}
            <div className="grid sm:grid-cols-3 gap-3">
              {/* Downloads */}
              <div className="rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M12 3a1 1 0 011 1v8.6l2.3-2.3 1.4 1.4L12 16.4 7.3 11.7l1.4-1.4L11 12.6V4a1 1 0 011-1z"></path>
                    <path d="M5 19a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
                  </svg>
                  <span>Downloads</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold leading-tight text-emerald-700">
                  {toShort(app.downloads)}
                </p>
              </div>

              {/* Avg rating */}
              <div className="rounded-md border border-orange-100 bg-orange-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
                  </svg>
                  <span>Average Rating</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold leading-tight text-orange-700">
                  {app.ratingAvg}
                </p>
              </div>

              {/* Total reviews */}
              <div className="rounded-md border border-violet-100 bg-violet-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-violet-600">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M21 6h-2v9H7l-4 4V6a2 2 0 012-2h16a2 2 0 012 2z" />
                  </svg>
                  <span>Total Reviews</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold leading-tight text-violet-700">
                  {toShort(app.reviews)}
                </p>
              </div>
            </div>

            {/* install button */}
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`btn btn-success text-white btn-sm md:btn-md ${installed ? "btn-disabled" : ""}`}
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* divider #1 (Top card ) */}
      <hr className="my-6 border-0 h-[1px] bg-[#CBD5E1]" />

      {/* ======= Ratings chart ======= */}
      <div className="rounded-xl border border-base-200 bg-base-100">
        <div className="p-4 md:p-6">
          <h3 className="font-bold mb-4">Ratings</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                barSize={20}
                margin={{ left: 24, right: 16, top: 8, bottom: 8 }}
              >
                <CartesianGrid horizontal stroke="#e9edf3" />
                <XAxis type="number" tick={{ fontSize: 12, fill: "#6B7280" }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  width={50}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8A2A" radius={[4, 4, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* divider #2 (Ratings card ) */}
      <hr className="my-6 border-0 h-[1px] bg-[#CBD5E1]" />

      {/* ======= Description ======= */}
      <div className="rounded-xl border border-base-200 bg-base-100 p-4 md:p-6">
        <h3 className="font-bold mb-2">Description</h3>
        <div className="prose prose-lg max-w-none">
          <p>{app.description}</p>
          <p>
            For people who struggle with procrastination, the app provides motivational
            streaks and achievements. Combining multiple Pomodoro sessions unlocks
            milestones, giving a sense of accomplishment and helping you focus better.
            For people who struggle with procrastination, the app provides motivational
            streaks and achievements. Combining multiple Pomodoro sessions unlocks
            milestones, giving a sense of accomplishment and helping you focus better.
            For people who struggle with procrastination, the app provides motivational
            streaks and achievements. Combining multiple Pomodoro sessions unlocks
            milestones, giving a sense of accomplishment and helping you focus better.
          </p>
        </div>
      </div>
    </div>
  );
}
