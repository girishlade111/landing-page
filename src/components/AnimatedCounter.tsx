'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  delay?: number
}

export const useInView = (threshold: number = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { ref: setRef, inView }
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className = '',
  delay = 0
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.5)
  const spring = useSpring(0, { duration: duration * 1000 })
  const display = useTransform(spring, (current) => Math.floor(current))

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        spring.set(value)
      }, delay * 1000)
    }
  }, [inView, value, spring, delay])

  return (
    <motion.div
      ref={ref}
      className={className}
    >
      <motion.span>
        {prefix}
        <motion.span>
          {display}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.div>
  )
}