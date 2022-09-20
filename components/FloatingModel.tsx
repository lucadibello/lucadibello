import { useGLTF } from "@react-three/drei"

const FloatingModel = () => {
  const { scene } = useGLTF("/isometric_bedroom/scene.gltf")

  return (
    <>
      <group castShadow receiveShadow position={[0, 0, 0]}> 
        <primitive object={scene} />
      </group>
      
    </>
  )
}

useGLTF.preload("/isometric_bedroom/scene.gltf")

export default FloatingModel