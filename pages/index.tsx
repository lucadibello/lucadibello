import Header from "@/components/header";
import { palette } from "@/lib/theme";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Text, Skeleton, Button, Code } from "@chakra-ui/react";
import { getRepos } from "@/services/github/github-service";
import { useEffect, useState } from "react";
import { GithubRepository } from "@/services/github/service";
import RepositoryList from "@/components/repositoriy-list";
import Head from "next/head";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  // States
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(true);

  // Get current year
  const currentYear = new Date().getFullYear();

  // Get repos
  useEffect(() => {
    setIsLoadingRepos(true);
    getRepos()
      .then((repos) => {
        setRepos(repos);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setIsLoadingRepos(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Luca Di Bello</title>
        <meta name="description" content="Luca Di Bello personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/favicons/maskable/logo192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicons/apple/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#cce3de" />
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Luca Di Bello",
              "nationality": "Swiss",
              "description": "Technology enthusiast, passionate about software development and computer science.",
              "url": "https://lucadibello.dev",
              "image": "https://avatars.githubusercontent.com/u/37295664?v=4",
              "sameAs": "https://www.linkedin.com/in/luca-di-bello/",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "it flow",
                "sameAs": [
                  "https://www.itflow.xyz/",
                  "https://www.instagram.com/itflow.xyz/",
                  "https://www.linkedin.com/company/itflow-xyz/"
                ]
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "USI",
                "sameAs": "https://www.usi.ch/en"
              },
              "knowsAbout": [
                "Software Engineering",
                "Computer Science",
                "Web Development",
                "Mobile Development",
                "DevOps",
                "Cloud Computing",
                "Machine Learning",
                "Artificial Intelligence",
                "Data Science",
                "Database Design and Management",
                "Computer Networks",
                "Computer Security",
                "Computer Architecture",
                "Computer Graphics",
                "Algorithms",
                "Data Structures",
                "Operating Systems",
                "Programming Languages"
              ]
            }
        `}
        </script>
      </Head>
      <main>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
        </Script>

        {/* Pass IP to Header component */}
        <Header />

        {/* Next/image NextJS 13.4 full width */}
        <Box position={"relative"} w={"100%"} h={"200px"}>
          {/* divider */}
          <Image
            src="/images/steps.svg"
            priority={true}
            alt="steps"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* second section - who am i*/}
        <Box as="section" py="10" px="5" backgroundColor={palette.viridian}>
          <Heading as="h2" size="lg" my={7} color={"white"}>
            About me
          </Heading>
          <Stack direction={"column"} spacing={5} mb={5}>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              I&apos;m a{" "}
              <Code bgColor={palette.mint_cream}>Software Engineer</Code>{" "}
              currently pursuing a{" "}
              <Code bgColor={palette.mint_cream}>
                Master of Science in Informatics
              </Code>{" "}
              at USI. <br />
            </Text>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              From a young age, I&apos;ve been passionate about computer science
              and have consistently sought ways to improve my skills. Along the
              way, I&apos;ve gained valuable hands-on experience across various
              projects.
            </Text>
            <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
              Feel free to{" "}
              <Code bgColor={palette.mint_cream}>explore my portfolio</Code> and
              take a look at some of the projects I&apos;ve worked on.
            </Text>
          </Stack>
        </Box>

        {/* divider */}
        <Box position={"relative"} w={"100%"} h={"200px"}>
          <Image
            src="/images/steps-inv.svg"
            alt="divider image"
            fill
            sizes="100vw"
            loading="eager"
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* third section - my projects */}
        <Box as="section" py={10} px="5" backgroundColor={palette.mint_cream}>
          <Heading as="h2" size="lg" mb="3">
            Featured Projects 🚀
          </Heading>
          <Text size={"lg"} fontWeight="bold" mb={2}>
            I&apos;ve had the opportunity to contribute to a range of projects,
            both individually and as part of a team. Below are some of the most
            notable ones.
          </Text>

          {/* Stack with repos */}
          <Skeleton isLoaded={!isLoadingRepos} w="full" minH={"300px"}>
            <RepositoryList repositories={repos || []} />

            {/* view more on github  */}
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                leftIcon={<FiGithub />}
                colorScheme="black"
                variant="outline"
                mt={5}
              >
                View more on Github 🚀
              </Button>
            </Link>
          </Skeleton>
        </Box>

        {/* divider */}
        <Box position={"relative"} w={"100%"} h={"200px"}>
          <Image
            src="/images/steps-two.svg"
            alt="divider image variant"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* fourth section - contact me */}
        <Box as="section" py="10" px="5" backgroundColor={palette.viridian}>
          <Heading as="h2" size="lg" my={7} color={"white"}>
            Contact me
          </Heading>
          <Text color={"white"} fontSize={"lg"} fontWeight={"bold"}>
            I&apos;m always{" "}
            <Code bgColor={palette.mint_cream}>open to new opportunities</Code>{" "}
            and collaborations. Reach out to me if you want to get in touch!
          </Text>

          {/* Social buttons */}
          <Stack direction={{ base: "column", md: "row" }} spacing={5} mt={5}>
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL!}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                leftIcon={<FiGithub />}
                colorScheme="black"
                _hover={{
                  backgroundColor: "blackAlpha.200",
                }}
              >
                Github
              </Button>
            </Link>

            <Link
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                leftIcon={<FiLinkedin />}
                colorScheme="black"
                _hover={{
                  backgroundColor: "blackAlpha.200",
                }}
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href={"mailto:" + process.env.NEXT_PUBLIC_MAIL_ADDRESS!}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                leftIcon={<FiMail />}
                colorScheme="black"
                _hover={{
                  backgroundColor: "blackAlpha.200",
                }}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </Box>
        {/* divider */}
        <Box position={"relative"} w={"100%"} h={"200px"}>
          <Image
            src="/images/steps-two-inv.svg"
            alt="divider image variant"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* footer */}
        <Box
          as="footer"
          pt="10"
          pb={"100px"}
          px="5"
          backgroundColor={palette.mint_cream}
          textAlign={"center"}
        >
          <Stack direction={"column"} mb={5}>
            <Heading as="h2" size="md">
              © Copyright {currentYear}, Luca Di Bello
            </Heading>
            <Text color={"black"} fontSize={"md"} fontWeight={"bold"}>
              Made with ❤️ in Switzerland
            </Text>
          </Stack>
        </Box>
      </main>
    </>
  );
}
