import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react"; 
import logo from "../assets/logo.png";
import gitlogo from "../assets/git-logo.png";
import fbImg from "../assets/fb.png";
import xImg from "../assets/x.png";
import linkedImg from "../assets/linked.png";

// toastify container and css
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ------------------ Mobile Menu bar------------------ */
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="btn btn-ghost btn-square"
      >
        {/* icon */}
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M4 7h16v2H4zM4 11h16v2H4zM4 15h16v2H4z" />
        </svg>
      </button>

      {/* dropdown panel */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-base-100 shadow-lg border border-base-200 overflow-hidden z-50"
          onClick={() => setOpen(false)}
        >
          <NavLink to="/" className="block px-4 py-3 hover:bg-base-200">
            Home
          </NavLink>
          <NavLink to="/apps" className="block px-4 py-3 hover:bg-base-200">
            Apps
          </NavLink>
          <NavLink to="/installation" className="block px-4 py-3 hover:bg-base-200">
            Installation
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default function RootLayout() {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col bg-base-100">
      {/* ------------------ Header ------------------ */}
      <header className="bg-base-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3 relative">
          {/* Logo + Name */}
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition shrink-0"
          >
            <img src={logo} alt="Logo" className="w-9 h-9 md:w-10 md:h-10" />
            <span className="font-bold text-primary text-lg md:text-xl tracking-tight">
              HERO<span className="text-primary">.IO</span>
            </span>
          </NavLink>

          {/* Nav items (center on laptop) */}
          <nav className="mx-2 flex-1 hidden md:flex justify-center gap-6 text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }
            >
              Installation
            </NavLink>
          </nav>

          {/* Right side: Contribute */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://github.com/towhiduzzaman-plabon"
              target="_blank"
              rel="noreferrer"
              className="btn btn-xs md:btn-sm text-white gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #6D4CFF 0%, #8A56FF 48%, #A95FFF 75%, #B96EFF 100%)",
              }}
            >
              <img src={gitlogo} alt="GitHub" className="w-4 h-4" />
              <span className="hidden sm:inline">Contribute</span>
            </a>

            {/* Mobile menu button (md:hidden) */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ------------------ Main Content ------------------ */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Toast container — top-right*/}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        hideProgressBar={false}
        theme="light"
        containerStyle={{ top: 72, right: 16 }}
      />

      {/* ------------------ Footer ------------------ */}
      <footer className="mt-10 bg-[#031E2B] text-white">
        <div className="container mx-auto px-4 py-5">
          {/* top row */}
          <div className="flex items-center justify-between">
            {/* left: logo + text */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="HERO.IO" className="w-7 h-7" />
              <span className="text-sm font-semibold tracking-wide">HERO.IO</span>
            </div>

            {/* right: Social Links */}
            <div className="text-right">
              <p className="text-sm mb-3 opacity-90">Social Links</p>
              <div className="flex items-center gap-4 justify-end">
                {/* X */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 rounded-full grid place-items-center bg-white"
                  aria-label="X"
                >
                  <img src={xImg} alt="X" className="w-4 h-4" />
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 rounded-full grid place-items-center bg-white"
                  aria-label="LinkedIn"
                >
                  <img src={linkedImg} alt="LinkedIn" className="w-4 h-4" />
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 rounded-full grid place-items-center bg-white"
                  aria-label="Facebook"
                >
                  <img src={fbImg} alt="Facebook" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* thin divider line */}
          <div className="mt-3 border-t border-white/15" />

          {/* centered copyright */}
          <p className="text-center text-[12px] opacity-80 mt-2">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
