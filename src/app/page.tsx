'use client'

import { useState, useEffect } from 'react'
import { Code, Monitor, Server, Star, Coffee, ChevronDown, MessageSquare, FolderOpen } from 'lucide-react'
import SkillBar from '@/components/SkillBar'
import EducationSection from '@/components/EducationSection';
import SectionHeader from '@/components/SectionHeader';

// Define Role type and ROLES constant
type Role = {
  text: string;
  color: string;
};

const ROLES: Role[] = [
  { text: "WEB DEVELOPER", color: "from-blue-400 to-purple-500" },
  { text: "GAMER", color: "from-blue-400 to-purple-500" },
  { text: "VIDEO EDITOR", color: "from-blue-400 to-purple-500" }
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section - Simplified */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        {/* Reduced background particles - only visible on higher-end devices */}
        {isLoaded && window.innerWidth > 1024 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array(5).fill(0).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-10"
                style={{
                  width: Math.random() * 15 + 3 + 'px',
                  height: Math.random() * 15 + 3 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
              />
            ))}
          </div>
        )}
  
        {/* Static gradient background instead of animated */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-0" />
        
        {/* Hero content with simplified animations */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            {/* Simplified decorative elements */}
            

            <div>
              <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
                <span className="block text-white">Hai, Aku</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Dimas
                </span>
              </h1>
              
              {/* Static separator line */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-8" />
              
              {/* Typewriter text */}
              <p className="text-xl md:text-2xl text-gray-400 mt-4">
                <TypewriterEffect delay={60} startDelay={1000} />
              </p>

              {/* CTA button with simplified effect */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-lg"
                >
                  Cek Profil Saya
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Static scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
          <span className="font-inter text-base mb-2">Gulir ke bawah</span>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Me Section - Simplified */}
      <section id="about" className="py-24 px-6">
        <SectionHeader title="Tentang Saya" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-800/30 p-6 sm:p-8 rounded-2xl border border-gray-700/40 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <Code size={36} className="text-blue-400" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-200 font-inter text-lg md:text-xl leading-relaxed font-light">
                  Halo! Saya <span className="text-blue-400 font-medium">Dimas</span>, seorang lulusan baru dari SMKN 1 Subang jurusan RPL.
                  Saya senang membangun website menggunakan bahasa PHP dan Javascript.
                </p>
                <p className="text-gray-400 mt-5 leading-relaxed">
                  Saat ini saya sedang belajar <span className="text-white font-medium">Laravel</span> dan <span className="text-white font-medium">Next.js</span>. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan pengembangan web saya.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Tag className="font-inter bg-blue-500/10 text-blue-300 border border-blue-500/20" icon={<Monitor size={14} />}>Pengembang Web</Tag>
                  <Tag className="font-inter bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" icon={<Server size={14} />}>Backend</Tag>
                  <Tag className="font-inter bg-purple-500/10 text-purple-300 border border-purple-500/20" icon={<Star size={14} />}>UI/UX</Tag>
                  <Tag className="font-inter bg-amber-500/10 text-amber-300 border border-amber-500/20" icon={<Coffee size={14} />}>Pecinta Teknologi</Tag>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 justify-center sm:justify-start">
            <a
              href='/proyek'
              className="font-inter px-8 py-3 bg-blue-600 text-white font-medium rounded-xl"
            >
              <FolderOpen size={18} className="inline-block mr-2" /> 
              Lihat Proyek Saya
            </a>
            <a
              href='/kontak'
              className="px-8 py-3 bg-gray-700 text-white font-medium rounded-xl border border-gray-600/30"
            >
              <MessageSquare size={18} className="inline-block mr-2" />
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section - Static version */}
      <section className="py-24 px-6">
        <SectionHeader title="Skill" subtitle="Kemampuan - kemampuan yang saya kuasai" />
        <div>
          <SkillBar />
        </div>
      </section>

      {/* Experience Section - Static version */}
      <section className="py-24 px-6">
        <SectionHeader title="Pengalaman Kerja" subtitle="Jejak karir profesional" />
        <div>
          <ExperienceSection />
        </div>
      </section>

      {/* Education Section - Using static version */}
      <EducationSection />
    </main>
  )
}

// Simplified TypewriterEffect with reduced computations
function TypewriterEffect({ delay = 70, startDelay = 1000 }: { delay?: number; startDelay?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    // Reduce animation impact on low-end devices by using a feature detection approach
    const isLowEndDevice = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;
    
    const timer = setTimeout(() => {
      setStartTyping(true)
    }, isLowEndDevice ? 500 : startDelay) // Reduced delay for low-end devices

    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!startTyping) return

    const currentRole = ROLES[roleIndex].text
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setDisplayText(prev => prev + currentRole[currentIndex])
          setCurrentIndex(prev => prev + 1)
        } else {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex(prev => (prev + 1) % ROLES.length)
        }
      }
    }, isDeleting ? delay / 1.5 : delay)

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isDeleting, roleIndex, startTyping])

  return (
    <span className={`bg-gradient-to-r ${ROLES[roleIndex].color} bg-clip-text text-transparent`}>
      {displayText}<span className="animate-pulse">|</span>
    </span>
  )
}

// Experience Section Component - Simplified
function ExperienceSection() {
  const experiences = [
    {
      title: "Praktik Kerja Lapangan",
      company: "BAPENDA Subang",
      period: "2024",
      description: "Saya bekerja sebagai anak PKL di BAPENDA Subang, di bagian Pelayanan dan penetapan."
    },
    {
      title: "Editor Video",
      company: "Firdausi nuzula",
      period: "2023", 
      description: "Saya bekerja sebagai editor video untuk channel YouTube Firdausi Nuzula, mengedit video dengan menggunakan Adobe Premiere Pro."
    },
    {
      title: "Editor Tim Media",
      company: "PORPROV XIV JABAR Cabang Handball",
      period: "2022",
      description: "Saya bekerja di dalam naungan Hover menjadi editor tim media untuk acara PORPROV XIV JABAR Cabang Handball."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
        
        <div className="pl-0 md:pl-20">
          {experiences.map((exp, index) => (
            <TimelineItemSimplified
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Significantly simplified TimelineItem component
function TimelineItemSimplified({ title, company, period, description }: { 
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-12 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="font-inter bg-gray-800/50 rounded-lg shadow p-6 ml-2 border-l-4 border-blue-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-outfit font-bold text-white">{title}</h3>
          <div className="mt-2 md:mt-0 flex items-center">
            <span className="text-blue-400 font-medium">{company}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">{period}</span>
          </div>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

// Simplified Tag component
function Tag({ children, icon, className }: { children: React.ReactNode; icon: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {icon}
      {children}
    </span>
  )
}