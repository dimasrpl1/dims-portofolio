'use client'

import { motion, useMotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code, Monitor, Server, Star, Coffee, ChevronDown, MessageSquare, FolderOpen } from 'lucide-react'
import SkillBar from '@/components/SkillBar'
import EducationSection from '@/components/EducationSection';

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
    <main className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section with Enhanced Interactive Parallax */}
<section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
  {/* Responsive animated background particles - reduced quantity on mobile */}
  <div className="absolute inset-0 overflow-hidden">
    {isLoaded && Array(window.innerWidth < 768 ? 10 : 20).fill(0).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-500"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0.1
        }}
        animate={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight,
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          x: { duration: Math.random() * 20 + 15, repeat: Infinity },
          y: { duration: Math.random() * 20 + 15, repeat: Infinity },
          opacity: { duration: Math.random() * 3 + 2, repeat: Infinity },
        }}
        style={{
          width: window.innerWidth < 768 ? Math.random() * 15 + 3 + 'px' : Math.random() * 20 + 5 + 'px',
          height: window.innerWidth < 768 ? Math.random() * 15 + 3 + 'px' : Math.random() * 20 + 5 + 'px',
        }}
      />
    ))}
  </div>

  {/* Interactive background that responds to mouse/touch movement */}
  <motion.div 
    className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-0"
    style={{
      background: useMotionValue('linear-gradient(to bottom, transparent, rgb(3, 7, 18))')
    }}
    whileHover={{
      background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgb(3, 7, 18))'
    }}
  />
  
  {/* Updated Hero content with mobile optimization */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-6"
    >
      {/* Update decorative elements sizing */}
      <motion.div 
        className="flex justify-center gap-4 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ gap: '20px', transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          whileHover={{ width: '100px', transition: { duration: 0.3 } }}
        />
        <motion.div 
          className="w-8 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          whileHover={{ width: '40px', transition: { duration: 0.3 } }}
        />
        <motion.div 
          className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          whileHover={{ width: '60px', transition: { duration: 0.3 } }}
        />
      </motion.div>

      {/* Update heading sizes to be consistent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="text-6xl font-outfit font-bold mb-4">
          <span className="block text-white">Hai, Aku</span>
          <motion.span 
            className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ 
              backgroundImage: 'linear-gradient(to right, #60a5fa, #8b5cf6, #60a5fa)', 
              backgroundSize: '200% 100%',
              backgroundPosition: ['0%', '100%'],
              transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' } 
            }}
          >
            Dimas
          </motion.span>
        </h1>
        
        {/* Update separator line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-8"
          whileHover={{ 
            height: '4px',
            backgroundImage: 'linear-gradient(to right, #60a5fa, #8b5cf6, #60a5fa)',
            backgroundSize: '200% 100%',
            backgroundPosition: ['0%', '100%'],
            transition: { 
              height: { duration: 0.3 }, 
              backgroundPosition: { duration: 2, repeat: Infinity, repeatType: 'reverse' } 
            } 
          }}
        />
        
        {/* Update typewriter text size */}
        <motion.p 
          className="text-2xl text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <TypewriterEffect delay={60} startDelay={1500} />
        </motion.p>

        {/* Update CTA button sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <motion.a 
            href="#about" 
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              whileTap={{ skewX: 0 }}
            />
            <span className="relative text-white font-medium">Cek Profil Saya</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Update scroll indicator sizing */}
  <motion.div 
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="font-inter text-base mb-2">Gulir ke bawah</span>
    <motion.div 
      animate={{ 
        y: [0, 8, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <ChevronDown size={24} />
    </motion.div>
  </motion.div>
</section>

      {/* About Me Section with animated cards */}
      <Section title="Tentang Saya" id="about">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-4xl mx-auto px-4 sm:px-6"
  >
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-700/40 shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/20 shadow-inner shadow-blue-500/5 group-hover:bg-blue-500/15 transition-all duration-300">
            <Code size={36} className="text-blue-400 group-hover:text-blue-300" />
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
            <Tag className="font-inter bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300" icon={<Monitor size={14} />}>Pengembang Web</Tag>
            <Tag className="font-inter bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300" icon={<Server size={14} />}>Backend</Tag>
            <Tag className="font-inter bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300" icon={<Star size={14} />}>UI/UX</Tag>
            <Tag className="font-inter bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition-all duration-300" icon={<Coffee size={14} />}>Pecinta Teknologi</Tag>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 flex flex-wrap gap-5 justify-center sm:justify-start">
      <a
        href='/proyek'
        className="font-inter px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <FolderOpen size={18} /> 
        Lihat Proyek Saya
      </a>
      <a
        href='/kontak'
        className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium rounded-xl border border-gray-600/30 hover:bg-gray-600 hover:translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <MessageSquare size={18} />
        Hubungi Saya
      </a>
    </div>
  </motion.div>
</Section>

      {/* Skills Section with progress bars */}
      <Section title="Skill" subtitle="Kemampuan - kemampuan yang saya kuasai">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillBar />
        </motion.div>
      </Section>

      {/* Experience Section with timeline */}
      <Section title="Pengalaman Kerja" subtitle="Jejak karir profesional">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ExperienceSection />
        </motion.div>
      </Section>

      {/* Replace the old education section with the new component */}
      <EducationSection />

    </main>
  )
}

// Updated TypewriterEffect component
function TypewriterEffect({ delay = 60, startDelay = 1500 }: { delay?: number; startDelay?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true)
    }, startDelay)

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
          setTimeout(() => setIsDeleting(true), 2000)
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
    }, isDeleting ? delay / 2 : delay)

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isDeleting, roleIndex, startTyping])

  return (
    <span className={`bg-gradient-to-r ${ROLES[roleIndex].color} bg-clip-text text-transparent`}>
      {displayText}<span className="animate-pulse">|</span>
    </span>
  )
}

// Update Section component
interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

function Section({ title, subtitle, children, id }: SectionProps) {
  return (
    <section id={id} className="py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-outfit font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {title}
        </h2>
        {subtitle && (
          <p className="font-inter text-gray-400">{subtitle}</p>
        )}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
      </motion.div>
      {children}
    </section>
  )
}

// Experience Section Component
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
            <TimelineItemNew
              key={index}
              index={index}
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

// Update TimelineItemNew component
interface TimelineItemNewProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

function TimelineItemNew({ title, company, period, description, index }: TimelineItemNewProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="mb-12 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute -left-12 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          boxShadow: isHovered ? "0 0 15px rgba(99, 102, 241, 0.6)" : "0 0 0 rgba(99, 102, 241, 0)"
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="font-inter bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 ml-2 border-l-4 border-gradient-to-r from-blue-500 to-purple-600"
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-outfit font-bold text-white">{title}</h3>
          <div className="mt-2 md:mt-0 flex items-center">
            <span className="text-blue-400 font-medium">{company}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-3 py-1 rounded-full">{period}</span>
          </div>
        </div>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
}

// Tag component
function Tag({ children, icon, className }: { children: React.ReactNode; icon: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {icon}
      {children}
    </span>
  )
}