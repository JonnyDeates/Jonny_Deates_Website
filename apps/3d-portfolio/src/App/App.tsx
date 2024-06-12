import {Canvas} from "@react-three/fiber";
import {Environment, Float, PresentationControls, useGLTF} from "@react-three/drei";
import React from "react";


const App = ()=> {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return <Canvas style={{width: "100vw", height: "100vh"}}>
      <Environment preset="studio" />
      <PresentationControls>
        <Float rotationIntensity={1}>

      <primitive object={computer.scene}/>
        </Float>
      </PresentationControls>
  </Canvas>
}


export default App;