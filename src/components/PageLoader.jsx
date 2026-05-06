import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold font-outfit mb-4"
        >
          <span className="text-gradient">GCAS</span> Service
        </motion.div>
        <motion.div 
          className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 192 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div 
            className="h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
