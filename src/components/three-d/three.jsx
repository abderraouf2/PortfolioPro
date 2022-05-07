import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './box';
import './three.css';
import { OrbitControls } from '@react-three/drei';

// import AnimatedSphere from './animatedSphere';
// import Sphere from './Sphere';



export default function Three() {
  // const colors=[
  //   '#0F5257','#dddd'
  // ]
  return (
    <div className='div'>
      <Canvas className='box' >
        <OrbitControls enableZoom={false}/>
        {/* <ambientLight position={[-2,5,2]} intensity={2} /> */}
        <directionalLight position={[-3, 5, 3]} intensity={1} castShadow={true}/>
        <Box />
      </Canvas>
      
      {/* <Canvas className='box'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere color='#0F5257' speed={2} />
      </Canvas> */}
      
      
  </div>
  )
}
