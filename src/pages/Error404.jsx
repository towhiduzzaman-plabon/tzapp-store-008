import { Link } from "react-router-dom";
import ill404 from "../assets/error-404.png";

export default function Error404() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-10">
      {/* Illustration */}
      <img src={ill404} alt="404" className="w-64 md:w-80 mx-auto" />

      {/* Title */}
      <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-800">
        Oops, page not found!
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-sm md:text-base text-slate-500">
        The page you are looking for is not available.
      </p>

      {/* button */}
      <Link
        to="/"
        className="mt-6 normal-case inline-flex items-center justify-center
                   px-6 py-2 rounded-md font-semibold text-white shadow-md
                   hover:brightness-110 active:scale-[.98] transition"
        style={{
          background:
            "linear-gradient(135deg, #6D36F7 0%, #8E4DFF 55%, #C07BFF 100%)",
        }}
      >
        Show All Apps
      </Link>
    </div>
  );
}
