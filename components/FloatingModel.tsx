import { Stage, OrbitControls, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"

const FloatingModel = () => {
  const floatingModelRef = useRef<any>()
  const { scene } = useGLTF("/isometric_bedroom/scene.gltf")

  useFrame(() => {
    if (floatingModelRef.current) {
      floatingModelRef.current.rotation.x += 0.01
      floatingModelRef.current.rotation.y += 0.01
    }
  })

  return (
    <Suspense>
      <Stage intensity={1} shadowBias={-0.0015}> 
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[-8, 16, -8]}
          intensity={0}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[0, 50, 0]} />
        <mesh>
          <primitive object={scene} /> 
        </mesh>
      </Stage>
      <OrbitControls autoRotate enableZoom={true} enablePan={false} />
    </Suspense>
  )
}

export default FloatingModel