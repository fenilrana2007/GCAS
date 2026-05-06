import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="px-4 py-1.5 rounded-full glass border border-slate-200 text-primary text-sm font-medium mb-6 inline-block">
              Premium GCAS Support
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight min-h-[120px] md:min-h-[150px] lg:min-h-[180px]">
              <span className="text-gradient">
                <Typewriter texts={['Fast & Reliable', '100% Accurate', 'Expert Guided']} />
              </span>
              <br />
              Apply for GCAS Now
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We handle your applications with 100% accuracy. Professional guidance for GCAS registration, 
              form filling, and document verification.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#apply"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary/80 transition-all hover:neon-border-purple group"
              >
                Fill Form Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative hidden md:block"
          >
            {/* Animated Glow behind the image */}
            <motion.div 
              animate={{ 
                scale: isHovering ? 1.2 : [1, 1.1, 1],
                opacity: isHovering ? 0.6 : [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: isHovering ? 0.3 : 4, repeat: isHovering ? 0 : Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/30 rounded-full blur-[100px] -z-10"
            />
            
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={heroImage}
              alt="GCAS Service Hero Boy"
              className="w-full max-w-lg mx-auto drop-shadow-2xl z-10 relative"
              style={{ filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))" }}
            />
          </motion.div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[150px] animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
