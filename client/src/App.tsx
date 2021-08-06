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
      marginBottom: '10vh',
      marginTop: '5vh'
    },
    containerWhite: {
      backgroundColor: 'white',
      textAlign: 'left',
      color: 'black',
      marginBottom: '10vh',
      padding: '20px'
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
    infoButton: {
      color: theme.palette.primary.light,
      marginLeft: '10px',
    },
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

      <Container className={classes.containerWhite}>
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
    </div>
  );
}

/*

TOPICS:

- Bio
- Portfolio
- Technologies I usually use
- GitHub repositories
-

*/


export default App;
