import Header from "@/components/header";
import { palette } from "@/lib/theme";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Text, Image, Skeleton, Button, Code } from "@chakra-ui/react";
import { getRepos } from "@/services/github/github-service";
import { useEffect, useState } from "react";
import { GithubRepository } from "@/services/github/service";
import RepositoryList from "@/components/repositoriy-list";
import Head from "next/head";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  // States
  const [repos, setRepos] = useState<GithubRepository[]>([])
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(true)

  // Get current year
  const currentYear = new Date().getFullYear()

  // Get repos
  useEffect(() => {
    setIsLoadingRepos(true)
    getRepos()
      .then((repos) => {
        setRepos(repos)
      })
      .catch((err) => {
        console.warn(err)
      }).finally(() => {
        setIsLoadingRepos(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Luca Di Bello</title>
        <meta name="description" content="Luca Di Bello personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        {/* Pass IP to Header component */}
        <Header />

        {/* divider */}
        <Image src="/images/steps.svg" alt="steps" width={"full"} />

        {/* second section - who am i*/}
        <Box as="section" py="10" px="5" backgroundColor={palette.viridian}>
          <Heading as="h2" size="lg" my={7} color={'white'}>
            About me
          </Heading>
          <Stack direction={"column"} spacing={5} mb={5}>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              I&apos;m a <Code bgColor={palette.mint_cream}>Software Engineer</Code> currently enrolled in the <Code bgColor={palette.mint_cream}>Master of Science in Informatics</Code> course at USI. <br />
            </Text>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              Ever since a young age, I have nurtured a profound passion for the world of computer science.
              Throughout my journey, I have continuously pursued self-improvement and gained valuable hands-on experience.
            </Text>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              I invite you to <Code bgColor={palette.mint_cream}>explore my portfolio</Code> and discover the projects I have worked on.
            </Text>
          </Stack>
        </Box>

        {/* divider */}
        <Image src="/images/steps-inv.svg" alt="steps" width={"full"} />

        {/* third section - my projects */}
        <Box as="section" pb={10} px="5" backgroundColor={palette.mint_cream}>
          <Heading as="h2" size="lg" mb="3">
            My projects 🚀
          </Heading>
          <Text size={"lg"} fontWeight="bold" mb={2}>
            I have worked on many projects, both personal and third party. Here are some of my most famous ones.
          </Text>

          {/* Stack with repos */}
          <Skeleton isLoaded={!isLoadingRepos} w="full" minH={"300px"}>
            <RepositoryList repositories={repos} />

            {/* view more on github  */}
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} target="_blank" rel="noopener noreferrer">
              <Button leftIcon={<FiGithub />} colorScheme='black' variant="outline" mt={5}>
                View more on Github 🚀
              </Button>
            </Link>
          </Skeleton>
        </Box>

        {/* divider */}
        <Image src="/images/steps-two.svg" alt="steps" width={"full"} />

        {/* fourth section - contact me */}
        <Box as="section" py="10" px="5" backgroundColor={palette.viridian}>
          <Heading as="h2" size="lg" my={7} color={'white'}>
            Contact me
          </Heading>
          <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
            I&apos;m always <Code bgColor={palette.mint_cream}>open to new opportunities</Code> and collaborations. Reach out to me if you want to get in touch!
          </Text>

          {/* Social buttons */}
          <Stack direction={{ base: "column", md: "row" }} spacing={5} mt={5}>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FiGithub />}
                colorScheme='black'
                _hover={{
                  backgroundColor: "blackAlpha.200"
                }}
              >
                Github
              </Button>
            </Link>

            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FiLinkedin />}
                colorScheme='black'
                _hover={{
                  backgroundColor: "blackAlpha.200"
                }}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href={"mailto:" + process.env.NEXT_PUBLIC_MAIL_ADDRESS!} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FiMail />}
                colorScheme='black'
                _hover={{
                  backgroundColor: "blackAlpha.200"
                }}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </Box>
        {/* divider */}
        <Image src="/images/steps-two-inv.svg" alt="steps" width={"full"} />

        {/* footer */}
        <Box as="footer" py="10" px="5" backgroundColor={palette.mint_cream} textAlign={"center"}>
          <Stack direction={"column"} mb={5}>
            <Heading as="h2" size="md">
              © Copyright {currentYear}, Luca Di Bello
            </Heading>
            <Text color={"black"} fontSize={"md"} fontWeight={"bold"}>
              Made with ❤️ in Switzerland
            </Text>
          </Stack>
        </Box>
      </main >
    </>
  )
}
