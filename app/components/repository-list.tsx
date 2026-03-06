import { useState } from "react";
import type { GithubRepository } from "~/services/github/types";
import RepositoryCard from "./repository-card";

// ── Sort options ──────────────────────────────────────────────────────────
type SortKey = "stars" | "recent" | "created" | "forks";

interface SortOption {
  key: SortKey;
  label: string;
  icon: string;
  compareFn: (a: GithubRepository, b: GithubRepository) => number;
}

const sortOptions: SortOption[] = [
  {
    key: "stars",
    label: "Most starred",
    icon: "⭐",
    compareFn: (a, b) => b.stargazers_count - a.stargazers_count,
  },
  {
    key: "recent",
    label: "Recently updated",
    icon: "🕒",
    compareFn: (a, b) =>
      new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
  },
  {
    key: "created",
    label: "Recently created",
    icon: "🆕",
    compareFn: (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  },
  {
    key: "forks",
    label: "Most forked",
    icon: "🍴",
    compareFn: (a, b) => b.forks_count - a.forks_count,
  },
];

// ── Component ─────────────────────────────────────────────────────────────
interface RepositoryListProps {
  repositories: GithubRepository[];
  maxProjects?: number;
}

export default function RepositoryList({
  repositories,
  maxProjects = 4,
}: RepositoryListProps) {
  const [activeSort, setActiveSort] = useState<SortKey>("stars");

  const activeSortOption = sortOptions.find((o) => o.key === activeSort)!;

  const sorted = repositories
    .filter((repo) => !repo.fork)
    .sort(activeSortOption.compareFn)
    .slice(0, maxProjects);

  if (repositories.filter((r) => !r.fork).length === 0) {
    return <p className="text-white">No repositories found</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Sort controls */}
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => {
          const isActive = option.key === activeSort;
          return (
            <button
              key={option.key}
              onClick={() => setActiveSort(option.key)}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5
                text-sm font-medium rounded-full
                transition-colors duration-150 cursor-pointer
                ${
                  isActive
                    ? "bg-viridian text-white shadow-sm"
                    : "bg-white text-black/70 border border-black/15 hover:bg-black/5"
                }
              `}
            >
              <span aria-hidden="true">{option.icon}</span>
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Repo cards */}
      {sorted.map((repo) => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
    </div>
  );
}
