import React from 'react';
import './App.css';
import Navigator from './components/Navigator'
import PresentationCard from './components/PresentationCard';
import Bio from './components/Bio';
import Workflow from './components/Workflow';
import BlackWave from './components/BlackWave';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Paper, Typography, Box, Tooltip } from '@material-ui/core';

import {
  InfoRounded as QuestionIcon
} from '@material-ui/icons'
import Projects from './components/Projects';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
    },
    img: {
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
      color: 'white'
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
      <img src="/assets/bg.jpg" alt="background" className={classes.img} draggable={false}/>
      
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

      <Box >
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

      <div className={classes.spacer} />
    </div>
  );
}

/*

TOPICS:
- Technologies I usually use
*/


export default App;
