import { GITHUB_FETCH_REPO_URL } from "../constants/Github";
import GithubRepo from "../models/GithubRepo";

const getRepositories = async (): Promise<GithubRepo[]> => {
  return await fetch(GITHUB_FETCH_REPO_URL)
    .then(response => response.json())
}

export {
  getRepositories
}