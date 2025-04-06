'use client'

import { ArrowRight, Github, Mail, Instagram, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Mari Bekerja Sama
              </h2>
              <p className="text-gray-300 max-w-xl">
                Tertarik untuk berkolaborasi atau memiliki project yang ingin didiskusikan? 
                Saya siap membantu mewujudkan ide Anda menjadi realitas.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6283875528144"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 w-full justify-center"
              >
                <Phone size={18} />
                Hubungi Saya
                <ArrowRight size={18} />
              </motion.a>
              
              <div className="flex gap-3 mt-2">
                <a
                  href="https://github.com/dimasrpl1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="mailto:muhdimassusanto12@email.com"
                  className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://www.instagram.com/nimpoxx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-500 font-inter">
            &copy; {new Date().getFullYear()} <span className="text-blue-400 font-outfit">PortoDims</span>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}