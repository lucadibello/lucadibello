import { GithubRepository } from "./service"

export async function getRepos(): Promise<GithubRepository[]> {
  if (!process.env.NEXT_PUBLIC_GITHUB_API) {
    throw new Error("Missing GITHUB_API env variable")
  }
  
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GITHUB_API)
    const data = await response.json()
    return data
  } catch (error) {
    console.warn("Error fetching repos from Github API, using local storage", error)
    // Return data from local file
    return fetch("/data/github.json").then(r => r.json()).catch(err => {
      console.warn("Error while fetching repos from local storage:", err)
      return []
    })
  }
}
