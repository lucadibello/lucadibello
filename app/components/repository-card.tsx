import type { GithubRepository } from "~/services/github/types";

interface RepositoryCardProps {
  repository: GithubRepository;
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const formattedDate = new Date(repository.updated_at).toLocaleDateString();

  return (
    <div className="bg-cambridge-blue rounded-lg shadow-sm overflow-hidden">
      {/* Card body */}
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold">
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repository.name}
              </a>
            </h3>
            <p className="text-lg">{repository.language}</p>
          </div>
          <p className="text-lg">⭐ {repository.stargazers_count} stars</p>
        </div>
        <p className="text-lg">{repository.description}</p>
      </div>

      {/* Card footer */}
      <div className="px-5 pb-5 flex gap-5">
        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub repository"
          className="text-lg hover:underline"
        >
          📁 View on GitHub
        </a>
        {repository.homepage && (
          <a
            href={repository.homepage}
            target="_blank"
            rel="noopener noreferrer"
            title="Project website"
            className="text-lg hover:underline"
          >
            🌐 Homepage
          </a>
        )}
      </div>
    </div>
  );
}
