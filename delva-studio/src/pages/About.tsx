import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-light mb-8">About</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          I am a photographer based in New York, specializing in landscape and nature photography. 
          My work aims to capture the raw beauty of natural environments and share these moments 
          with others through my lens.
        </p>
        <p className="text-gray-600 mb-6">
          With over a decade of experience in photography, I&apos;ve developed a style that emphasizes 
          natural light, composition, and the subtle interplay between elements in nature.
        </p>
        <h2 className="text-2xl font-light mt-12 mb-4">Exhibitions</h2>
        <ul className="list-none space-y-4">
          <li className="text-gray-600">2023 - &quot;Natural Perspectives&quot; - Gallery 23, New York</li>
          <li className="text-gray-600">2022 - &quot;Light & Shadow&quot; - Modern Arts Center, Boston</li>
          <li className="text-gray-600">2021 - &quot;Earth&apos;s Canvas&quot; - Nature Photography Festival, Seattle</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;