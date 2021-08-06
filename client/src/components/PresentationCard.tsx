import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  Box,
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
    <Box id="presentationCard" className={classes.wrapper}>
      <h1 className={classes.title}>Luca Di Bello</h1>
      <small>App & Web Developer</small>
      <br />
      <Box className={classes.socialIcons}>
        <Typography display="inline">
          <Link href="https://github.com/lucadibello" target="_blank">
            <Tooltip title="GitHub" arrow>
              <GitHubIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>

        <Typography display="inline">
          <Link href="https://www.instagram.com/lucaa_dibello/" target="_blank">
            <Tooltip title="Instagram" arrow>
              <InstagramIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>

        <Typography display="inline">
          <Link href="mailto:info@lucadibello.ch" target="_blank">
            <Tooltip title="Email" arrow>
              <EmailIcon className={classes.spaceAround}/>
            </Tooltip>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}