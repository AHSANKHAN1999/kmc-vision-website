'use client';

import { motion } from 'framer-motion';
import { FileText, Edit3, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdmissionsSection() {
  const steps = [
    {
      id: "01",
      title: "Application Form",
      description: "Obtain the application form with the prospectus. Submit the original master copy along with the required documents and Rs. 1000 Entry Test Fee.",
      icon: FileText,
    },
    {
      id: "02",
      title: "Entry Test",
      description: "Appear for the entry test (Science subjects, Math & GK). A minimum of 50% marks is required to qualify for the next stage.",
      icon: Edit3,
    },
    {
      id: "03",
      title: "Interview",
      description: "Successful candidates will be called for an interview conducted by the Selection Committee for final evaluation.",
      icon: Users,
    }
  ];

  const documents = [
    "Intermediate / Matric Science marks sheet & Certificate",
    "Domicile Certificate of the applicant",
    "Candidate's Computerized National Identity Card (CNIC) / B-Form",
    "Eight (08) passport size photographs (4 attested from front & back)"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#0F4C36] tracking-tight"
          >
            Admission <span className="text-[#D4AF37]">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Your journey to becoming a healthcare hero starts here. Follow these simple steps to join KMC Vision College of Nursing & Health Sciences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Steps */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#D4AF37] pl-3">How to Apply</h3>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-full bg-[#0F4C36]/10 flex items-center justify-center text-[#0F4C36] group-hover:bg-[#0F4C36] group-hover:text-[#D4AF37] transition-colors duration-300">
                      <Icon size={32} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-[#D4AF37] mr-3">STEP {step.id}</span>
                      <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Required Documents */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#0F4C36] rounded-2xl p-8 shadow-xl text-white h-fit relative overflow-hidden"
          >
            {/* Background design element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center text-[#D4AF37]">
              <FileText className="mr-3" size={24} />
              Required Documents
            </h3>
            <p className="text-gray-200 text-sm mb-6 pb-4 border-b border-white/20">
              Please submit two photocopies of the following documents, attested by a Gazetted Government officer (Grade 17 or above).
            </p>
            
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-gray-100 leading-snug">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-black/20 rounded-lg p-4 flex items-start">
              <AlertCircle className="text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-xs text-gray-300">
                Incomplete applications or documents without proper attestation will not be accepted.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}