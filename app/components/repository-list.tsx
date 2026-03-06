import type { GithubRepository } from "~/services/github/types";
import RepositoryCard from "./repository-card";

interface RepositoryListProps {
  repositories: GithubRepository[];
  maxProjects?: number;
}

export default function RepositoryList({
  repositories,
  maxProjects = 4,
}: RepositoryListProps) {
  const sorted = repositories
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, maxProjects);

  if (sorted.length === 0) {
    return <p className="text-white">No repositories found</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {sorted.map((repo) => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
    </div>
  );
}
