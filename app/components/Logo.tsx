import Link from 'next/link'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ href = '/', size = 'md', className = '' }: Props) {
  const nameSize =
    size === 'sm' ? 'text-lg' : size === 'md' ? 'text-[22px]' : 'text-3xl'
  const labelSize =
    size === 'sm' ? 'text-[7px]' : size === 'md' ? 'text-[8.5px]' : 'text-[11px]'
  const lineWidth =
    size === 'sm' ? 'w-3' : size === 'md' ? 'w-4' : 'w-6'

  const inner = (
    <span className={`flex flex-col leading-none select-none ${className}`}>
      {/* ── Top label ── */}
      <span
        className={`${labelSize} font-semibold uppercase text-slate-500`}
        style={{ letterSpacing: '0.38em' }}
      >
        Verkeersschool
      </span>

      {/* ── Orange separator + main name ── */}
      <span className="flex items-center gap-2 mt-[5px]">
        <span
          className={`${lineWidth} bg-coral-500 rounded-full shrink-0`}
          style={{ height: 2 }}
          aria-hidden
        />
        <span
          className={`${nameSize} font-extrabold text-white uppercase tracking-[0.04em]`}
        >
          Farhan
        </span>
      </span>
    </span>
  )

  if (!href) return inner

  return (
    <Link href={href} aria-label="Verkeersschool Farhan — terug naar home">
      {inner}
    </Link>
  )
}
