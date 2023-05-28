import { Box, Code, Heading, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useMemo } from "react";

interface HeaderProps {
  ip: string | null
}

export default function Header({ ip }: HeaderProps) {

  const header = useMemo(() => {
    if (ip) {
      return (
        <Heading as="h1" size="lg">
          Welcome <Code fontSize={"xl"}>{ip}</Code> 👋!
        </Heading>
      )
    } else {
      return (
        <Heading as="h1" size="lg">
          Welcome to my website!
        </Heading>
      )
    }
  }, [ip])

  return (
    <header>
      <Box w="full">
        {header}
      </Box>
    </header>
  )
}