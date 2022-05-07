

import React from 'react';
// import { useLoader } from 'react-three-fiber';
// import { TextureLoader } from 'three';
// import Raouf from './raouf.png';
import { MeshWobbleMaterial } from '@react-three/drei';

export default function Box() {
  // const colorMap= useLoader(TextureLoader,Raouf)
  return (
    <mesh >
      <torusKnotBufferGeometry attach='geometry' args={[1]} />
      <meshNormalMaterial attach='material' color="#0F5257"  />
      <MeshWobbleMaterial factor={2} 
        color='#0F5257'
        attach='material'
        speed={1}
      />
    </mesh>
  )
}
