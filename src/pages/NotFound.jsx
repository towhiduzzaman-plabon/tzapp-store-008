import { Link } from "react-router-dom";
import ill404 from "../assets/error-404.png";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-10">
      {/* Illustration */}
      <img src={ill404} alt="404" className="w-64 md:w-80 mx-auto" />

      {/* Title */}
      <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-800 tracking-wide">
        OPPS!! APP NOT FOUND
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-sm md:text-base text-slate-500">
        The App you are requesting is not found on our system.&nbsp;
        please try another apps
      </p>

      {/* Back button */}
      <Link to="/" className="btn btn-primary mt-6 normal-case">
       style={{
                            background:
                                "linear-gradient(135deg, #6D4CFF 0%, #8A56FF 48%, #A95FFF 75%, #B96EFF 100%)",
                        }}
        Show All Apps
      </Link>
    </div>
  );
}
