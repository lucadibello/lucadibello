import type { GithubRepository } from "./types";
import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Fetch all pages from the GitHub REST API.
 *
 * The API defaults to 30 items per page. We request 100 (the maximum)
 * and keep fetching until a page returns fewer items than `per_page`.
 */
async function fetchAllPages(baseUrl: string): Promise<GithubRepository[]> {
  const allRepos: GithubRepository[] = [];
  const separator = baseUrl.includes("?") ? "&" : "?";
  let page = 1;

  while (true) {
    const url = `${baseUrl}${separator}per_page=100&page=${page}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const repos = (await res.json()) as GithubRepository[];
    allRepos.push(...repos);

    // If we got fewer than 100 items, we've reached the last page
    if (repos.length < 100) {
      break;
    }

    page++;
  }

  return allRepos;
}

/**
 * Fetch GitHub repositories server-side.
 *
 * 1. Try the GitHub REST API (env: GITHUB_API) — paginated.
 * 2. Fall back to the static JSON snapshot bundled in public/.
 * 3. If everything fails, return an empty array.
 */
export async function getRepos(): Promise<GithubRepository[]> {
  const apiUrl = process.env.GITHUB_API;

  if (apiUrl) {
    try {
      return await fetchAllPages(apiUrl);
    } catch (err) {
      console.warn("Error fetching from GitHub API:", err);
    }
  }

  // Fallback: read the static JSON file from public/
  try {
    const filePath = path.join(process.cwd(), "public", "data", "github.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as GithubRepository[];
  } catch (err) {
    console.warn("Error reading local github.json fallback:", err);
    return [];
  }
}
