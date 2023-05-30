import { GithubRepository } from "./service"

export async function getRepos(): Promise<GithubRepository[]> {
  if (!process.env.NEXT_PUBLIC_GITHUB_API) {
    throw new Error("Missing GITHUB_API env variable")
  }

  const response = await fetch(process.env.NEXT_PUBLIC_GITHUB_API)
  const data = await response.json()
  return data
}
