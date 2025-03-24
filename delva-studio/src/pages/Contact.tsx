// import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-light mb-8">Contact</h1>
      
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-gray-400" />
          <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
            contact@example.com
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-gray-400" />
          <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
            +1 (234) 567-890
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-gray-400" />
          <span className="text-gray-600">
            New York, NY
          </span>
        </div>
        
        <form className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            />
          </div>
          
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;