import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-background border-b border-border-subtle shadow-elevation-1">
      <nav className="container mx-auto px-md py-sm">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
            <Link href="/" className="text-main-lg font-display text-text-primary hover:text-interactive transition-standard">
              Ryan Yiran Li
            </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-xl">
            <Link 
              href="/" 
              className="text-section font-display text-text-secondary hover:text-text-hover transition-standard"
            >
              Home
            </Link>
            <Link 
              href="/experience" 
              className="text-section font-display text-text-secondary hover:text-text-hover transition-standard"
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="text-section font-display text-text-secondary hover:text-text-hover transition-standard"
            >
              Projects
            </Link>
            <Link 
              href="/education" 
              className="text-section font-display text-text-secondary hover:text-text-hover transition-standard"
            >
              Education
            </Link>
            <Link 
              href="/contact" 
              className="text-section font-display text-text-secondary hover:text-text-hover transition-standard"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
