import { GithubRepository } from "@/services/github/service";
import { Stack, Text } from "@chakra-ui/react";
import RepositoryCard from "./repository-card";
import { useMemo } from "react";

interface RepositoryListProps {
  repositories: GithubRepository[]
}

// Load environment variables
const { NEXT_PUBLIC_MAX_PROJECTS } = process.env

export default function RepositoryList({ repositories }: RepositoryListProps) {

  // Filter and sort repositories by stargazers count
  const sortedRepositories = useMemo(() => {
    return repositories
      .filter((repository) => !repository.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, NEXT_PUBLIC_MAX_PROJECTS ? parseInt(NEXT_PUBLIC_MAX_PROJECTS!) : 4)
  }, [repositories])

  return (
    <Stack direction={"column"} spacing={5} divider={<Text color={"white"}>•</Text>}>
      {sortedRepositories.map((repository) => <RepositoryCard key={repository.id} repository={repository} />)}
    </Stack>
  )
}