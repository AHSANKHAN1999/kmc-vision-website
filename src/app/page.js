'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Microscope, Award, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#0F4C36]">
      
 {/* 2026 ADVANCED HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Modern Background with Building Image and Gradients */}
        <div className="absolute inset-0 bg-[#0F4C36] z-0">
          
          {/* Building Image Background */}
          <div className="absolute inset-0 opacity-25 mix-blend-overlay">
            <img 
              src="/building.png" 
              alt="KMC Vision Building" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1a7a58] rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Admissions Open 2026-27</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl"
          >
            Empowering the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F0C73E]">
              Healthcare Heroes
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-10 leading-relaxed"
          >
            Transforming nursing education in Pakistan with cutting-edge facilities, compassionate care, and excellence in clinical practice.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Yeh button aapke app/admissions/page.js par le jayega */}
            <Link href="/admissions" className="group relative px-8 py-4 bg-[#D4AF37] text-[#0F4C36] font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
            
            {/* Yeh button aapke app/programs/page.js par le jayega */}
            <Link href="/programs" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2026 BENTO BOX QUICK STATS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-20 hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Expert Faculty", desc: "Highly qualified professionals", delay: 0.2 },
            { icon: Microscope, title: "Modern Labs", desc: "State-of-the-art simulation", delay: 0.4 },
            { icon: Award, title: "Recognized", desc: "Approved by PN&MC & DUHS", delay: 0.6 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-xl border border-white flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="p-4 bg-[#0F4C36]/5 rounded-2xl text-[#0F4C36] group-hover:bg-[#0F4C36] group-hover:text-[#D4AF37] transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F4C36]">{item.title}</h3>
                <p className="text-gray-600 font-medium mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}