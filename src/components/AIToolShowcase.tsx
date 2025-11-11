'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  PlayIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  BoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: PlayIcon,
    title: 'Real-Time Compilation',
    description: 'Instantly compile and preview your code with live error detection and suggestions.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: CpuChipIcon,
    title: 'AI Suggestions',
    description: 'Get intelligent code improvements and optimization recommendations powered by AI.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-50 dark:bg-sky-900/20'
  },
  {
    icon: CodeBracketIcon,
    title: 'Smart Syntax',
    description: 'Advanced syntax highlighting and intelligent code completion for all supported languages.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
]

export default function AIToolShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-white/80 via-blue-50/80 to-indigo-50/80 dark:from-dark-800/80 dark:via-dark-700/80 dark:to-dark-600/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 dark:border-blue-700/50 mb-6"
          >
            <SparklesIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">AI-Powered Tool</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-6">
            Experience the{' '}
            <span className="gradient-text">AI-Powered Code Editor</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Code, compile, and enhance HTML, CSS, and JS with real-time AI assistance. 
            Transform your development workflow with intelligent code enhancement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Tool Preview/Screenshot with Soft Glowing Border */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing border effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur opacity-75"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Mockup Tool Interface */}
          <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50 shadow-2xl">
            {/* Tool Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-dark-600 dark:text-dark-300 font-mono">
                  CodeEnhance AI
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                />
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">AI Active</span>
              </div>
            </div>

              {/* Code Editor Mockup */}
              <div className="bg-code-bg border border-code-border rounded-lg overflow-hidden mb-4">
                <div className="code-header">
                  <div className="code-dot bg-red-500"></div>
                  <div className="code-dot bg-yellow-500"></div>
                  <div className="code-dot bg-green-500"></div>
                  <span className="ml-4 text-dark-300 text-sm">index.html</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <SparklesIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">AI Enhancement Active</span>
                  </div>
                  <pre className="text-sm text-dark-200 font-mono">
                    <div className="text-blue-400">{'<!DOCTYPE html>'}</div>
                    <div className="text-gray-400">{'<html lang="en">'}</div>
                    <div className="ml-2 text-gray-400">{'<head>'}</div>
                    <div className="ml-4 text-yellow-400">{'<title>AI Enhanced Page</title>'}</div>
                    <div className="ml-4 text-green-400">{'<!-- Optimized by CodeEnhance AI -->'}</div>
                    <div className="ml-2 text-gray-400">{'</head>'}</div>
                    <div className="ml-2 text-gray-400">{'<body>'}</div>
                    <div className="ml-4 text-purple-400">{'<div class="enhanced-container">'}</div>
                    <div className="ml-6 text-blue-400">{'Code with AI Intelligence'}</div>
                    <div className="ml-4 text-purple-400">{'</div>'}</div>
                    <div className="ml-2 text-gray-400">{'</body>'}</div>
                    <div className="text-gray-400">{'</html>'}</div>
                  </pre>
                </div>
              </div>

              {/* AI Suggestions Panel */}
              <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200/50 dark:border-blue-700/50">
                <div className="flex items-center space-x-2 mb-3">
                  <CpuChipIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">AI Suggestions</span>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    ✓ Add semantic HTML5 elements for better accessibility
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    ✓ Implement responsive CSS Grid for better layout
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    ✓ Add ARIA labels for improved screen reader support
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <BoltIcon className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <EyeIcon className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-800 dark:text-white mb-8">
              Powerful Features at Your{' '}
              <span className="gradient-text">Fingertips</span>
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm border border-white/20 dark:border-dark-700/50 hover:border-blue-300/50 dark:hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    {/* Minimal icon */}
                    <div className={`flex-shrink-0 p-2 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300 group-hover:text-dark-700 dark:group-hover:text-dark-200 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Centered and Enlarged CTA Button with Microtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8 text-center"
            >
              <motion.a
                href="https://code.ladestack.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4), 0 0 30px rgba(0, 191, 166, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-xl px-12 py-5 inline-flex items-center space-x-3 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-20"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 0.4 }}
                />
                <SparklesIcon className="h-6 w-6 relative z-10" />
                <span className="relative z-10 font-semibold">Try CodeEnhance AI</span>
                <motion.svg
                  className="w-6 h-6 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
              
              {/* Microtext under CTA */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-sm text-dark-500 dark:text-dark-400 mt-3"
              >
                No sign-up required. Try instantly in your browser.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}