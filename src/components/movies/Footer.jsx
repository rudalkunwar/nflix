import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              <span className="text-red-600 text-2xl pr-2 font-bold">NFLIX</span> is a meticulously crafted clone application inspired by the
              iconic streaming platform Netflix. This dynamic platform offers a
              rich variety of movies and TV shows, catering to diverse tastes
              and preferences.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2">
            <h3 className="text-lg font-bold mb-4">Help Center</h3>
            <ul className="text-sm">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="text-sm">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/cookie-preferences">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="text-sm flex">
              <li className="px-2">
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li className="px-2">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="px-2">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
