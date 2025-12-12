 'use client';
import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <motion.section className="mt-16 bg-[#6B2259] py-12 text-white text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl font-bold">Stay Updated</h2>
      <p className="mt-2">Subscribe to our newsletter for the latest updates and resources.</p>
      <form className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-4 py-2 text-gray-800 rounded-l-md"
        />
        <button className="bg-[#F97316] text-white px-6 py-2 rounded-r-md hover:bg-orange-600">
          Subscribe
        </button>
      </form>
    </motion.section>
  );
}