'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Road() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -20]}>
        <planeGeometry args={[11, 65]} />
        <meshStandardMaterial color="#080808" roughness={1} />
      </mesh>
      {[-4.9, 4.9].map((x, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[x, -0.99, -20]}>
          <planeGeometry args={[0.065, 65]} />
          <meshBasicMaterial color="#f97316" />
        </mesh>
      ))}
    </>
  )
}

function CenterLine() {
  const groupRef = useRef<THREE.Group>(null!)
  const DASH_COUNT = 30
  const SPACING = 2.4

  useFrame((_, delta) => {
    if (!groupRef.current) return
    for (const child of groupRef.current.children) {
      child.position.z += delta * 15
      if (child.position.z > 5) child.position.z -= DASH_COUNT * SPACING
    }
  })

  const zPositions = useMemo(
    () => Array.from({ length: DASH_COUNT }, (_, i) => -i * SPACING),
    []
  )

  return (
    <group ref={groupRef}>
      {zPositions.map((z, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.98, z]}>
          <planeGeometry args={[0.1, 1.1]} />
          <meshBasicMaterial color="white" opacity={0.85} transparent />
        </mesh>
      ))}
    </group>
  )
}

function SpeedStreaks() {
  const groupRef = useRef<THREE.Group>(null!)

  const streaks = useMemo(
    () =>
      Array.from({ length: 170 }, () => ({
        x: (Math.random() - 0.5) * 18,
        y: -0.6 + Math.random() * 4.2,
        z: -Math.random() * 60,
        speed: 14 + Math.random() * 24,
        w: 0.01 + Math.random() * 0.032,
        len: 0.05 + Math.random() * 0.55,
        orange: Math.random() > 0.48,
      })),
    []
  )

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.position.z += delta * streaks[i].speed
      if (child.position.z > 6) {
        child.position.z = -60
        child.position.x = (Math.random() - 0.5) * 18
      }
    })
  })

  return (
    <group ref={groupRef}>
      {streaks.map((s, i) => (
        <mesh key={i} position={[s.x, s.y, s.z]}>
          <boxGeometry args={[s.w, s.w, s.len]} />
          <meshBasicMaterial
            color={s.orange ? '#f97316' : '#d4d4d4'}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

function HorizonGlow() {
  return (
    <>
      <mesh position={[0, 1.5, -38]}>
        <sphereGeometry args={[9, 16, 16]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.98, -36]}>
        <planeGeometry args={[50, 6]} />
        <meshBasicMaterial color="#1a0800" transparent opacity={0.55} />
      </mesh>
    </>
  )
}

function Stars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3)
    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 90
      arr[i * 3 + 1] = 0.5 + Math.random() * 22
      arr[i * 3 + 2] = -1 - Math.random() * 65
    }
    return arr
  }, [])

  return (
    <Points positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e2d8cc"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.28}
      />
    </Points>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 74 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
      >
        <fog attach="fog" args={['#080808', 6, 40]} />
        <ambientLight intensity={0.06} />
        <pointLight position={[0, 4, 2]} color="#f97316" intensity={3} />
        <pointLight position={[0, 2, -14]} color="#7c2d12" intensity={1.8} />
        <Road />
        <CenterLine />
        <SpeedStreaks />
        <HorizonGlow />
        <Stars />
      </Canvas>
    </div>
  )
}
