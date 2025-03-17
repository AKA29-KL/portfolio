"use client";

import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Todo-app React",
      description: "A simple to-do list app built with React and Tailwind CSS.",
      image:"/asset/image.png",
      link: "https://my-todo-app-pi-coral.vercel.app/",
    },
    {
      title: "Food Recipe App",
      description: "A React-based app that allows users to search and save their favorite recipes.",
      image: "/asset/food.png",
      link: "https://github.com/cameleonconception/yum-yam",
    },
    {
      title: "Voyage -X",
      description: "A adventure travel app that allows users to plan and book their trips.",
      image: "/asset/image-1.png",
      link: "https://github.com/420-713/laboratoire-2-girl-power",
    },
    {
      title: "PhotoShare",
      description: "A app that allows users to share their photos with friends and family.",
      image: "/asset/IMG_3505.png",
      link: "https://github.com/420-713/laboratoire-3-girl-power",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Navbar />

      {/* Titre animé */}
      <motion.h1
        className="text-5xl font-extrabold text-center mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-400 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover my latest work and projects.
      </motion.p>

      {/* Grid des projets */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
