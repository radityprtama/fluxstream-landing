import React, { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import type { NavItem } from '../../types'

const navItems: Array<NavItem> = [
  { label: 'Features', href: '#features' },
  { label: 'Integration', href: '#integration' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#footer' },
]

export const DEMO_REQUEST_PATH = '/demo-request' as const

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2 font-display font-bold text-2xl text-slate-900 tracking-tight cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            FluxStream
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant={'ghost'}
            className="hidden md:block text-sm font-semibold text-slate-900 hover:text-brand-600"
          >
            Log in
          </Button>
          <Link to="/demo-request">
            <Button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
