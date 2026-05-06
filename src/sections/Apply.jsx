import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ExternalLink, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';
import InsertPage from '../pages/InsertPage'; // Import your form component

const Apply = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-slate-200 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!showForm ? (
              /* --- PART 1: MARKETING VIEW (Original Content) --- */
              <motion.div
                key="marketing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                    Apply for <span className="text-gradient">GCAS Service</span> Now
                  </h2>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Start your application process immediately. Our experts will get in touch with 
                    you as soon as you submit your details.
                  </p>

                  {/* ... (Keep your Required Documents & Pricing divs here) ... */}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(true)} // Set to true to show form
                    className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-primary/30 group"
                  >
                    Start Application <ExternalLink size={20} />
                  </motion.button>
                </div>

                {/* Right side Visual (Keep original or remove) */}
                <div className="hidden lg:block h-[400px] bg-slate-100 rounded-3xl border-dashed border-2 border-slate-300 flex items-center justify-center">
                   <p className="text-slate-400 font-medium">Form will load here upon clicking start</p>
                </div>
              </motion.div>
            ) : (
              /* --- PART 2: FORM VIEW (Your InsertPage) --- */
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <button 
                  onClick={() => setShowForm(false)} 
                  className="flex items-center gap-2 text-primary font-bold mb-6 hover:underline"
                >
                  <ArrowLeft size={18} /> Back to info
                </button>
                
                {/* Rendering your custom form component here */}
                <InsertPage /> 
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
};

export default Apply;