import React from 'react';

import { Sphere,MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere({color,speed}) {
  return (
    <Sphere visible args={[1,100,200]} scale={1}>
      <MeshDistortMaterial 
        color={color}
        attach='material'
        distort={0.7}
        speed={speed}
      />
    </Sphere>
    
  )
}
