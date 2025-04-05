'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, JSX } from 'react'
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && e.target instanceof Node && !document.querySelector('nav')?.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-gray-900 py-4'
      } text-white px-4 sm:px-6 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.h1 
          className="text-2xl font-bold font-outfit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PortoDims
          </span>
        </motion.h1>

        {/* Hamburger button with enhanced animation */}
        <motion.div 
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation()
              toggleMenu()
            }}
            aria-label="Toggle Menu"
            className="p-2 rounded-full hover:bg-gray-800 active:bg-gray-700 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-inter">
          <NavLinks pathname={pathname} />
        </div>
      </div>

      {/* Mobile Menu with enhanced animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="md:hidden mt-4 font-inter"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="flex flex-col rounded-lg overflow-hidden border border-gray-700 bg-gray-800/90 backdrop-blur-sm"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 }
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <MobileNavLinks pathname={pathname} setIsOpen={setIsOpen} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {[
        { href: '/', label: 'Beranda' },
        { href: '/proyek', label: 'Proyek' },
        { href: '/kontak', label: 'Kontak' }
      ].map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <Link href={link.href}>
            <div
              className={`relative text-lg font-medium hover:text-blue-400 transition-colors ${
                pathname === link.href ? 'text-blue-400' : 'text-white'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-0.5 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                />
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  )
}

function MobileNavLinks({ pathname, setIsOpen }: { pathname: string, setIsOpen: (isOpen: boolean) => void }) {
  // Define the icon map with type safety
  const iconMap: Record<string, JSX.Element> = {
    '/': <Home size={18} />,
    '/tentang': <User size={18} />,
    '/proyek': <Briefcase size={18} />,
    '/kontak': <Mail size={18} />
  }

  return (
    <>
      {[
        { href: '/', label: 'Beranda' },
        { href: '/proyek', label: 'Proyek' },
        { href: '/kontak', label: 'Kontak' }
      ].map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-4 py-3 font-medium ${
            pathname === link.href 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'hover:bg-gray-700/70 active:bg-gray-700'
          }`}
        >
          <span className={`${pathname === link.href ? 'text-blue-400' : 'text-gray-400'}`}>
            {/* Use type safe access to the icon map */}
            {iconMap[link.href as keyof typeof iconMap]}
          </span>
          {link.label}
          {pathname === link.href && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
          )}
        </Link>
      ))}
    </>
  )
}