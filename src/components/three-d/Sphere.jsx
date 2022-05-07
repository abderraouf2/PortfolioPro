import React from 'react';
import { OrbitControls } from '@react-three/drei';
import AnimatedSphere from './animatedSphere';
import { Canvas } from '@react-three/fiber';
import './three.css';

export default function Sphere({color}) {
  return (
        <Canvas className='box'>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <AnimatedSphere color={color} />
        </Canvas>
  )
}
