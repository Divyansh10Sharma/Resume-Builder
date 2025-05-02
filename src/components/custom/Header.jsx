import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu, X, MoonStar, Sun } from 'lucide-react'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header({ darkMode, toggleDarkMode }) {
  const { isSignedIn } = useUser()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/dashboard">
          <img src="/logo.svg" alt="Logo" width={150} height={150} className="cursor-pointer" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {isSignedIn ? (
            <>
              <Link to="/plan">
                <Button className="bg-white text-purple-800 border border-purple-700 transition hover:bg-purple-800 hover:text-white hover:shadow-lg hover:scale-105">
                  Premium
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-white text-purple-800 border border-purple-700 transition hover:bg-purple-800 hover:text-white hover:shadow-lg hover:scale-105">
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link to="/auth/sign-in">
              <Button className="bg-white text-purple-800 hover:bg-purple-100 border border-purple-700">
                Get Started
              </Button>
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-4">
          {isSignedIn ? (
            <>
              <Link to="/plan" onClick={() => setMobileMenuOpen(false)}>
                <div className="py-2 text-purple-800 hover:text-purple-600">Premium</div>
              </Link>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <div className="py-2 text-purple-800 hover:text-purple-600">Dashboard</div>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link to="/auth/sign-in" onClick={() => setMobileMenuOpen(false)}>
              <div className="py-2 text-purple-800 hover:text-purple-600">Get Started</div>
            </Link>
          )}
          <button
            onClick={() => {
              toggleDarkMode()
              setMobileMenuOpen(false)
            }}
            className="mt-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
