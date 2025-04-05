'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  category: string[]
  image: string
  technologies: string[]
  description: string
  longDescription?: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Website Kasir Restoran',
    category: ['Laravel'],
    image: '/projects/restoran.png',
    technologies: ['Laravel', 'MySQL', 'Tailwind'],
    description: 'Aplikasi kasir restoran berbasis web menggunakan Laravel dengan fitur manajemen produk, transaksi, dan laporan.',
    longDescription: 'Aplikasi Kasir Laravel adalah sistem point of sale (POS) yang komprehensif untuk bisnis retail. Aplikasi ini memiliki fitur manajemen inventaris yang kuat, pemrosesan transaksi yang cepat, pencetakan nota, dan sistem pelaporan yang detail. Sistem ini dapat mengelola berbagai jenis produk, kategori, dan harga dengan mudah. Dashboard admin memungkinkan pemilik bisnis untuk memantau penjualan dan inventaris. Selain itu, aplikasi ini mengimplementasikan sistem role-based access control untuk keamanan yang optimal.',
    link: '#'
  },
  {
    id: 2,
    title: 'NiMpo XXI',
    category: ['Laravel'],
    image: '/projects/bioskop.png',
    technologies: ['Laravel', 'MySQL', 'Tailwind'],
    description: 'Aplikasi kasir bioskop berbasis web menggunakan Laravel dengan fitur manajemen produk, transaksi, dan laporan.',
    longDescription: 'NiMpo XXI adalah aplikasi kasir berbasis web yang dikembangkan menggunakan framework Laravel, dirancang khusus untuk mendukung operasional kasir bioskop. Aplikasi ini mempermudah petugas dalam mengelola penjualan tiket film, makanan, hingga pelaporan transaksi secara real-time. Aplikasi ini dibangun dengan fokus pada kemudahan penggunaan, pengelolaan data yang efisien, dan tampilan yang ramah pengguna, sehingga cocok digunakan oleh staf kasir tanpa perlu pelatihan teknis mendalam.',
    link: '#'
  },
]

export default function Proyek() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Filter projects based on category and search term
  const filteredProjects = projects
    .filter(project => selectedCategory === 'ALL' || project.category.includes(selectedCategory))
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null)
      }
    }
    
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [selectedProject])

  // Handle click outside to close modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen py-16 relative">
      {/* Add animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {isLoaded && Array(20).fill(0).map((_, i) => (
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
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
            }}
          />
        ))}
      </div>

      {/* Add gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-0" />

      {/* Update the content container to be relative */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Project Saya
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Kumpulan karya terbaru saya dari berbagai teknologi dan bidang. Jelajahi proyek-proyeknya untuk melihat detail dan implementasinya.
          </p>
        </motion.div>
        
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <motion.div 
                animate={{ 
                  width: isSearchFocused ? '100%' : '100%',
                  boxShadow: isSearchFocused ? '0 4px 14px rgba(0, 0, 0, 0.1)' : '0 2px 5px rgba(0, 0, 0, 0.05)'
                }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-800 text-white"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute right-3 top-3"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              {['ALL', 'Laravel', 'NextJS', 'UI/UX'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md'
                      : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-blue-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3} // Load first 3 images immediately
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-white font-medium py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {project.category[0]}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg 
                className="w-16 h-16 text-gray-600 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-400 mb-1">Project Tidak Ada</h3>
              <p className="text-gray-500">Project nya belum ada atau silakan anda ubah filter nya</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 
              scrollbar-thin scrollbar-track-gray-800/40 scrollbar-thumb-blue-600/60 hover:scrollbar-thumb-blue-500/80
              scroll-smooth"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-80 md:h-96">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  quality={100}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.category.map((cat) => (
                      <span
                        key={cat}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Project Description</h3>
                  <p className="text-gray-400">{selectedProject.longDescription || selectedProject.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      View Live Project
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-400 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}