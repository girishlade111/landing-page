'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlayIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function ShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const beforeCode = `// Before AI Enhancement
function UserCard(props) {
  return <div className="user-card">
    <h3>{props.name}</h3>
    <p>{props.email}</p>
    <button onClick={props.onClick}>Click me</button>
  </div>
}`

  const afterCode = `// After AI Enhancement
interface UserProps {
  name: string
  email: string
  onClick?: () => void
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  email, 
  onClick 
}) => {
  return (
    <div className=\"bg-white rounded-lg shadow-md p-6 
                    hover:shadow-lg transition-shadow duration-300
                    border border-gray-200\">
      <h3 className=\"text-xl font-semibold text-gray-800 mb-2\">
        {name}
      </h3>
      <p className=\"text-gray-600 mb-4 break-all\">{email}</p>
      <button 
        onClick={onClick}
        className=\"bg-primary-500 text-white px-4 py-2 
                   rounded-md hover:bg-primary-600 
                   transition-colors duration-200
                   focus:outline-none focus:ring-2 
                   focus:ring-primary-300\"
      >
        View Profile
      </button>
    </div>
  )
}`

  const handlePlayDemo = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <section id="demo" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See the{' '}
            <span className="gradient-text">AI Magic</span> in Action
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Watch how CodeEnhance AI transforms ordinary code into optimized, 
            production-ready solutions with intelligent suggestions and improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Before Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="code-window"
          >
            <div className="code-header">
              <div className="code-dot bg-red-500"></div>
              <div className="code-dot bg-yellow-500"></div>
              <div className="code-dot bg-green-500"></div>
              <span className="ml-4 text-dark-300 text-sm">before.jsx</span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <CodeBracketIcon className="h-5 w-5 text-red-400" />
                <span className="text-red-400 text-sm font-medium">Before AI Enhancement</span>
              </div>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed font-medium">
                <span className="text-red-400">{'// Before AI Enhancement'}</span>
                <span className="block text-gray-300 mt-1">
                  <span className="text-purple-400 font-semibold">function</span> <span className="text-blue-400 font-semibold">UserCard</span>
                  <span className="text-gray-200">(</span><span className="text-green-400 font-semibold">props</span>
                  <span className="text-gray-200">)</span> <span className="text-gray-200">{'{'}</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-gray-200">return</span> <span className="text-gray-200">{'<div '}</span>
                  <span className="text-red-400 font-medium">className</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400 font-medium">"user-card"</span>
                  <span className="text-gray-200">{'>'}</span>
                </span>
                <span className="block text-gray-300 ml-6">
                  <span className="text-gray-200">{'<h3>'}</span>
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-blue-400">props</span>
                  <span className="text-gray-200">.</span>
                  <span className="text-green-400">name</span>
                  <span className="text-yellow-400">{'}'}</span>
                  <span className="text-gray-200">{'</h3>'}</span>
                </span>
                <span className="block text-gray-300 ml-6">
                  <span className="text-gray-200">{'<p>'}</span>
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-blue-400">props</span>
                  <span className="text-gray-200">.</span>
                  <span className="text-green-400">email</span>
                  <span className="text-yellow-400">{'}'}</span>
                  <span className="text-gray-200">{'</p>'}</span>
                </span>
                <span className="block text-gray-300 ml-6">
                  <span className="text-gray-200">{'<button '}</span>
                  <span className="text-red-400">onClick</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-blue-400">props</span>
                  <span className="text-gray-200">.</span>
                  <span className="text-green-400">onClick</span>
                  <span className="text-yellow-400">{'}'}</span>
                  <span className="text-gray-200">{'>'}</span>
                  <span className="text-yellow-400">Click me</span>
                  <span className="text-gray-200">{'</button>'}</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-gray-200">{'</div>'}</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'}'}</span>
                </span>
              </pre>
            </div>
          </motion.div>

          {/* After Code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`code-window ${isPlaying ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25' : ''}`}
          >
            <div className="code-header">
              <div className="code-dot bg-red-500"></div>
              <div className="code-dot bg-yellow-500"></div>
              <div className="code-dot bg-green-500"></div>
              <span className="ml-4 text-dark-300 text-sm">after.jsx</span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-5 w-5 text-sky-400" />
                <span className="text-sky-400 text-sm font-medium">After AI Enhancement</span>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-1"
                  >
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                    <span className="text-sky-400 text-xs">AI Processing...</span>
                  </motion.div>
                )}
              </div>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed font-medium">
                <span className="text-sky-400">{'// After AI Enhancement'}</span>
                <span className="block text-gray-300 mt-1">
                  <span className="text-purple-400 font-semibold">interface</span> <span className="text-blue-400 font-semibold">UserProps</span> <span className="text-gray-200">{'{'}</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400 font-semibold">name</span>
                  <span className="text-gray-200">: </span>
                  <span className="text-orange-400 font-medium">string</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400 font-semibold">email</span>
                  <span className="text-gray-200">: </span>
                  <span className="text-orange-400 font-medium">string</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400 font-semibold">onClick</span>
                  <span className="text-gray-200">?: </span>
                  <span className="text-orange-400 font-medium">() =</span>
                  <span className="text-orange-400 font-medium">{'>'}</span>
                  <span className="text-gray-200"> void</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'}'}</span>
                </span>
                <span className="block text-gray-300 mt-2">
                  <span className="text-blue-400 font-semibold">const UserCard</span>
                  <span className="text-gray-200">: </span>
                  <span className="text-purple-400 font-semibold">React.FC</span>
                  <span className="text-gray-200">{'<'}</span>
                  <span className="text-blue-400">UserProps</span>
                  <span className="text-gray-200">{'>'} =</span>
                  <span className="text-gray-200"> ({'</'}</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400">name</span>
                  <span className="text-gray-200">,</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400">email</span>
                  <span className="text-gray-200">,</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-green-400">onClick</span>
                </span>
                <span className="block text-gray-300 ml-2">
                  <span className="text-gray-200">{'}) ='}</span>
                  <span className="text-gray-200">{'>{'}</span>
                </span>
                <span className="block text-gray-300 ml-4">
                  <span className="text-gray-200">return</span>
                  <span className="text-gray-200"> (</span>
                </span>
                <span className="block text-gray-300 ml-6">
                  <span className="text-gray-200">{'<div '}</span>
                  <span className="text-red-400">className</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'>'}</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'<h3 '}</span>
                  <span className="text-red-400">className</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">"text-xl font-semibold text-gray-800 mb-2"</span>
                </span>
                <span className="block text-gray-300 ml-12">
                  <span className="text-gray-200">{'>'}</span>
                </span>
                <span className="block text-gray-300 ml-14">
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-green-400">name</span>
                  <span className="text-yellow-400">{'}'}</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'</h3>'}</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'<p '}</span>
                  <span className="text-red-400">className</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">"text-gray-600 mb-4 break-all"</span>
                </span>
                <span className="block text-gray-300 ml-12">
                  <span className="text-gray-200">{'>'}</span>
                </span>
                <span className="block text-gray-300 ml-14">
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-green-400">email</span>
                  <span className="text-yellow-400">{'}'}</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'</p>'}</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'<button '}</span>
                  <span className="text-red-400">onClick</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">{'{'}</span>
                  <span className="text-green-400">onClick</span>
                  <span className="text-yellow-400">{'}'}</span>
                </span>
                <span className="block text-gray-300 ml-12">
                  <span className="text-red-400">className</span>
                  <span className="text-gray-200">=</span>
                  <span className="text-yellow-400">"bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"</span>
                </span>
                <span className="block text-gray-300 ml-12">
                  <span className="text-gray-200">{'>'}</span>
                </span>
                <span className="block text-gray-300 ml-14">
                  <span className="text-yellow-400">View Profile</span>
                </span>
                <span className="block text-gray-300 ml-8">
                  <span className="text-gray-200">{'</button>'}</span>
                </span>
                <span className="block text-gray-300 ml-6">
                  <span className="text-gray-200">{'</div>'}</span>
                </span>
                <span className="block text-gray-300 ml-2">
                  <span className="text-gray-200">)</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'}'}</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">)</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'})'}</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'}'}</span>
                </span>
                <span className="block text-gray-300">
                  <span className="text-gray-200">{'}'}</span>
                </span>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Demo Controls with Subtle Gradient Border Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={handlePlayDemo}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(0, 191, 166, 0.2)"
            }}
            whileTap={{ scale: 0.95, y: 0 }}
            className="btn-primary text-lg px-10 py-4 inline-flex items-center space-x-3 relative overflow-hidden group border-2 border-transparent"
            style={{
              background: "linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 191, 166, 0.1) 100%)",
              backdropFilter: "blur(10px)"
            }}
          >
            {/* Subtle gradient border animation */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #00BFA6, #3B82F6)",
                backgroundSize: "200% 100%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Glowing background effect with brand colors */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100"
              whileHover={{
                opacity: [0, 0.2, 0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            
            {/* Pulsing ring effect with brand colors */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #00BFA6) border-box",
                mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract"
              }}
              animate={{
                scale: [1, 1.05, 1.1, 1],
                opacity: [0, 0.6, 0, 0.4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="relative z-10 flex items-center space-x-3"
              whileHover={{ x: 2 }}
            >
              <motion.div
                animate={isPlaying ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
              >
                <PlayIcon className="h-6 w-6" />
              </motion.div>
              <span className="font-semibold">{isPlaying ? 'Enhancing...' : 'Play Demo'}</span>
            </motion.div>
            
            {/* Enhanced sparkle effects with brand colors */}
            <motion.div
              className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-white to-emerald-300 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                y: [0, -8, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3
              }}
            />
            <motion.div
              className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-blue-300 to-white rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                y: [0, 6, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.8
              }}
            />
            
            {/* Additional floating particles */}
            <motion.div
              className="absolute top-1/3 left-4 w-0.5 h-0.5 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                x: [0, 10, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.2
              }}
            />
            <motion.div
              className="absolute top-2/3 right-4 w-0.5 h-0.5 bg-emerald-400/50 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                x: [0, -8, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.6
              }}
            />
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-6 w-6 text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Optimization</h3>
            <p className="text-dark-300 text-sm">AI analyzes your code and suggests performance improvements</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CodeBracketIcon className="h-6 w-6 text-accent-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Best Practices</h3>
            <p className="text-dark-300 text-sm">Automatically applies coding standards and modern patterns</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Type Safety</h3>
            <p className="text-dark-300 text-sm">Adds proper typing and prevents runtime errors</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}