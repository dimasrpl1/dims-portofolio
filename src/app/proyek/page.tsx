'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/utils/supabase'
import { techIconMap } from '@/utils/techIcons'

interface Project {
  id: string // Change to string since Supabase uses UUID
  title: string
  category: string[]
  image: string
  technologies: string[]
  description: string
  longDescription?: string
  link?: string
}

export default function Proyek() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializePage = async () => {
      try {
        await fetchProjects()
      } catch (error) {
        console.error('Failed to initialize page:', error)
      } finally {
        setIsLoaded(true)
      }
    }

    initializePage()
  }, [])

  async function fetchProjects() {
    try {
      setLoading(true)
      
      // Check if Supabase client is properly initialized
      if (!supabase) {
        throw new Error('Supabase client is not initialized')
      }

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      if (data) {
        const projectsWithUrls = await Promise.all(data.map(async (project) => {
          // Clean up image path
          const cleanImagePath = project.image.replace(
            /^https:\/\/.*\/storage\/v1\/object\/public\/project-images\//,
            ''
          )

          // Get public URL with error handling
          const { data: storageData } = supabase
            .storage
            .from('project-images')
            .getPublicUrl(cleanImagePath)

          if (!storageData || !storageData.publicUrl) {
            console.error('Error getting public URL for:', cleanImagePath)
            return null
          }

          return {
            ...project,
            category: Array.isArray(project.category) ? project.category : [project.category],
            technologies: Array.isArray(project.technologies) 
              ? project.technologies 
              : project.technologies.split(','),
            image: storageData.publicUrl
          }
        }))

        // Filter out any null values from failed image URLs
        const validProjects = projectsWithUrls.filter((p): p is Project => p !== null)
        setProjects(validProjects)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
      // You might want to set an error state here to show to the user
    } finally {
      setLoading(false)
    }
  }

  // Filter projects based on category and search term
  const filteredProjects = projects
    .filter(project => selectedCategory === 'ALL' || project.category.includes(selectedCategory))
    .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))

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
          <div className="mb-6">
            <motion.div 
              className="flex justify-center gap-4 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ gap: '20px', transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                whileHover={{ width: '100px', transition: { duration: 0.3 } }}
              />
              <motion.div 
                className="w-8 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                whileHover={{ width: '40px', transition: { duration: 0.3 } }}
              />
            </motion.div>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
                Portofolio Proyek
              </span>
            </h1>
          </div>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto">
            Kumpulan karya terbaik yang telah saya kerjakan. Jelajahi setiap proyek untuk melihat detail implementasinya.
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
                  placeholder="Cari proyek..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-800 text-white font-inter"
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
          {loading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-56 bg-gray-700" />
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-gray-700 rounded w-full mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-700 rounded w-16" />
                    <div className="h-6 bg-gray-700 rounded w-16" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredProjects.length > 0 ? (
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
                    priority={index < 3}
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
              <h3 className="text-xl font-medium text-gray-400 mb-1 font-outfit">Proyek Tidak Ditemukan</h3>
              <p className="text-gray-500 font-inter">Silakan coba dengan kata kunci lain atau ubah filter yang digunakan</p>
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
                      className="bg-red-500/20 backdrop-blur-md text-red-500 p-2 rounded-full hover:bg-red-500/30 hover:text-red-400 transition-all duration-300"
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
                  <h3 className="text-xl font-semibold text-white mb-2 font-outfit">Deskripsi Proyek</h3>
                  <p className="text-gray-400 font-inter">{selectedProject.longDescription || selectedProject.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 font-outfit">
                    Teknologi yang Digunakan
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {techIconMap[tech] && (
                          <div className="w-5 h-5 relative flex-shrink-0">
                            <Image
                              src={techIconMap[tech]}
                              alt={tech}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-300">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center font-inter"
                    >
                      Lihat Proyek
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center font-inter"
                  >
                    Tutup
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