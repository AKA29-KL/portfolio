"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Charger le mode sombre depuis localStorage au chargement de la page
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fonction pour basculer entre mode clair et sombre
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-all">
        {/* Navbar */}
        <Navbar />

        {/* Bouton Dark Mode Global */}
        <div className="fixed top-4 right-6 z-50">
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-900" />}
          </button>
        </div>

        {/* Contenu de la page */}
        <main className="min-h-screen text-[var(--text-color)]">{children}</main>
      </body>
    </html>
  );
}
