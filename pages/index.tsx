import { Box, Heading } from "@chakra-ui/react"
import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import FloatingModel from "../components/FloatingModel"
import Navbar from "../components/Navbar"

const Homepage = () => {
  return (
    <Box>
      <Box w="full">
        <Navbar />
      </Box>

      {/* ThreeJS animation */}
      <Box w={"full"} h="500px">
        <Canvas dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }}>
          <FloatingModel />
        </Canvas>
      </Box>
    </Box>
  )
}

export default Homepage