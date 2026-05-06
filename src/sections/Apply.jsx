import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';
import InsertPage from '../pages/InsertPage'; // Import your form component

const Apply = () => {
  // State to toggle between the marketing info and the actual form
  const [isApplying, setIsApplying] = useState(false);

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-slate-200 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!isApplying ? (
              /* --- VIEW 1: Information and "Start" Button --- */
              <motion.div
                key="info-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                    Apply for <span className="text-gradient">GCAS Service</span> Now
                  </h2>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Start your application process immediately. Our experts will get in touch with 
                    you as soon as you submit your details through our secure portal.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Required Documents</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Adhar Card', '10th Marksheet', '12th Marksheet',
                        'Caste Certificate', 'Non Creamy Layer', 'School Leaving',
                        'Income Certificate', 'Passport Photo',
                      ].map((doc) => (
                        <div key={doc} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <ShieldCheck size={14} className="text-primary" />
                          </div>
                          <span className="text-slate-600 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsApplying(true)} // Toggles to the form
                    className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-primary/30 group"
                  >
                    Start Application <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Right Side Visual */}
                <div className="hidden lg:flex h-[500px] rounded-2xl bg-slate-50/50 border-2 border-dashed border-slate-200 items-center justify-center text-center p-8">
                  <div>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap size={40} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">Ready to begin?</h4>
                    <p className="text-slate-500">Click the button to load the secure application form.</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* --- VIEW 2: The InsertPage Form --- */
              <motion.div
                key="form-view"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Back Button */}
                <button 
                  onClick={() => setIsApplying(false)}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-semibold"
                >
                  <ArrowLeft size={20} /> Back to Requirements
                </button>

                {/* Your Form Component */}
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