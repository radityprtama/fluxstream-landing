import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { IconArrowRight } from './ui/Icons'

export const StickyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="bg-slate-900/95 backdrop-blur-lg border border-slate-800 p-2 pl-6 rounded-full shadow-2xl flex items-center gap-4 md:gap-8 pointer-events-auto ring-1 ring-white/10 max-w-full overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 shrink-0">
              <span className="text-white font-semibold text-sm">
                Transform your operations
              </span>
              <span className="text-slate-400 text-xs md:text-sm hidden sm:inline-block">
                Join 500+ engineering teams today.
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button className="px-3 md:px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap hidden xs:block">
                Talk to Sales
              </Button>
              <Link to="/demo-request">
                <Button className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-500/20 transition-all flex items-center gap-2 group whitespace-nowrap">
                  Request Demo
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
