import { GithubRepository } from "@/services/github/service";
import { palette } from "@/theme";
import { Link } from "@chakra-ui/next-js";
import { Box, Card, CardBody, CardFooter, HStack, Heading, Stack, Text, Tooltip } from "@chakra-ui/react";
import { useMemo } from "react";

interface RepositoryCardProps {
  repository: GithubRepository
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {

  // Compute formatted date
  const formattedDate = useMemo(() => {
    return new Date(repository.updated_at).toLocaleString()
  }, [repository.updated_at])

  return (
    <Card backgroundColor={palette.cambridge_blue}>
      <CardBody>
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent={"space-between"} mb={3}>
          <Box>
            <Heading as="h3" size="md">
              <Link href={repository.html_url}>{repository.name}</Link>
            </Heading>
            <Text fontSize="lg">
              {repository.language}
            </Text>
          </Box>
          <Text fontSize="lg">
            ⭐ {repository.stargazers_count} stars
          </Text>
        </Stack>
        <Text fontSize="lg">
          {repository.description}
        </Text>
      </CardBody>
      <CardFooter>
        <HStack spacing={5}>
          <Tooltip label="Github repository" aria-label="Github repository" hasArrow>
            <Link href={repository.html_url} target="_blank" rel="noopener noreferrer">
              <Text fontSize="lg">📁 View on GitHub</Text>
            </Link>
          </Tooltip>
          {repository.homepage && <Tooltip label="Project website" aria-label="Project website" hasArrow>
            <Link href={repository.homepage} target="_blank" rel="noopener noreferrer">
              <Text fontSize="lg">🌐 Homepage</Text>
            </Link>
          </Tooltip>}
        </HStack>
      </CardFooter>
    </Card >
  )
}