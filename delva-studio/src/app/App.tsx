// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from '../components/Navbar';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Footer from '../components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white text-gray-900">
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://source.unsplash.com/random/800x600?photography,1',
  'https://source.unsplash.com/random/800x600?photography,2',
  'https://source.unsplash.com/random/800x600?photography,3',
  'https://source.unsplash.com/random/800x600?photography,4',
  'https://source.unsplash.com/random/800x600?photography,5',
  'https://source.unsplash.com/random/800x600?photography,6',
];

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={onClose}>
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        src={src}
        alt="Enlarged view"
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Photo ${index + 1}`} className="w-full h-[400px] object-cover" />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </div>
  );
}

function About() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl mb-4 font-bodoni">About</h2>
      <p className="text-gray-700">A passionate photographer capturing life&apos;s beautiful moments.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl mb-4 font-bodoni">Contact</h2>
      <p className="text-gray-700">Get in touch for collaborations and bookings.</p>
    </div>
  );
}

function App() {
  return (
    <>
    <div className="min-h-screen">
      <header className="py-8 px-4">
        <h1 className="text-4xl text-left mb-8 font-bodoni"><Link to="/"> Delva Studio</Link></h1>
        <nav className="flex justify-end space-x-8 font-opensans">
          <Link to="/" className="text-gray-800 hover:text-gray-400">Photography</Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-400">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Photography />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;