import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import gitlogo from "../assets/git-logo.png";

const Header = () => {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg ${
      isActive ? "text-primary font-semibold underline" : "hover:text-primary"
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto w-full px-4">
        {/* 3-column layout:right button */}
        <div className="grid grid-cols-3 items-center">
          {/* LEFT: Logo + name */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="HERO.IO" className="w-8 h-8" />
              <span className="font-bold text-lg">
                <span className="text-neutral">HERO</span>
                <span className="text-primary">.IO</span>
              </span>
            </Link>
          </div>

          
          <nav className="hidden md:flex justify-center gap-8 text-[15px]">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/apps" className={navClass}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={navClass}>
              Installation
            </NavLink>
          </nav>

          {/* RIGHT: Contribute button */}
          <div className="flex justify-end">
            <a
              href="https://github.com/towhiduzzaman-plabon"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-lg text-white font-semibold
                shadow-md
                bg-gradient-to-r from-purple-500 to-indigo-500
                hover:from-purple-600 hover:to-indigo-600
                active:scale-[.98] transition
              "
            >
              <img src={gitlogo} alt="GitHub" className="w-4 h-4" />
              Contribute
            </a>
          </div>
        </div>

        {/* mobile nav: */}
        <div className="md:hidden mt-2">
          <nav className="flex justify-center gap-6 text-[15px]">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/apps" className={navClass}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={navClass}>
              Installation
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
