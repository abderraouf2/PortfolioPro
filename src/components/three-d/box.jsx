

import React from 'react';
// import { useLoader } from 'react-three-fiber';
// import { TextureLoader } from 'three';
// import Raouf from './raouf.png';
// import { MeshWobbleMaterial } from '@react-three/drei';

export default function Box() {
  // const colorMap= useLoader(TextureLoader,Raouf)
  return (
    <mesh rotation={[5,2,5]}  >
      <dodecahedronBufferGeometry attach='geometry' args={[1]} />
      <meshNormalMaterial 
        attach='material' 
        color="#0F5257" 
        />
      
      
    </mesh>
  )
}
