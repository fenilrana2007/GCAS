import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold font-outfit mb-6">
              <span className="text-gradient">GCAS</span> Service
            </h2>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-slate-900 transition-colors">Services</a></li>
              <li><a href="#process" className="text-slate-500 hover:text-slate-900 transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-500">
              <li>aniket200621@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} GCAS Service. All rights reserved. Designed for excellence.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full glass border border-slate-200 text-slate-500 hover:text-primary hover:border-primary transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/5 blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;
