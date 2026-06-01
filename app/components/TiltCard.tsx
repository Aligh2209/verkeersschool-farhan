'use client'

import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 2
    const y = ((e.clientY - top) / height - 0.5) * 2
    el.style.transition = 'none'
    el.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(1.03)`
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
