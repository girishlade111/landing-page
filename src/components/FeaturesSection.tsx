'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  PlayIcon, 
  CodeBracketIcon, 
  EyeIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: SparklesIcon,
    title: 'AI Enhancer',
    description: 'Get intelligent suggestions to improve your code structure, performance, and follow best practices automatically.',
    color: 'from-blue-500 to-emerald-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: PlayIcon,
    title: 'Real-Time Compiler',
    description: 'Instantly compile and run your HTML, CSS, and JavaScript with live preview and error detection.',
    color: 'from-emerald-500 to-blue-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: CodeBracketIcon,
    title: 'Smart Editor',
    description: 'Advanced syntax highlighting, auto-formatting, and intelligent code completion for better productivity.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: EyeIcon,
    title: 'Code Viewer',
    description: 'Share and export your compiled previews with clean, responsive design across all devices.',
    color: 'from-indigo-500 to-emerald-500',
    bgColor: 'bg-purple-50'
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Modern Developers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to enhance, compile, and improve your frontend code with AI assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className={`relative inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://code.ladestack.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
          >
            <span>Start Enhancing Your Code</span>
            <motion.svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}