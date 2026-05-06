import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Apply from './sections/Apply';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  useEffect(() => {
    // Disable scroll initially for loader
    document.body.style.overflow = 'hidden';
    
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <PageLoader />
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Process />
        <Apply />
      </main>

      <Footer />



      {/* Global Background Mesh */}
      <div className="fixed inset-0 bg-gradient-mesh -z-[5] pointer-events-none" />
    </div>
  );
}

export default App;
