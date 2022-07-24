import { Stage, OrbitControls, useGLTF } from "@react-three/drei"

const FloatingModel = () => {
  const { scene } = useGLTF("/isometric_bedroom/scene.gltf")

  return (
    <>
      <Stage castShadow position={[10,10,0]}> 
        <primitive object={scene} />
      </Stage>
      <OrbitControls
        autoRotate
        enableZoom={true}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.6}
        minZoom={1}
        maxZoom={1}
      />
    </>
  )
}

useGLTF.preload("/isometric_bedroom/scene.gltf")

export default FloatingModel