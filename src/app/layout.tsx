import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'CodeEnhance AI - HTML, CSS & JS Enhancer by Lade Stack',
  description: 'An intelligent AI-powered code editor and compiler to enhance your web development workflow. Created by Girish Lade.',
  keywords: 'AI, code editor, HTML, CSS, JavaScript, web development, CodeEnhance, Lade Stack, Girish Lade',
  authors: [{ name: 'Girish Lade' }],
  creator: 'Girish Lade',
  publisher: 'Lade Stack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ladestack.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CodeEnhance AI - AI-Powered Code Editor',
    description: 'Enhance your frontend code with AI intelligence. Edit, compile, and improve your HTML, CSS & JS in real-time.',
    url: 'https://ladestack.in',
    siteName: 'Lade Stack',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeEnhance AI - Lade Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeEnhance AI - AI-Powered Code Editor',
    description: 'Enhance your frontend code with AI intelligence. Edit, compile, and improve your HTML, CSS & JS in real-time.',
    images: ['/og-image.jpg'],
    creator: '@girish_lade_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Accessibility improvements */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="color-scheme" content="light" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//code.ladestack.in" />
        <link rel="dns-prefetch" href="//ladestack.in" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}