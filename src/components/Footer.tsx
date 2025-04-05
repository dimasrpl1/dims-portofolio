'use client'

import { Github, Mail, Instagram, Phone, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  // Handle scroll-to-top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-6 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            className="fill-gray-800"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".15"
            className="fill-gray-800"
          />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Content with logo and social links */}
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <div className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              DimsPortfolio
            </div>
            <p className="text-gray-400 max-w-md">
              Jika anda berminat untuk bekerja sama atau memiliki pertanyaan, silakan hubungi saya melalui salah satu platform di bawah ini.
            </p>
          </div>
          
          <div className="flex gap-5 items-center mb-10">
            <a
              href="https://github.com/dimasrpl1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:muhdimassusanto12@email.com"
              className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/nimpoxx/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/6283875528144"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <div className="w-full border-t border-gray-700/50 pt-6 flex justify-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} <span className="text-blue-400">DimsPortfolio</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ${
          visible ? 'visible' : 'invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  )
}