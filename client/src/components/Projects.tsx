import React, { ReactElement } from 'react'
import GithubRepo from '../models/GithubRepo'
import { getRepositories } from '../services/GithubService'
import * as Cache from '../services/CacheService'

import {
  Grid,
  Box,
  Paper
} from '@material-ui/core'
import { GITHUB_CACHE_KEY } from '../constants/Cache'
import { GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE } from '../constants/Github'

export default function Projects () {
  const [isLoading, setIsLoading] = React.useState(false)
  const [foundError, setFoundError] = React.useState(false)
  const [repositories, setRepositories] = React.useState<GithubRepo[]>([])
  const [displayShowMore, setDisplayShowMore] = React.useState(false)

  // load data
  React.useState(() => {
    // Set loading flag
    setIsLoading(true)
    setFoundError(false)

    // Check if data exists in cache
    const repositoriesCache = Cache.getCachedData(GITHUB_CACHE_KEY)

    if (repositoriesCache != null) {
      // Data found in cache
      setRepositories(repositoriesCache.data)
      // Remove loading flag
      setIsLoading(false)
    } else {
      // Get repositories from APIs
      getRepositories()
        .then((data) => {
          console.log("DATA FOUND: ", data)
          if (data !== undefined && data != null) {
            // Save repositories data
            setRepositories(data)
            // Cache data for future reuse
            Cache.cacheData(GITHUB_CACHE_KEY, JSON.stringify(data), getRepositories)
          } else {
            // Error: no data returned from API
            console.log("Error: no data returned from API")
            setRepositories([])
          }
          
        })
        .catch((err) => {
          // Log error
          console.log(err)
          setFoundError(true)
        }).finally(() => {
          // Stop loading
          setIsLoading(false)
        })
    }
  })

  function RepoItems (): ReactElement {
    // Grid item list
    const gridItem: ReactElement[] = []

    // Set show more flag
    setDisplayShowMore(repositories.length > GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE)

    // Create item list
    repositories.forEach((repo) => {
      gridItem.push(
        <Grid item xl={12} key={repo.id}>
          <Paper>
            {repo.name}
          </Paper>
        </Grid>
      )
    });

    return (
      <div>
        { gridItem }
      </div>
    );
  }

  if (isLoading) {
    return (
      <p>Carico i dati...</p>
    );
  } else if (foundError) {
    return (
      <p>
        Errore durante la lettura dei miei progetti dal server.
        Puoi vederli comunque visitando il 
        <a 
          href="https://github.com/lucadibello"
          rel="noreferrer"
          title="Portfolio GitHub"
          target="_blank"
        >
          mio profilo github!
        </a>
      </p>
    )
  } else {
    return (
      <Box>
        <Grid container spacing={3}>
          <RepoItems />
          { /* TODO: ORDINARE REPO IN BASE ALLA DATA DELL'ULTIMO COMMIT EFFETTUATO */ }
          { displayShowMore && 
            <div>
              <p>DA INSERIRE SHOW MORE, MAX ELEMENTI MOSTRATI: {GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE}</p>
            </div>
          }
        </Grid>
      </Box>
    )  
  }
}