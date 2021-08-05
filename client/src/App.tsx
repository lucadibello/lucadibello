import React from 'react';
import './App.css';
import Navigator from './components/Navigator'
import PresentationCard from './components/PresentationCard';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
    },
    img: {
      width: "100%"
    },
    container: {
      textAlign: 'left',
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
  })
);

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      { /* App navigator */ }
      <Navigator />

      { /* Text over image */ }
      <Box className={classes.bgOverlay}>
        <PresentationCard />
      </Box>

      { /* Image background */ }
      <img src="/assets/bg.jpg" alt="background" className={classes.img} draggable={false}/>
      
      <Container className={classes.container}>
        <p>Ciao come va?</p>
        <p>Ciao come va?</p>

        <p>Ciao come va?</p>
        <p>Ciao come va?</p>

        <p>Ciao come va?</p>
        <p>Ciao come va?</p>

        <p>Ciao come va?</p>


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
