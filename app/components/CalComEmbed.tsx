'use client'

import { useEffect } from 'react'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { Cal?: any }
}

export default function CalComEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    // Remove old script if exists
    const old = document.getElementById('calcom-script')
    if (old) old.remove()

    const script = document.createElement('script')
    script.id = 'calcom-script'
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true

    script.onload = () => {
      const Cal = window.Cal
      if (!Cal) return

      Cal('init', { origin: 'https://cal.com' })

      Cal('inline', {
        elementOrSelector: '#cal-embed-container',
        calLink,
        config: { layout: 'month_view' },
      })

      Cal('ui', {
        styles: { branding: { brandColor: '#f97316' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    document.head.appendChild(script)

    return () => {
      const s = document.getElementById('calcom-script')
      if (s) s.remove()
    }
  }, [calLink])

  return (
    <div
      id="cal-embed-container"
      style={{ width: '100%', height: '700px', overflow: 'auto' }}
    />
  )
}
