'use client'

import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import EditorPreviewSection from '../components/EditorPreviewSection'
import AIMagicSection from '../components/AIMagicSection'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-gray-900 ocean:bg-blue-900 midnight:bg-purple-900 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <EditorPreviewSection />
      <AIMagicSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}