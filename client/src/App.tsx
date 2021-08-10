import React from 'react';
import './App.css';
import Navigator from './components/Navigator'
import PresentationCard from './components/PresentationCard';
import Bio from './components/Bio';
import Workflow from './components/Workflow';
import BlackWave from './components/BlackWave';
import Projects from './components/Projects';
import Services from './components/Services';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Paper, Typography, Box, Tooltip } from '@material-ui/core';

import {
  InfoRounded as QuestionIcon
} from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
    },
    homepageImg: {
      width: "100%"
    },
    containerBio: {
      textAlign: 'left',
      color: 'white',
      marginBottom: '5vh',
      marginTop: '5vh'
    },
    containerWhite: {
      backgroundColor: 'white',
      textAlign: 'left',
      color: 'black',
      padding: '20px'
    },
    containerProjects: {
      color: 'white',
      marginBottom: '10vh'
    },
    bgOverlay: {
      position: 'absolute',
      backgroundColor: '#16181A',
      color: 'white',
      borderRadius: '25px',
      padding: '25px',
      left: '100px',
      top: '20vh',
      width: '30%',
      margin: 'auto',
      fontFamily: 'Roboto',
      letterSpacing: '4px'
    },
    nameBox: {
      marginTop: '10%',
      color: 'white',
      width: '100%',
      margin: 'auto'
    },
    waveContainer: {
      backgroundColor: 'white'
    },
    title2: {
      borderBottom: '3px solid black',
    },
    title2White: {
      color: 'white',
      borderBottom: '3px solid white',
    },
    infoButton: {
      color: theme.palette.primary.light,
      marginLeft: '10px',
    },
    spacer: {
      marginBottom: '100vh'
    }
  })
);

function App() {
  const classes = useStyles()
  
  return (
    <div className={classes.app}>
      { /* App navigator */ }
      <Navigator />

      { /* Text over image */ }
      <Paper elevation={3} className={classes.bgOverlay}>
        <PresentationCard />
      </Paper>

      { /* Image background */ }
      <img id="homepageBg" src="/assets/bg.jpg" alt="background" className={classes.homepageImg} draggable={false}/>
      
      <Container className={classes.containerBio}>
        <Bio />
      </Container>

      <Box className={classes.waveContainer}>
        <BlackWave />
      </Box>

      <Box className={classes.containerWhite}>
        <Container>
          <Typography variant="h3" component="h2">
            <span className={classes.title2}>
              Il mio WorkFlow 
              <span className={classes.infoButton}>
                <Tooltip title="Il mio processo di lavoro" arrow placement="top">
                  <QuestionIcon />
                </Tooltip>
              </span>
            </span>
          </Typography>
          <Workflow />
        </Container>
      </Box>

      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" d="M0,192L40,165.3C80,139,160,85,240,69.3C320,53,400,75,480,96C560,117,640,139,720,154.7C800,171,880,181,960,165.3C1040,149,1120,107,1200,106.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </Box>
      
      <Box>
        <Container className={classes.containerProjects}>
          <Typography variant="h3" component="h2">
            <span className={classes.title2White}>
              I miei ultimi progetti
            </span>
          </Typography>
          <Projects />
        </Container>
      </Box>

      <Box className={classes.waveContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#161819" d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </Box>

      <Box className={classes.containerWhite}>
        <Container>
          <Typography variant="h3" component="h2">
            <span className={classes.title2}>
              Servizi
            </span>
          </Typography>
          <Services />
        </Container>
      </Box>

      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFF" d="M0,288L60,250.7C120,213,240,139,360,112C480,85,600,107,720,149.3C840,192,960,256,1080,245.3C1200,235,1320,149,1380,106.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </Box>

      <div className={classes.spacer} />
    </div>
  );
}

/*

TOPICS:
- Technologies I usually use
*/


export default App;
