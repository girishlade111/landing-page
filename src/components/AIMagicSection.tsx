'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  PlayIcon, 
  CodeBracketIcon, 
  SparklesIcon,
  ArrowRightIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'

export default function AIMagicSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const beforeCode = `// Before AI Enhancement
function UserCard(props) {
  return <div className="user-card">
    <h3>{props.name}</h3>
    <p>{props.email}</p>
    <button onClick={props.onClick}>Click me</button>
  </div>
}`

  const afterCode = `// After AI Enhancement ✨
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
    <div className="bg-white rounded-lg shadow-md p-6 
                    hover:shadow-lg transition-shadow duration-300
                    border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {name}
      </h3>
      <p className="text-gray-600 mb-4 break-all">{email}</p>
      <button 
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 
                   rounded-md hover:bg-blue-600 
                   transition-colors duration-200
                   focus:outline-none focus:ring-2 
                   focus:ring-blue-300"
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
    <section id="ai-magic" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-emerald-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              AI Magic
            </span>{' '}
            in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
            className="bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
          >
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700/50">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">before.tsx</span>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <CodeBracketIcon className="h-5 w-5 text-red-400" />
                <span className="text-red-400 text-sm font-medium">Before AI Enhancement</span>
              </div>
              <pre className="text-sm text-gray-200 font-mono whitespace-pre-wrap leading-relaxed">
                {beforeCode}
              </pre>
            </div>
          </motion.div>

          {/* After Code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`bg-gray-800/90 backdrop-blur-sm rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
              isPlaying ? 'border-emerald-400/50 shadow-emerald-400/20' : 'border-gray-700/50'
            }`}
          >
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700/50">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">after.tsx</span>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">After AI Enhancement</span>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-1"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-xs">AI Processing...</span>
                  </motion.div>
                )}
              </div>
              <pre className="text-sm text-gray-200 font-mono whitespace-pre-wrap leading-relaxed">
                {afterCode}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={isPlaying ? { 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            } : {}}
            transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            <ArrowRightIcon className="h-5 w-5" />
            <span>AI Transformation</span>
            <ArrowDownIcon className="h-5 w-5" />
          </motion.div>
        </motion.div>

        {/* Demo Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={handlePlayDemo}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg inline-flex items-center space-x-3"
          >
            <motion.div
              animate={isPlaying ? { 
                rotate: 360,
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
            >
              <PlayIcon className="h-6 w-6" />
            </motion.div>
            <span>{isPlaying ? 'Enhancing with AI...' : 'Play Demo'}</span>
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "Smart Optimization",
              description: "AI analyzes your code and suggests performance improvements",
              icon: SparklesIcon,
              color: "text-blue-400"
            },
            {
              title: "Best Practices",
              description: "Automatically applies coding standards and modern patterns",
              icon: CodeBracketIcon,
              color: "text-emerald-400"
            },
            {
              title: "Type Safety",
              description: "Adds proper typing and prevents runtime errors",
              icon: ArrowRightIcon,
              color: "text-purple-400"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700/50">
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}