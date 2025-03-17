"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Définition des types pour les props du composant
interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition duration-300 cursor-pointer"
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f3f4f6",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Image du projet */}
        <div className="flex justify-center items-center w-full h-40">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-auto h-full"
          />
        </div>

        {/* Texte du projet */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
