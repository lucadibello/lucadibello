import { Box, Typography } from '@material-ui/core'
import { classes } from 'istanbul-lib-coverage';
import React from 'react'
import DockerLogo from './DockerLogo';
import ReactLogo from './ReactLogo';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    poweredByContainer: {
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center"
    },
    poweredLogo: {
      marginRight: "10px",
      marginLeft: "10px"
    }
  })
)

export default function PoweredBy () {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box className={classes.poweredByContainer}>
        <Typography>
          Powered by 
        </Typography>

        <Box className={classes.poweredLogo}>
          <ReactLogo />
        </Box>

        <Typography>
          +
        </Typography>
        
        <Box className={classes.poweredLogo}>
          <DockerLogo />
        </Box>
      </Box>
    </React.Fragment>
  );
}