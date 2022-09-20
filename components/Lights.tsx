const Lights = () => (
  <>
    <ambientLight intensity={0.1} />
    
    <directionalLight
      position={[-1, 8, -1]}
      intensity={0.5}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />

    <pointLight castShadow position={[0, 50, 0]} intensity={.5} />      
  </>
)

export default Lights