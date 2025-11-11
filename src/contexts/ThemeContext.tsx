'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'ocean' | 'midnight'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: { id: Theme; name: string; colors: string[] }[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const themes = [
  {
    id: 'light' as Theme,
    name: 'Light',
    colors: ['#f8fafc', '#ffffff', '#e2e8f0']
  },
  {
    id: 'dark' as Theme,
    name: 'Dark',
    colors: ['#0f172a', '#1e293b', '#334155']
  },
  {
    id: 'ocean' as Theme,
    name: 'Ocean',
    colors: ['#0c4a6e', '#0369a1', '#0284c7']
  },
  {
    id: 'midnight' as Theme,
    name: 'Midnight',
    colors: ['#1e0a3c', '#3b1c6b', '#5a21b2']
  }
]

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
    
    // Apply theme to document
    const root = document.documentElement
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'ocean', 'midnight')
    
    // Add current theme class
    root.classList.add(theme)
    
    // Set CSS custom properties based on theme
    switch (theme) {
      case 'dark':
        root.style.setProperty('--bg-primary', '#0f172a')
        root.style.setProperty('--bg-secondary', '#1e293b')
        root.style.setProperty('--bg-tertiary', '#334155')
        root.style.setProperty('--text-primary', '#f1f5f9')
        root.style.setProperty('--text-secondary', '#cbd5e1')
        root.style.setProperty('--text-tertiary', '#94a3b8')
        break
      case 'ocean':
        root.style.setProperty('--bg-primary', '#0c4a6e')
        root.style.setProperty('--bg-secondary', '#0369a1')
        root.style.setProperty('--bg-tertiary', '#0284c7')
        root.style.setProperty('--text-primary', '#f0f9ff')
        root.style.setProperty('--text-secondary', '#e0f2fe')
        root.style.setProperty('--text-tertiary', '#bae6fd')
        break
      case 'midnight':
        root.style.setProperty('--bg-primary', '#1e0a3c')
        root.style.setProperty('--bg-secondary', '#3b1c6b')
        root.style.setProperty('--bg-tertiary', '#5a21b2')
        root.style.setProperty('--text-primary', '#f3e8ff')
        root.style.setProperty('--text-secondary', '#e9d5ff')
        root.style.setProperty('--text-tertiary', '#d8b4fe')
        break
      default: // light
        root.style.setProperty('--bg-primary', '#f8fafc')
        root.style.setProperty('--bg-secondary', '#ffffff')
        root.style.setProperty('--bg-tertiary', '#e2e8f0')
        root.style.setProperty('--text-primary', '#0f172a')
        root.style.setProperty('--text-secondary', '#334155')
        root.style.setProperty('--text-tertiary', '#64748b')
        break
    }
  }, [theme])

  const value = {
    theme,
    setTheme,
    themes
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}