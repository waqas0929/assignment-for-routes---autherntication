import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="rounded-lg text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950 hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          {!isAuthenticated() && (
            <>
              <li>
                <Link
                  to="/signup"
                  className="rounded-lg text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950 hover:text-gray-400"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="rounded-lg text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950 hover:text-gray-400"
                >
                  Login
                </Link>
              </li>
            </>
          )}
          {isAuthenticated() && (
            <>
              <li>
                <Link
                  to="/protected-route"
                  className="rounded-lg text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950 hover:text-gray-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="rounded-lg text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950 hover:text-gray-400"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
        <div>
          <input
            type="text"
            placeholder="search product"
            className="rounded-full p-2 text-black"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
