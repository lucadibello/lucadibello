import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "40vh",
      zIndex: -1
    },
    video: {
      width: '100%',
      resize: 'vertical',
      zIndex: -1
    }
  })
);

export default function BackgroundVideo () {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <video autoPlay={true} loop={true} muted={true} className={classes.video}>
          <source src="assets/background.mp4"
            type="video/mp4" />
      </video>
    </div>
  );
}