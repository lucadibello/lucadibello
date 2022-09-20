import { Plane } from "@react-three/drei"

const Floor = () => (
  <mesh receiveShadow>
    <Plane
      position={[0, .5, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1000, 1000, 1000]}
      receiveShadow
    >
      <meshBasicMaterial color="red" />
    </Plane>
  </mesh>
)

export default Floor