
const Lights = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      position={[-8, 16, -8]}
      intensity={1.5}
      shadow-mapSize-width={512}
      shadow-mapSize-height={512}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
    />
    <pointLight castShadow position={[0, 50, 0]} intensity={.5} />      
  </>
)

export default Lights