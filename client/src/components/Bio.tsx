import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallerTitle: {
    },
    initialLetter: {
      fontSize: '170px'
    },
    titleWelcome: {
      fontSize: '90px'
    },
    bioBody: {
      padding: '20px'
    },
    highlited: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%)',
      backgroundSize: '200% auto',
      color: '#222',
      lineHeight: '1.15em',
      textDecoration: 'none',
      transition: 'background-position 0.5s ease-out',
      backgroundPosition: '-100% 0'
    },
    underlined: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%)',
      backgroundPosition: '-0% 0',
      backgroundSize: '200% auto',
      color: 'white',
      borderBottom: '1px solid #FFF',
      paddingBottom: '1px',
      transition: '0.5s ease-in-out',
    }
  })
);
  
export default function Bio () {
  // Use classes
  const classes = useStyles()

  const [highlited, setHightlited] = React.useState(false);
  
  // Return component
  return (
    <Box>
      <Typography variant="h1" component="h2" paragraph={true}>
        <span className={classes.initialLetter}>C</span><span className={classes.titleWelcome}>iao!</span>
      </Typography>
      <Box className={classes.bioBody}>
        <Typography variant="h3" component="h3" paragraph={true}>
          Mi chiamo&nbsp;
          <span 
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            Luca Di Bello
          </span>
        </Typography>
        
        <Typography variant="h5" component="p" paragraph={true}>
          Il mondo dell'informatica mi appassiona sin da quando ho 6 anni. Attualmente sto frequentando il corso di&nbsp;
          <span
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            Bachelor in Ingegeria Informatica alla SUPSI
          </span>
        </Typography>

        <Typography variant="h5" component="p">
          <span
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            Molte delle mie conoscenze sono state apprese da autoditatta
          </span>
          ,&nbsp;tramite progetti personali e per privati. Dai un occhio al mio portfolio!
        </Typography>
      </Box>
    </Box>
  );
}