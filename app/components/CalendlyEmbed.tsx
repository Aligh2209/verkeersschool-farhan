'use client'

import { useEffect } from 'react'

interface Props {
  url: string
  height?: number
}

export default function CalendlyEmbed({ url, height = 700 }: Props) {
  useEffect(() => {
    // Load Calendly widget script
    const existing = document.getElementById('calendly-script')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'calendly-script'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=f97316`}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  )
}
