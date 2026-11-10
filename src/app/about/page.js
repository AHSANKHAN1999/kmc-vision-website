'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Cards ek ek karke slide honge
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-[#0F4C36] tracking-tight"
          >
            About <span className="text-[#D4AF37]">KMC Vision</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        {/* Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          
          {/* Card 1: Introduction */}
          <motion.div 
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0F4C36] hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="bg-[#0F4C36]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={32} className="text-[#0F4C36]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F4C36] mb-4">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Established in May 2024 in Lyari, Karachi, KMC Vision College is on a mission to transform healthcare education. We bridge the gap in skilled nursing professionals by offering cutting-edge programs designed to nurture compassionate, highly skilled, and resilient healthcare heroes.
            </p>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div 
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#D4AF37] hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
          >
             {/* Decorative Background Icon */}
            <Target className="absolute -right-10 -bottom-10 w-48 h-48 text-[#D4AF37] opacity-5 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} className="text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm relative z-10">
              To inspire and empower the next generation of nursing professionals by offering world-class education that blends cutting-edge knowledge, compassionate care, and ethical practice. We equip our students to excel, champion the underserved, and drive meaningful change in global health.
            </p>
          </motion.div>

          {/* Card 3: Vision */}
          <motion.div 
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0F4C36] hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="bg-[#0F4C36]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb size={32} className="text-[#0F4C36]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F4C36] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              To be a trailblazer in nursing education, inspiring a new generation of compassionate leaders. We aspire to create a global impact by fostering innovation and empowering graduates to bridge healthcare gaps with integrity, cultural sensitivity, and unwavering dedication.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}