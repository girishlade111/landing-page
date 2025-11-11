'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  XMarkIcon,
  SparklesIcon,
  CodeBracketIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [userCode, setUserCode] = useState('// Your code here\nfunction hello() {\n  console.log("Hello World");\n}')
  const [enhancedCode, setEnhancedCode] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleEnhance = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setEnhancedCode(`// ✨ AI Enhanced Code
function hello(): void {
    // Optimized and enhanced with TypeScript
    const message: string = "Hello World!";
    
    // Added error handling and performance optimization
    try {
        console.log(\`🚀 Enhanced: \${message}\`);
        return true;
    } catch (error) {
        console.error("Error occurred:", error);
        return false;
    }
}

// AI added TypeScript interface
interface Logger {
    message: string;
    timestamp: Date;
}

// AI suggested using async/await pattern
const enhancedLogger = async (): Promise<void> => {
    const timestamp = new Date();
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log(\`📊 Performance: \${Date.now() - timestamp.getTime()}ms\`);
}`)

      setIsProcessing(false)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold">CodeEnhance AI Demo</h2>
                    <p className="text-blue-100">Try our AI-powered code enhancement</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600" />
                    <span>Your Code</span>
                  </h3>
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Paste your code here..."
                  />
                  <motion.button
                    onClick={handleEnhance}
                    disabled={isProcessing}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <CpuChipIcon className="h-5 w-5" />
                        </motion.div>
                        <span>AI is enhancing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <SparklesIcon className="h-5 w-5" />
                        <span>Enhance with AI</span>
                      </div>
                    )}
                  </motion.button>
                </div>

                {/* Output Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <SparklesIcon className="h-5 w-5 text-emerald-600" />
                    <span>AI Enhanced Code</span>
                  </h3>
                  <div className="h-64 p-4 border border-gray-300 rounded-lg bg-gray-900 text-gray-200 font-mono text-sm overflow-auto">
                    {enhancedCode ? (
                      <pre>{enhancedCode}</pre>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        {isProcessing ? "AI is processing..." : "Click 'Enhance with AI' to see the magic ✨"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: "🚀", title: "Performance", desc: "Optimized code structure" },
                  { icon: "🛡️", title: "Type Safety", desc: "Added TypeScript support" },
                  { icon: "⚡", title: "Best Practices", desc: "Modern coding patterns" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg border border-blue-100"
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Ready to enhance your code with AI?</p>
                <motion.a
                  href="https://code.ladestack.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
                >
                  <span>Start Using CodeEnhance AI</span>
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}