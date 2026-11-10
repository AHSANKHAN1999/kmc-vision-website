'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Spencer Eye Hospital, KMC, Siddiq Wahab Road, Jinnahabad 1, Lyari, District South, Karachi",
    },
    {
      icon: Phone,
      title: "Phone Number",
      detail: "0310 1152938",
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "kmc.vconhs@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Saturday: 08:00 AM - 04:00 PM",
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#0F4C36] tracking-tight"
          >
            Get In <span className="text-[#D4AF37]">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Have any questions about admissions, programs, or facilities? We are here to help. Reach out to us through the form or visit our campus.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#0F4C36]/10 flex items-center justify-center text-[#0F4C36] group-hover:bg-[#0F4C36] group-hover:text-[#D4AF37] transition-all duration-300">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                        <p className="mt-1 text-gray-600 leading-relaxed text-sm">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Form decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full -z-0"></div>

            <h3 className="text-2xl font-bold text-[#0F4C36] mb-6 relative z-10">Send us a Message</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#0F4C36] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#0F4C36] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#0F4C36] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#0F4C36] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 bg-[#0F4C36] hover:bg-[#136346] text-white font-bold py-3.5 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}