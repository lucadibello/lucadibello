import { GithubUserReposApiResponse } from "./service"

export async function getRepos(): Promise<GithubUserReposApiResponse> {
  if (!process.env.NEXT_PUBLIC_GITHUB_API) {
    throw new Error("Missing GITHUB_API env variable")
  }

  return fetch(process.env.NEXT_PUBLIC_GITHUB_API).then((response) =>
    response.json()
  )
}
