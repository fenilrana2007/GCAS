import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Submit Form',
    text: 'Fill out our secure online application form to get started.'
  },
  {
    number: '02',
    title: 'Share Details',
    text: 'Provide the necessary information and documents required for the GCAS form.'
  },
  {
    number: '03',
    title: 'We Fill Form',
    text: 'Our experts fill out the application accurately and perform quality checks.'
  },
  {
    number: '04',
    title: 'Confirmation',
    text: 'You receive the submission confirmation and final application copy.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It <span className="text-gradient">Works</span></h2>
          <p className="text-slate-600 text-lg">A simple 4-step process to get your GCAS application completed.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto mb-8 relative group">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-2xl font-bold text-primary relative z-10">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
