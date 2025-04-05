'use client'

import Image from "next/image"
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"
import { Mail, Download } from "lucide-react"

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Simplified static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl top-1/2 -right-20" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Profile Image - Optimized */}
          <div className="relative shrink-0">
            <div className="p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full">
              <div className="p-2 bg-slate-900 rounded-full">
                <Image
                  src="/dimas.jpg"
                  alt="Foto Dimas"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                  priority
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Muhammad Dimas Susanto
            </h1>
            
            <p className="text-lg mt-3 text-blue-100">
              Fresh Graduate SMKN 1 Subang - RPL | Web Developer
            </p>
            
            <p className="mt-4 text-gray-300">
              Pengembang web dengan passion di backend dan frontend development.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <a
                href="/dimas-cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition"
              >
                <Download className="w-5 h-5" /> Unduh CV
              </a>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/nimpoxx/" },
                  { icon: <FaGithub size={20} />, link: "https://github.com/dimasrpl1" },
                  { icon: <FaWhatsapp size={20} />, link: "https://wa.me/6283875528144" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Card */}
          <div className="p-6 rounded-xl bg-gray-800/50">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:muhdimassusanto12@email.com" className="text-blue-400 hover:text-blue-300">
                  muhdimassusanto12@email.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-xl bg-gray-800/50">
            <div className="flex items-center gap-4">
              <FaWhatsapp className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="font-medium">WhatsApp</h3>
                <a href="https://wa.me/6283875528144" className="text-green-400 hover:text-green-300">
                  +62 838 7552 8144
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}