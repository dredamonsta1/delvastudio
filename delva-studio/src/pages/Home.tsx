import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Landscape mountain view'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    alt: 'Forest in fog'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    alt: 'Waterfall in forest'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    alt: 'Sunset over mountains'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    alt: 'Sun rays through trees'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    alt: 'Lake view'
  }
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;