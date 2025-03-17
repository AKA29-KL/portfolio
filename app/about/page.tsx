"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">

        <Navbar />
      {/* Animation du titre */}
      <motion.h1
        className="text-4xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Texte de présentation animé */}
      <motion.div
        className="mt-6 max-w-2xl text-lg text-gray-400 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          I'm <span className="text-blue-400 font-semibold">Akerlie</span> a passionate web developer on an exciting journey. 
          Just a year ago, I was working in the healthcare field, searching for something that would allow me to express my creativity while leveraging technology.
        </p>

        <p>
          I've always been resourceful when it comes to tech, and I learn fast. Transitioning to web development felt natural—every challenge is a puzzle waiting to be solved, 
          and every project is an opportunity to create something meaningful.
        </p>

        <p>
          Over the past year, I have built a strong foundation in <span className="text-blue-300 font-semibold">HTML, CSS, and JavaScript</span>. 
          I quickly expanded my skills into modern frameworks like <span className="text-blue-300 font-semibold">React</span> and <span className="text-blue-300 font-semibold">Next.js</span>. 
          But what excites me the most is working on <span className="text-blue-300 font-semibold">backend development</span> and exploring <span className="text-blue-300 font-semibold">databases</span>. 
          I love structuring data, optimizing queries, and making everything work smoothly behind the scenes.
        </p>

        <p>
          Even though I am still learning, my passion for problem-solving and continuous growth drives me every day. 
          I am eager to deepen my expertise in backend technologies and build powerful, scalable applications.
        </p>

        <p>
          If you're looking for someone who combines curiosity, determination, and a love for structured systems, count me in!
        </p>
      </motion.div>
    </div>
  );
}
