"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-50 transition-all"
      style={{
        backgroundColor: "var(--navbar-bg)",
        color: "var(--navbar-text)",
      }}
    >
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-6">
          <a href="/" className="hover:text-blue-500 transition">Home</a>
          <a href="/about" className="hover:text-blue-500 transition">About Me</a>
          <a href="/projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Bouton Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition"
          style={{
            backgroundColor: darkMode ? "#444" : "#ddd",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </nav>
    </header>
  );
}
