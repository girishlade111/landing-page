'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  SunIcon, 
  MoonIcon, 
  SwatchIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { useTheme, themes } from '../contexts/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme, themes: themeList } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const getThemeIcon = (themeId: string) => {
    switch (themeId) {
      case 'dark':
      case 'midnight':
        return MoonIcon
      default:
        return SunIcon
    }
  }

  const getThemeColor = (themeId: string) => {
    switch (themeId) {
      case 'dark':
        return 'from-gray-800 to-gray-900'
      case 'ocean':
        return 'from-blue-600 to-cyan-600'
      case 'midnight':
        return 'from-purple-800 to-indigo-900'
      default:
        return 'from-yellow-400 to-orange-500'
    }
  }

  return (
    <div className="relative">
      {/* Theme Switcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      >
        <div className="flex items-center space-x-2">
          {(() => {
            const IconComponent = getThemeIcon(theme)
            return <IconComponent className="h-5 w-5 text-white" />
          })()}
          <span className="text-sm font-medium text-white hidden sm:block">
            {themeList.find(t => t.id === theme)?.name}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon className="h-4 w-4 text-white" />
          </motion.div>
        </div>

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20"
        />
      </motion.button>

      {/* Theme Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-48 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              <div className="text-xs font-medium text-white/70 px-3 py-2 uppercase tracking-wider">
                Choose Theme
              </div>
              {themeList.map((themeOption, index) => {
                const IconComponent = getThemeIcon(themeOption.id)
                const isActive = theme === themeOption.id
                
                return (
                  <motion.button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id as any)
                      setIsOpen(false)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <div className={`p-1.5 rounded-md bg-gradient-to-r ${getThemeColor(themeOption.id)}`}>
                      <IconComponent className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium text-sm">{themeOption.name}</span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>
    </div>
  )
}