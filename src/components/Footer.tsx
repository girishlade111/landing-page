'use client'

import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  UserIcon,
  CodeBracketIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import ThemeSwitcher from './ThemeSwitcher'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/girish_lade_/',
    icon: '📸',
    color: 'hover:text-pink-500'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/girish-lade-075bba201/',
    icon: '💼',
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/girishlade111',
    icon: '⚡',
    color: 'hover:text-gray-800'
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/Girish-Lade-the-looper',
    icon: '🎨',
    color: 'hover:text-black'
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <CodeBracketIcon className="h-8 w-8 text-blue-400" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Lade Stack
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering developers with AI-powered code enhancement tools. 
              Build better, faster, and smarter with CodeEnhance AI.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <span className="text-sm text-gray-400">Empowering Developers through AI-Integrated Tools</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Features', href: '#features' },
                { name: 'About Creator', href: '#about' },
                { name: 'Editor Preview', href: '#editor-preview' },
                { name: 'AI Magic', href: '#ai-magic' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <motion.a
                  href="https://ladestack.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm relative group"
                  whileHover={{ x: 2 }}
                >
                  Visit LadeStack.in
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Features</h4>
            <ul className="space-y-2">
              {[
                'AI Code Enhancement',
                'Real-Time Compiler',
                'Smart Editor',
                'Code Viewer',
                'Performance Optimization'
              ].map((feature) => (
                <li key={feature} className="text-gray-300 text-sm">{feature}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect with Girish Lade</h4>
            <div className="space-y-3">
              <a
                href="mailto:girishlade111@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <EnvelopeIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">girishlade111@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <UserIcon className="h-5 w-5" />
                <span className="text-sm">UX/UI Designer & Developer</span>
              </div>
              <div className="pt-2">
                <div className="text-sm text-gray-400 mb-2">Theme</div>
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h5 className="text-lg font-semibold text-white mb-3">Follow Me</h5>
              <div className="flex justify-center md:justify-start space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2,
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl ${link.color} transition-all duration-300 relative group`}
                    title={link.name}
                  >
                    <span className="relative z-10">{link.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 text-gray-300"
              >
                <span className="text-sm">Built with</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ef4444"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HeartIcon className="h-4 w-4 fill-current" />
                </motion.div>
                <motion.a
                  href="https://ladestack.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors relative group"
                >
                  LadeStack.in
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Lade Stack. All rights reserved. | Created by{' '}
            <motion.span 
              className="text-blue-400 font-medium"
              whileHover={{ 
                color: "#00BFA6",
                textShadow: "0 0 6px rgba(0, 191, 166, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              Girish Lade
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}