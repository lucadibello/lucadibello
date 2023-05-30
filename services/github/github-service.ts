import { GithubRepository } from "./service"

export async function getRepos(): Promise<GithubRepository[]> {
  if (!process.env.NEXT_PUBLIC_GITHUB_API) {
    throw new Error("Missing GITHUB_API env variable")
  }

  // Try loading data from Github API
  return fetch(process.env.NEXT_PUBLIC_GITHUB_API)
    .then((r) => {
      if (r.status !== 200) {
        throw new Error("Error while fetching repos from Github API")
      }
      return r
    })
    .then((r) => r.json())
    .catch((err) => {
      console.warn("Error while fetching repos from Github API:", err)
      // Return data from local file
      return fetch("/data/github.json")
        .then((r) => r.json())
        .catch((err) => {
          console.warn("Error while fetching repos from local storage:", err)
          return []
        })
    })
}
