'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const POSITIONS: [number, number, number][] = [
  [0, 0, 3.6],
  [0, 0, 1.6],
  [0, 0, -0.4],
  [0, 0, -2.4],
  [0, 0, -4.4],
]

function Road() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
        <planeGeometry args={[3.6, 12]} />
        <meshStandardMaterial color="#080808" roughness={1} />
      </mesh>
      {[-1.72, 1.72].map((x, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.01, -0.4]}>
          <planeGeometry args={[0.055, 12]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.55} />
        </mesh>
      ))}
    </>
  )
}

function Milestone({
  position,
  active,
  completed,
}: {
  position: [number, number, number]
  active: boolean
  completed: boolean
}) {
  const sphereRef = useRef<THREE.Mesh>(null!)
  const innerRingRef = useRef<THREE.Mesh>(null!)
  const targetScale = useMemo(() => new THREE.Vector3(1, 1, 1), [])

  useFrame((state) => {
    if (!sphereRef.current) return
    if (active) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.09
      sphereRef.current.scale.setScalar(s)
    } else {
      sphereRef.current.scale.lerp(targetScale, 0.1)
    }
    if (innerRingRef.current) {
      if (active) {
        const rs = 1 + Math.sin(state.clock.elapsedTime * 1.7) * 0.18
        innerRingRef.current.scale.setScalar(rs)
        const mat = innerRingRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 2.2) * 0.2
      } else {
        innerRingRef.current.scale.setScalar(1)
        const mat = innerRingRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = completed ? 0.12 : 0.06
      }
    }
  })

  const sphereColor = active ? '#f97316' : completed ? '#a3a3a3' : '#1a1a1a'
  const emissive = active ? '#f97316' : 'black'

  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <circleGeometry args={[0.32, 48]} />
        <meshBasicMaterial
          color={active ? '#f97316' : completed ? '#525252' : '#0f0f0f'}
          transparent
          opacity={active ? 0.22 : 0.1}
        />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.013, 0.013, 0.84, 8]} />
        <meshBasicMaterial
          color={active ? '#f97316' : completed ? '#737373' : '#1a1a1a'}
          transparent
          opacity={active ? 1 : 0.5}
        />
      </mesh>
      <mesh ref={sphereRef} position={[0, 0.95, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={sphereColor}
          emissive={emissive}
          emissiveIntensity={active ? 0.7 : 0}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>
      <mesh ref={innerRingRef} position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.38, 0.018, 12, 56]} />
        <meshBasicMaterial
          color={active ? '#f97316' : '#737373'}
          transparent
          opacity={0.3}
        />
      </mesh>
      {active && (
        <mesh position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.008, 12, 56]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.12} />
        </mesh>
      )}
      {active && (
        <pointLight
          position={[0, 1.4, 0]}
          color="#f97316"
          intensity={4}
          distance={2.8}
          decay={2}
        />
      )}
    </group>
  )
}

function SceneContent({ activeStep }: { activeStep: number }) {
  return (
    <>
      <fog attach="fog" args={['#080808', 5, 16]} />
      <ambientLight intensity={0.05} />
      <pointLight position={[2, 5, 5]} color="#7c2d12" intensity={0.9} />
      <Road />
      {POSITIONS.map((pos, i) => (
        <Milestone
          key={i}
          position={pos}
          active={activeStep === i}
          completed={activeStep > i}
        />
      ))}
    </>
  )
}

export default function ProcessScene({ activeStep }: { activeStep: number }) {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [1.6, 2.6, 6.8], fov: 56 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
      >
        <SceneContent activeStep={activeStep} />
      </Canvas>
    </div>
  )
}
