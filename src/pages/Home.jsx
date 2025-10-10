import hero from "../assets/hero.png";
import playstore from "../assets/playstore.png";
import applestore from "../assets/applestore.png";

import data from "../data/apps.json";
import AppCard from "../components/AppCard";

export default function Home() {
  const topEight = data.slice(0, 8);

  return (
    <div className="space-y-0">
      {/* ========== Banner ========== */}
      <section className="container mx-auto px-4">
        <div className="text-center pt-10 md:pt-14">
          {/* Heading */}
<h1 className="leading-[1.1]">
  
  <span className="block text-[36px] md:text-[48px] font-bold text-slate-800">
    We Build
  </span>

  <span className="block text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight">
    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
      Productive
    </span>{" "}
    <span className="text-slate-900">Apps</span>
  </span>
</h1>

          <p className="mt-3 md:mt-4 opacity-80 max-w-2xl mx-auto">
            Our AI-enabled, multi-platform apps make everyday life simpler, smarter & more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="mt-5 flex gap-3 justify-center">
            <a
              className="btn btn-outline btn-primary gap-2"
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={playstore} alt="" className="w-5 h-5" />
              Play Store
            </a>
            <a
              className="btn btn-outline btn-primary gap-2"
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={applestore} alt="" className="w-5 h-5" />
              App Store
            </a>
          </div>
        </div>

        {/* phone mock centered */}
        <div className="flex justify-center mt-8 md:mt-10">
          <img src={hero} alt="Banner" className="max-w-sm w-full" />
        </div>
      </section>

      {/* ========== Trusted band ========== */}
      <section className="-mt-px">
        <div
          className="text-primary-content py-10 md:py-12"
          style={{
            background:
              "linear-gradient(135deg, #6D4CFF 0%, #8A56FF 48%, #A95FFF 75%, #B96EFF 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xl md:text-2xl text-white font-bold mb-8">
              Trusted By Millions, Built For You
            </h3>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* stat 1 */}
              <div className="text-center text-white">
                <p className="text-xs opacity-100">Total Downloads</p>
                <p className="text-4xl md:text-5xl font-bold mt-1">29.6M</p>
                <p className="text-xs opacity-90 mt-1">21% More Than Last Month</p>
              </div>
              {/* stat 2 */}
              <div className="text-center text-white">
                <p className="text-xs opacity-100">Total Reviews</p>
                <p className="text-4xl md:text-5xl font-bold mt-1">906K</p>
                <p className="text-xs opacity-90 mt-1">46% More Than Last Month</p>
              </div>
              {/* stat 3 */}
              <div className="text-center text-white">
                <p className="text-xs opacity-100">Active Apps</p>
                <p className="text-4xl md:text-5xl font-bold mt-1">132+</p>
                <p className="text-xs opacity-90 mt-1">31 More Will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Trending Apps ========== */}
      <section className="container mx-auto px-4 py-12 md:py-14">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-bold text-slate-800">
            Trending Apps
          </h2>
          <p className="mt-1 text-xs md:text-sm text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topEight.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="/apps"
            className="btn btn-xs md:btn-sm normal-case border-0 text-white hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #6D4CFF 0%, #8A56FF 48%, #A95FFF 75%, #B96EFF 100%)",
            }}
          >
            Show All Apps
          </a>
        </div>
      </section>
    </div>
  );
}
