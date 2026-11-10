'use client';

import { motion } from 'framer-motion';
import { Activity, HeartPulse, Baby, Stethoscope, BookOpen, ArrowRight, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function ProgramsSection() {
  const programs = [
    {
      title: "Generic BSN",
      type: "Degree Program",
      duration: "04 Years",
      eligibility: "FSc (Pre-Medical) with 50% marks",
      icon: Activity,
      color: "text-[#0F4C36]",
      bgColor: "bg-[#0F4C36]/10"
    },
    {
      title: "Certified Nursing Assistant",
      type: "Diploma Program",
      duration: "02 Years",
      eligibility: "FSc/Matric with 45-50% marks",
      icon: HeartPulse,
      color: "text-[#D4AF37]",
      bgColor: "bg-[#D4AF37]/10"
    },
    {
      title: "Community Midwifery (CMW)",
      type: "Diploma Program",
      duration: "02 Years",
      eligibility: "Matric with 40% marks",
      icon: Baby,
      color: "text-[#0F4C36]",
      bgColor: "bg-[#0F4C36]/10"
    },
    {
      title: "Lady Health Visitors (LHV)",
      type: "Diploma Program",
      duration: "02 Years",
      eligibility: "FSc/Matric (Science) with 45% marks",
      icon: Stethoscope,
      color: "text-[#D4AF37]",
      bgColor: "bg-[#D4AF37]/10"
    },
    {
      title: "Post Basic Specializations",
      type: "Diploma Program",
      duration: "01 Year",
      eligibility: "Registered Nurse (RN) / Midwife",
      icon: BookOpen,
      color: "text-[#0F4C36]",
      bgColor: "bg-[#0F4C36]/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#0F4C36] tracking-tight"
          >
            Academic <span className="text-[#D4AF37]">Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Discover our comprehensive range of nursing and health science programs designed to build the next generation of healthcare professionals.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F4C36] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${program.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={program.color} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0F4C36] transition-colors">
                  {program.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award size={16} className="mr-2 text-[#D4AF37]" />
                    <span className="font-medium">{program.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-[#0F4C36]" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
                    <span className="font-semibold text-gray-700 block mb-1">Eligibility:</span>
                    {program.eligibility}
                  </div>
                </div>

                <Link 
                  href="/programs" 
                  className="inline-flex items-center text-sm font-bold text-[#0F4C36] hover:text-[#D4AF37] transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#0F4C36] hover:bg-[#136346] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Apply for Admission 2024-25
          </Link>
        </motion.div>

      </div>
    </section>
  );
}