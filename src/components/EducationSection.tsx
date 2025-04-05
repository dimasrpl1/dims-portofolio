'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Education Card Component
interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  logo?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, degree, period, logo }) => {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-lg p-6 h-full"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Background glow effect */}
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
      
      {/* Content container */}
      <div className="relative flex flex-col h-full">
        <div className="flex items-center mb-4">
          {logo ? (
            <motion.div 
              className="h-14 w-14 rounded-lg overflow-hidden bg-white/10 p-1 mr-4 flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
              <Image src={logo} alt={school} width={48} height={48} className="object-contain" />
            </motion.div>
          ) : (
            <div className="h-14 w-14 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
              <BookOpen className="h-7 w-7 text-blue-400" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white">{school}</h3>
            <p className="text-blue-400 font-medium">{degree}</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-gray-400">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{period}</span>
        </div>
        
        {/* Hover effect arrow */}
        <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-5 w-5 text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
};

// Self-Development Card Component
const SelfDevelopmentCard = () => {
  const skills = ["Frontend", "Backend", "UI/UX", "Mobile"];
  
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-lg p-6 h-full"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Background animation */}
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
      
      {/* Content */}
      <div className="relative flex flex-col items-center text-center h-full">
        <motion.div 
          className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        >
          <Sparkles className="h-8 w-8 text-blue-400" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-white mb-3">Pengembangan Diri</h3>
        <p className="text-gray-300 mb-6">
          Terus mempelajari teknologi baru melalui kursus online dan proyek pribadi
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              className="px-3 py-1 rounded-full text-xs bg-white/10 text-blue-300 border border-blue-500/30"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Education Section Component
const EducationSection = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header with animated elements */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 inline-block">
              EDUKASI
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Pendidikan
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-gray-400 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Latar belakang akademis yang membentuk keahlian dan pengetahuan saya
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-blue-500/5 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-10 right-1/4 w-32 h-32 rounded-full bg-purple-500/5 blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        {/* Main education grid */}
        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Politeknik */}
          <motion.div variants={itemVariants}>
            <EducationCard 
              school="Politeknik Negeri Subang"
              degree="Teknik Rekayasa Perangkat Lunak"
              period="2025 - Present"
              logo="/polsub-logo.png"
            />
          </motion.div>

          {/* SMK */}
          <motion.div variants={itemVariants}>
            <EducationCard 
              school="SMK Negeri 1 Subang"
              degree="Rekayasa Perangkat Lunak"
              period="2022 - 2025"
              logo="/smk-logo.png"
            />
          </motion.div>

          {/* Pengembangan Diri */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <SelfDevelopmentCard />
          </motion.div>
        </motion.div>
        
        {/* Additional education info section with counter */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Stats items */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center">
            <motion.div 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              12+
            </motion.div>
            <p className="text-gray-400">Tahun Pendidikan</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center">
            <motion.div 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              10+
            </motion.div>
            <p className="text-gray-400">Proyek Akademis</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center">
            <motion.div 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              5+
            </motion.div>
            <p className="text-gray-400">Prestasi Akademik</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;