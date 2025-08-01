import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Cat({ scale = 1.3, position = [0, -0.5, 0] }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model/kawaii__cute_flying_robot.glb')

  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setCursor({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (group.current) {
      const targetX = cursor.x * Math.PI * 0.25
      const targetY = cursor.y * Math.PI * 0.25
      group.current.rotation.y += (targetX - group.current.rotation.y) * 0.1
      group.current.rotation.x += (-targetY - group.current.rotation.x) * 0.1
    }
  })

  return (
    <group ref={group} scale={scale} position={position} dispose={null}>
      <group position={[0, 0, 0]}>    
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments geometry={nodes.Object_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} />
      </group>
      </group>
    </group>
  )
}
useGLTF.preload('/model/kawaii__cute_flying_robot.glb')