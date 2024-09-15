import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdMenu, MdClose} from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black sticky top-0 z-50 w-full py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 md:py-6 lg:py-2 px-4 md:px-6 lg:px-8">
          <Link to="/">
           <span className="text-red-500 text-3xl font-bold font-mono">N</span><span className="text-red-500 text-xl">flix</span>
          </Link>
          <div className="hidden md:flex flex-grow justify-center">
            <button
              className={`px-4  hover:text-blue-400 ${
                location.pathname === "/" ? "text-blue-500" : "text-white"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className={`px-4 hover:text-blue-400 ${
                location.pathname === "/movies" ? "text-blue-500" : "text-white"
              }`}
              onClick={() => navigate("/movies")}
            >
              Movies
            </button>
            <button
              className={`px-4 hover:text-blue-400 ${
                location.pathname === "/tvshows"
                  ? "text-blue-500"
                  : "text-white"
              }`}
              onClick={() => navigate("/tvshows")}
            >
              TV Shows
            </button>
            <button
              className={`px-4 hover:text-blue-400 ${
                location.pathname === "/about"
                  ? "text-blue-500"
                  : "text-white"
              }`}
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
          </div>
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <MdClose
                className="h-8 w-8 text-white cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <MdMenu
                className="h-8 w-8 text-white cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="py-2 px-4 bg-gray-800">
            <ul className="text-white">
              <li className="py-2">
                <Link to="/home" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/movies" onClick={toggleMobileMenu}>
                  Movies
                </Link>
              </li>
              <li className="py-2">
                <Link to="/tvshows" onClick={toggleMobileMenu}>
                  TV Shows
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" onClick={toggleMobileMenu}>
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
