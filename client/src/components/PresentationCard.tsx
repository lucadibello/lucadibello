import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  Box,
  Paper,
  Typography,
  Link,
  Tooltip
} from '@material-ui/core';

import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  EmailSharp as EmailIcon
} from '@material-ui/icons'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: 0
    },
    spaceAround: {
      marginLeft: 5,
      marginRight: 5
    },
    socialIcons: {
      marginTop: '10px'
    },
    wrapper: {
      backgroundColor: 'inherit',
      color: 'inherit'
    }
  })
);


export default function PresentationCard () {
  const classes = useStyles()

  return (
    <Paper id="presentationCard" className={classes.wrapper}>
      <h1 className={classes.title}>Luca Di Bello</h1>
      <small>App & Web Developer</small>
      <br />
      <Box className={classes.socialIcons}>
        <Typography display="inline">
          <Link href="https://github.com/lucadibello" target="_blank">
            <Tooltip title="GitHub">
              <GitHubIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>

        <Typography display="inline">
          <Link href="https://www.instagram.com/lucaa_dibello/" target="_blank">
            <Tooltip title="Instagram">
              <InstagramIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>

        <Typography display="inline">
          <Link href="#" target="_blank">
            <Tooltip title="Email">
              <EmailIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>

        
      </Box>
    </Paper>
  );
}