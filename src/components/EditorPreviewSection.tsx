'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  PlayIcon,
  CodeBracketIcon,
  SparklesIcon,
  CpuChipIcon,
  EyeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import TypingAnimation from './TypingAnimation'
import AnimatedCounter from './AnimatedCounter'
import ThemeSwitcher from './ThemeSwitcher'

export default function EditorPreviewSection() {
  const [activeTab, setActiveTab] = useState('html')
  const [isAIProcessing, setIsAIProcessing] = useState(false)

  const codeExamples = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Page</title>
    <style>
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AI Enhanced Design</h1>
        <p>Optimized with best practices</p>
    </div>
</body>
</html>`,
    css: `/* AI-Enhanced CSS */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.container:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}`,
    js: `// AI-Enhanced JavaScript
class CodeEnhancer {
    constructor() {
        this.enhancements = [];
        this.aiPowered = true;
    }
    
    async enhanceCode(code) {
        // AI processes code
        return await this.applyImprovements(code);
    }
    
    applyImprovements(code) {
        return {
            ...code,
            optimized: true,
            aiEnhanced: true,
            performanceScore: 95
        };
    }
}

const enhancer = new CodeEnhancer();
enhancer.enhanceCode(sampleCode);`
  }

  const aiSuggestions = [
    "Add semantic HTML5 elements for better accessibility",
    "Implement CSS Grid for improved responsive layout", 
    "Use CSS custom properties for maintainable styling",
    "Add ARIA labels for screen reader compatibility",
    "Optimize image loading with lazy loading attributes"
  ]

  return (
    <section id="editor-preview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Editor in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our AI-powered code editor with real-time enhancements, 
            intelligent suggestions, and instant preview capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glassmorphism Editor Window */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Editor Header */}
              <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">CodeEnhance AI Editor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ThemeSwitcher />
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                    <span className="text-green-400 text-xs font-medium">AI Active</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 flex space-x-1">
                {[
                  { id: 'html', label: 'HTML', icon: CodeBracketIcon },
                  { id: 'css', label: 'CSS', icon: SparklesIcon },
                  { id: 'js', label: 'JavaScript', icon: BeakerIcon }
                ].map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Code Content */}
              <div className="p-6 bg-gray-900/50">
                <div className="flex items-center space-x-2 mb-4">
                  <SparklesIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">AI Enhancement Active</span>
                </div>
                <pre className="text-sm text-gray-200 font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <TypingAnimation
                      texts={[codeExamples[activeTab as keyof typeof codeExamples]]}
                      typingSpeed={30}
                      className="text-gray-200"
                    />
                  </code>
                </pre>
              </div>

              {/* Bottom Bar */}
              <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-4">
                  <span>Line 1, Col 1</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CpuChipIcon className="h-3 w-3" />
                  <span>AI Processing: {isAIProcessing ? 'Active' : 'Standby'}</span>
                </div>
              </div>
            </div>

            {/* Floating AI Indicator */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full p-3 shadow-lg"
            >
              <SparklesIcon className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>

          {/* AI Suggestions Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              AI Suggestions{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                in Real-Time
              </span>
            </h3>

            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 hover:border-blue-300/50 transition-all cursor-pointer group"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                    <SparklesIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 group-hover:text-gray-900 transition-colors">
                      {suggestion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { value: "95%", label: "Performance Score" },
                { value: "2.3s", label: "Compile Time" },
                { value: "12", label: "AI Suggestions" },
                { value: "100%", label: "Accuracy" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
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
                className="w-full inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
              >
                <PlayIcon className="h-5 w-5" />
                <span>Try the Live Editor</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}