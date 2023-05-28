'use client'

import Header from "@/components/header";
import { getRepos } from "@/services/github/github-service";
import { getIpAddresses } from "@/services/ip/ip-service";
import { palette } from "@/util/theme";
import { Box, HStack, Heading, Stack } from "@chakra-ui/layout";
import { Code, Text, Image, IconButton, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default async function Home() {
  const ip = await getIpAddresses().then(r => r.ip).catch(() => {
    console.warn("Unable to get your public IP address");
    return null
  });

  const repos = await getRepos().then(r => r).catch(() => {
    console.warn("Unable to fetch your GitHub repos");
    return null
  });

  return (
    <main>
      {/* first section - header */}
      <Box as="section" py="10" px="5">
        {/* Pass IP to Header component */}
        <Header ip={ip} />

        <Text fontSize="xl" fontWeight="bold" mt="5">
          I&apos;m Luca Di Bello, a <Code fontSize={"lg"}>Software Engineer</Code> based in <Code fontSize={"lg"}>Switzerland</Code> 🇨🇭.
        </Text>

        {/* Box with social links */}
        <HStack mt={5}>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!}>
            <IconButton aria-label="blackAlpha" icon={<FiGithub />} />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}>
            <IconButton aria-label="LinkedIn" icon={<FiLinkedin />} />
          </Link>
          <Link href={"mailto:" + process.env.NEXT_PUBLIC_MAIL_ADDRESS!}>
            <IconButton aria-label="Email" icon={<FiMail />} />
          </Link>
        </HStack>

      </Box>
      {/* divider */}
      <Image src="/images/steps.svg" alt="steps" width={"full"} />

      {/* second section - who am i*/}
      <Box as="section" py="10" px="5" backgroundColor={palette.viridian}>
        <Heading as="h2" size="lg" mb="5" color={'white'}>
          Who am I?
        </Heading>
        <Stack direction={"column"} spacing={5} mb={5} divider={<Text color={"white"}>•</Text>}>
          <Text color={"white"} fontWeight="bold">
            Hi, I&apos;m Luca Di Bello 👋
          </Text>
          <Text color={"white"}>
            I&apos;m a software engineer currently enrolled in the Master of Science program in Informatics at USI <br />
            Ever since a young age, I have nurtured a profound passion for the world of computer science.
            Throughout my journey, I have continuously pursued self-improvement and gained valuable hands-on experience.
          </Text>
          <Text color={"white"}>
            I invite you to explore my portfolio and discover the projects I have worked on.
          </Text>
        </Stack>
      </Box>

      {/* divider */}
      <Image src="/images/steps-inv.svg" alt="steps" width={"full"} />

      {/* third section - my projects */}
      <Box as="section" pt="5" pb={10} px="5">
        <Heading as="h2" size="lg" mb="5">
          My projects
        </Heading>
        <Text fontWeight="bold">
          I have worked on many projects, both personal and third party. <br />
          Here are some of my projects:
        </Text>
      </Box>
    </main >
  )
}
