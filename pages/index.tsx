import {
  Box,
  useColorModeValue,
  Text,
  HStack,
  Code,
  useToken,
} from "@chakra-ui/react"
import { Html, OrbitControls, Preload, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { Suspense } from "react"
import FloatingModel from "../components/FloatingModel"
import Lights from "../components/Lights"
import Navbar from "../components/Navbar"
import Wave from "../components/Wave"

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress}% loaded</Html>
}

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => {
  const ip = req.socket.remoteAddress
  return {
    props: {
      ip: ip || "TEST",
    },
  }
}

const Homepage = ({
  ip,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Box
      backgroundColor={useColorModeValue("home.light", "home.dark")}
      minHeight="100vh"
    >
      <Box w="full" zIndex={0}>
        <Navbar />
      </Box>

      {/* ThreeJS animation */}
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        w="full"
        zIndex={100}
      >
        <HStack
          backgroundColor={useColorModeValue("nav.light", "nav.dark")}
          px={10}
        >
          <Box
            as={motion.div}
            fontWeight={"bold"}
            w="full"
            fontSize={60}
            color="white"
            drag
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          >
            <HStack
              as={motion.div}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              fontSize={70}
              alignItems="center"
              spacing={5}
              direction={{ base: "row", md: "column" }}
            >
              <Text>Hello</Text>
              <HStack>
                <Code pl={"10px"} fontSize={40} color="blue">
                  {ip}
                </Code>
                <Text>!</Text>
              </HStack>
            </HStack>
            <Text
              as={motion.div}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome to my website.
            </Text>
          </Box>
          <Box h={"40vh"} w="full" zIndex={1}>
            <Canvas
              shadows
              camera={{
                fov: 70,
                near: 0.1,
                far: 1000,
                position: [200, 200, 0],
              }}
            >
              <Lights />
              <Suspense fallback={<Loader />}>
                <FloatingModel />
                <OrbitControls
                  autoRotate
                  zoomSpeed={0.6}
                  enableZoom={false}
                  enableRotate={true}
                  dampingFactor={0.1}
                  rotateSpeed={0.2}
                  minZoom={1}
                  maxZoom={1}
                />
              </Suspense>
              <Preload all />
            </Canvas>
          </Box>
        </HStack>
        <Wave
          color={useToken("colors", useColorModeValue("nav.light", "nav.dark"))}
        />
      </Box>

      <Box px={10} color="white" fontWeight={"bold"}>
        <Text>Test</Text>
      </Box>
    </Box>
  )
}

export default Homepage
