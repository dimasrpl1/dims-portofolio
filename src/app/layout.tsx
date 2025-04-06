import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import ScrollToTop from '@/components/ScrollToTop' // Add this import


const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dims Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <CTASection />
        <ScrollToTop />
      </body>
    </html>
  )
}
