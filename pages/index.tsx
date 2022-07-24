import { Box, Heading } from "@chakra-ui/react"
import { Html, OrbitControls, Stage, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import FloatingModel from "../components/FloatingModel"
import Floor from "../components/Floor"
import Lights from "../components/Lights"
import Navbar from "../components/Navbar"

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress}% loaded</Html>
}

const Homepage = () => {
  return (
    <Box>
      <Box w="full">
        <Navbar />
      </Box>

      {/* ThreeJS animation */}
      <Box w={"full"} h="500px">
        <Canvas
          camera={{ fov: 60, position: [-5, 2, 10] }}
          shadows
        >
          <Lights />
          <Suspense fallback={<Loader />}>
            <FloatingModel />
            <Floor />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  )
}

export default Homepage