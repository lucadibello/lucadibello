const Floor = () => (
  <mesh
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -1, 0]}
  >
    <meshStandardMaterial attach="material" />
  </mesh>
)

export default Floor