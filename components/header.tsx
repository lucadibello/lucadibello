import { Box, Heading, Text, Code, HStack } from "@chakra-ui/layout";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { palette } from "@/theme";


export default function Header() {
  return (
    <header>
      <Box as="section" pb="10" pt={"150px"} px="5" w="full" backgroundColor={palette.mint_cream}>
        <Heading as="h1" size="lg">
          Hello there, I&apos;m Luca Di Bello 👋
        </Heading>

        <Text fontSize="xl" fontWeight="bold" mt="5">
          a <Code fontSize={"lg"} bgColor={palette.mint_green}>Software Engineer</Code> based in <Code fontSize={"lg"} bgColor={palette.mint_green}>Switzerland</Code> 🇨🇭.
        </Text>

        {/* Box with social links */}
        <HStack mt={5}>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="blackAlpha" icon={<FiGithub />} bgColor={palette.mint_green} />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="LinkedIn" icon={<FiLinkedin />} bgColor={palette.mint_green} />
          </Link>
          <Link href={"mailto:" + process.env.NEXT_PUBLIC_MAIL_ADDRESS!} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Email" icon={<FiMail />} bgColor={palette.mint_green} />
          </Link>
        </HStack>

      </Box>
    </header>
  )
}