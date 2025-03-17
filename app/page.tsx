"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Home() {
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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Bouton Mode Sombre en haut à droite */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-900" />}
        </button>
      </div>

      {/* Animation du texte d'accueil */}
      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, welcome to my <span className="text-blue-400">Portfolio</span>
      </motion.h1>

    
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore my projects and learn more about me. Passionate about web development and creating amazing experiences.
      </motion.p>

      {/* Conteneur des liens en ligne  */}
      <div className="mt-8 flex space-x-6">
        {/* Bouton "About Me" stylisé */}
        <Link href="/about">
          <motion.div
            className="px-8 py-4 bg-blue-500 dark:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg cursor-pointer transition-all"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.div>
        </Link>

        {/* Bouton "Projects" stylisé */}
        <Link href="/projects">
          <motion.div
            className="px-8 py-4 bg-blue-500 dark:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg cursor-pointer transition-all"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.div>
        </Link>

        {/* Bouton "Contact" stylisé */}
        <Link href="/contact">
          <motion.div
            className="px-8 py-4 bg-blue-500 dark:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg cursor-pointer transition-all"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
