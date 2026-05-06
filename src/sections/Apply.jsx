import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';
import InsertPage from '../pages/InsertPage'; 

const Apply = () => {
  const [isApplying, setIsApplying] = useState(false);

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-slate-200 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!isApplying ? (
              /* --- VIEW 1: MARKETING & INFO --- */
              <motion.div
                key="info-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                    Apply for <span className="text-gradient">GCAS Service</span> Now
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Required Documents</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Adhar Card', '10th Marksheet', '12th Marksheet',
                        'Caste Certificate', 'Non Creamy Layer', 'School Leaving',
                        'Income Certificate', 'Passport Size Photo',
                      ].map((doc) => (
                        <div key={doc} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <ShieldCheck size={14} className="text-primary" />
                          </div>
                          <span className="text-slate-600 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlighted Important Info */}
                    <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                      <Zap className="text-red-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-bold text-red-700 text-sm">Most Important Info Needed</h4>
                        <p className="text-red-600 text-sm font-medium">Valid Mobile Number & Email ID are mandatory for registration.</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlighted Pricing Info */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">Transparent Pricing</h4>
                        <p className="text-sm text-slate-600">No hidden fees. Pay only for what you need.</p>
                      </div>
                      <div className="flex flex-col gap-1 items-center sm:items-end">
                        <div className="text-slate-700 font-semibold"><span className="text-primary font-bold">Our Charge:</span> ₹150</div>
                        <div className="text-slate-700 font-semibold"><span className="text-secondary font-bold">Gov Charge:</span> ₹300</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsApplying(true)}
                    className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/30 group mb-8 lg:mb-0"
                  >
                    Start Application <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Right Side: Address Info */}
                <div className="space-y-6">
                  <motion.a 
                    href="https://maps.app.goo.gl/X71A7A3evo4KJe8w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="block p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      📍 Visit Our Office <ExternalLink size={16} className="text-blue-500" />
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">English:</p>
                        <p className="text-slate-600 text-sm leading-relaxed">76/A-2, UniQ Coaching Class, Shiv Township Society, Near Tara Vidya Mandir School, Bhathena Surat, Gujarat, 395002</p>
                      </div>
                      <div className="w-full h-px bg-blue-200/50"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">ગુજરાતી:</p>
                        <p className="text-slate-600 text-sm leading-relaxed">76/A-2, UniQ કોચિંગ ક્લાસ, શિવ ટાઉનશિપ સોસાયટી, નેર તારા વિદ્યા મંદિર સ્કૂલ, ભથેના સુરત, ગુજરાત, 395002</p>
                      </div>
                    </div>
                  </motion.a>
                  
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <p className="text-slate-500 text-sm italic">Secure • Fast • Verified Service</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* --- VIEW 2: THE FORM --- */
              <motion.div
                key="form-view"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <button 
                  onClick={() => setIsApplying(false)}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-semibold"
                >
                  <ArrowLeft size={20} /> Back to Requirements
                </button>
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