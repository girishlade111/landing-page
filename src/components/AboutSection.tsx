import { motion } from 'framer-motion'
import {
  UserIcon,
  GlobeAltIcon,
  SparklesIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import AnimatedCounter from './AnimatedCounter'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50/50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Meet the Creator
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Created by{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Girish Lade
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Girish Lade is a passionate UX/UI designer and full-stack developer who founded{' '}
                <strong className="text-gray-900">Lade Stack</strong> with a vision to create powerful 
                AI-integrated developer tools that simplify coding and enhance creativity.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With a focus on user experience and cutting-edge technology, Girish builds 
                innovative solutions that help developers streamline their workflow and 
                bring their ideas to life faster than ever before.
              </p>
            </div>

            {/* Mission Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg overflow-hidden"
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-emerald-500/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg"
                  >
                    <GlobeAltIcon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Lade Stack Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Empowering developers through AI-integrated tools" - We build powerful, intelligent 
                  solutions that enhance productivity, code quality, and creative freedom for developers worldwide.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="https://ladestack.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>Visit LadeStack.in</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-2xl">
              {/* Profile Section */}
              <div className="text-center mb-8">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative inline-block mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-xl">
                    <UserIcon className="w-12 h-12 text-white" />
                  </div>
                  {/* Status indicator */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.7)", "0 0 0 8px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </motion.div>

                <h4 className="text-2xl font-bold text-gray-900 mb-2">Girish Lade</h4>
                <p className="text-blue-600 font-medium mb-2">UX/UI Designer & Full-Stack Developer</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Founder, Lade Stack</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 500, label: "Projects Enhanced", suffix: "+" },
                  { value: 50, label: "AI Suggestions", suffix: "+" },
                  { value: 99, label: "Code Quality", suffix: "%" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl border border-blue-100"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        delay={0.4 + index * 0.1}
                      />
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <SparklesIcon className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <CpuChipIcon className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}