import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FileText, Upload, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'GCAS Registration',
    description: 'Quick and hassle-free registration on the GCAS portal with expert assistance.',
    icon: <UserPlus className="text-primary" size={32} />,
    color: 'purple',
  },
  {
    title: 'Form Fill-Up',
    description: 'We ensure every field is filled correctly to avoid rejection of your application.',
    icon: <FileText className="text-secondary" size={32} />,
    color: 'blue',
  },
  {
    title: 'Document Upload Help',
    description: 'Help with scanning, resizing, and uploading documents as per required formats.',
    icon: <Upload className="text-accent" size={32} />,
    color: 'pink',
  },
  {
    title: 'Error Correction',
    description: 'Correction services for existing applications with errors or mismatches.',
    icon: <CheckCircle className="text-green-400" size={32} />,
    color: 'green',
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-8 rounded-2xl relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-6 relative z-10 p-3 bg-slate-50 w-fit rounded-xl border border-slate-200 group-hover:neon-border-purple transition-all">
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>
      
      <div className="w-full h-[1px] bg-slate-200 mt-auto" />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Everything you need for a successful GCAS application in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
