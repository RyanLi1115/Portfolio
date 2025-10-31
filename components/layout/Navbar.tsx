"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="bg-black border-b border-gray-800 shadow-elevation-1">
      <nav className="container mx-auto px-md py-lg">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
            <Link href="/" className="text-4xl font-bold font-sans text-white hover:text-gray-300 transition-standard">
              Ryan Yiran Li
            </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-xl">
            <Link 
              href="/" 
              className={`text-xl font-bold font-sans px-3 py-sm transition-standard relative ${
                pathname === '/' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              style={{
                marginTop: '-1rem',
                marginBottom: '-1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem'
              }}
            >
              Home
            </Link>
            <Link 
              href="/experience" 
              className={`text-xl font-bold font-sans px-3 py-sm transition-standard relative ${
                pathname === '/experience' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              style={{
                marginTop: '-1rem',
                marginBottom: '-1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem'
              }}
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className={`text-xl font-bold font-sans px-3 py-sm transition-standard relative ${
                pathname === '/projects' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              style={{
                marginTop: '-1rem',
                marginBottom: '-1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem'
              }}
            >
              Projects
            </Link>
            <Link 
              href="/education" 
              className={`text-xl font-bold font-sans px-3 py-sm transition-standard relative ${
                pathname === '/education' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              style={{
                marginTop: '-1rem',
                marginBottom: '-1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem'
              }}
            >
              Education
            </Link>
            <Link 
              href="/contact" 
              className={`text-xl font-bold font-sans px-3 py-sm transition-standard relative ${
                pathname === '/contact' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              style={{
                marginTop: '-1rem',
                marginBottom: '-1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem'
              }}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
