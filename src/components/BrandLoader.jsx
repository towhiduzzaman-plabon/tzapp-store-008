import logo from "../assets/logo.png";

export default function BrandLoader() {
  return (
    <div className="py-16 flex items-center justify-center">
      <div
        className="flex items-center gap-2 md:gap-3 text-slate-600 font-semibold
                   text-2xl md:text-4xl tracking-[0.35em] select-none"
      >
        <span className="animate-pulse">L</span>
        <img
          src={logo}
          alt="HERO.IO"
          className="w-10 h-10 md:w-12 md:h-12 mx-1 animate-bounce drop-shadow"
        />
        <span className="animate-pulse">OADING</span>
      </div>
    </div>
  );
}
