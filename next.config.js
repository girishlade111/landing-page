/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
  seo: {
    title: 'CodeEnhance AI - HTML, CSS & JS Enhancer by Lade Stack',
    description: 'An intelligent AI-powered code editor and compiler to enhance your web development workflow. Created by Girish Lade.',
    canonical: 'https://ladestack.in',
    openGraph: {
      title: 'CodeEnhance AI - AI-Powered Code Editor',
      description: 'Enhance your frontend code with AI intelligence. Edit, compile, and improve your HTML, CSS & JS in real-time.',
      url: 'https://ladestack.in',
      siteName: 'Lade Stack',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'CodeEnhance AI - Lade Stack',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  },
}

module.exports = nextConfig