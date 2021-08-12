import React, { ReactElement } from 'react'
import GithubRepo from '../models/GithubRepo'
import { getRepositories } from '../services/GithubService'
import * as Cache from '../services/CacheService'
import i18n from '../services/TranslateService'

import {
  Grid,
  Typography,
  Link,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Container
} from '@material-ui/core'
import { GITHUB_CACHE_KEY } from '../constants/Cache'
import { GITHUB_PERSONAL_PROFILE, GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE } from '../constants/Github'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    repoTitle: {
      color: 'black',
      fontWeight: 'bold',
      textDecoration: 'none !important',
    },
    gridItem: {
      padding: '5px',
      flex: '50%',
      height: '100% !important'
    },
    gridContainer: {
      margin: '0 !important',
      padding: '20px'
    },
    fullWidth: {
      width: '100%'
    },
    cardDescription: {
      marginTop: '10px'
    },
    showMoreContainer: {
      color: 'white'
    }
  })
)

export default function Projects () {
  const [isLoading, setIsLoading] = React.useState(false)
  const [lastFetch, setLastFetch] = React.useState<null | number>(null)
  const [foundError, setFoundError] = React.useState(false)
  const [repositories, setRepositories] = React.useState<GithubRepo[]>([])
  const [displayShowMore, setDisplayShowMore] = React.useState(false)

  // Load style classes
  const classes = useStyles()

  const sortRepositories = (repositories: GithubRepo[], maxRepositoriesShown: number = 4): GithubRepo[] => {
    // Remove repositories without description 
    repositories = repositories
      .filter(repo => repo.description !== null && repo.description !== "")
    
    // Sort repositories
    repositories.sort((a, b) => {
      return (new Date(b.updated_at)).getTime() - (new Date(a.updated_at)).getTime()
    })

    return repositories.slice(0, maxRepositoriesShown);
  }

  // load data
  React.useState(() => {
    // Set loading flag
    setIsLoading(true)
    setFoundError(false)

    // Check if data exists in cache
    const repositoriesCache = Cache.getCachedData(GITHUB_CACHE_KEY)

    if (repositoriesCache != null) {
      // Data found in cache
      setRepositories(sortRepositories(repositoriesCache.data, GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE))
      // Set last fetch time
      setLastFetch(repositoriesCache.cachedAt)
      // Remove loading flag
      setIsLoading(false)
      // Set show more flag
      setDisplayShowMore(repositoriesCache.data.length > GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE)
    } else {
      // Get repositories from APIs
      getRepositories()
        .then((data) => {
          console.log("DATA FOUND: ", data)
          if (data !== undefined && data != null) {
            // Save repositories data
            setRepositories(sortRepositories(data, GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE))
            // Set show more flag
            setDisplayShowMore(data.length > GITHUB_PROJECTS_SHOWN_IN_HOMEPAGE)
            // Set last fetch time
            setLastFetch(Date.now())
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

    // Create item list
    repositories.forEach((repo) => {
      gridItem.push(
        <Grid item xs={6} key={repo.id} className={classes.gridItem}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <Link href={repo.html_url} target="_blank" className={classes.repoTitle}>
                  {repo.name}
                </Link>
              </Typography>
              <Typography component="p" color="textSecondary">
                { repo.language } &bull; { (new Date(repo.updated_at)).getFullYear() }
              </Typography>
              <Typography variant="body2" component="p" className={classes.cardDescription}>
                { repo.description }
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                href={repo.html_url} 
                target="_blank"
                rel="noopener"
                color="primary"
                variant="contained"
              >
                {i18n.t("Vai al progetto")}
              </Button>
              { repo.homepage !== "" && 
                <Button 
                  size="small"
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  color="secondary"
                >{i18n.t("Vai al sito web")}</Button>
              }
            </CardActions>
          </Card>
        </Grid>
      )
    });

    return (
      <React.Fragment>
        { gridItem }
      </React.Fragment>
    )
  }

  if (isLoading) {
    return (
      <p>{i18n.t("Carico i dati...")}</p>
    );
  } else if (foundError) {
    return (
      <p>
        {i18n.t("Errore durante la lettura dei miei progetti dal server. Puoi vederli comunque visitando il")}
        
        <a 
          href="https://github.com/lucadibello"
          rel="noreferrer"
          title="Portfolio GitHub"
          target="_blank"
        >
          {i18n.t("mio profilo github!")}
        </a>
      </p>
    )
  } else {
    return (
      <Box >
        {
          lastFetch !== null &&
          <p>{i18n.t("LastUpdateAt")} { new Date(lastFetch).toLocaleTimeString() }</p>
        }
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          className={classes.gridContainer}
          id="projects-container"
        >
          <RepoItems />
        </Grid>

        { displayShowMore && 
          <Container id="project-view-all-btn" className={classes.showMoreContainer}>
            <Button
              variant="contained"
              color="primary"
              href={GITHUB_PERSONAL_PROFILE}
              target="_blank"
              rel="noopener"
            >
              {i18n.t("Guarda tutti i progetti")}
            </Button>
          </Container>
        }
     </Box>
    )  
  }
}