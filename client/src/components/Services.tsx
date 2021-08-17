import React from 'react'
import loadable from '@loadable/component'
import { createStyles, makeStyles,  } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const ServiceCardWeb = loadable(() => import('./ServiceCardWeb'))
const ServiceCardApp = loadable(() => import('./ServiceCardApp'))
const ServiceCardExtra = loadable(() => import('./ServiceCardExtra'))

const useStyles = makeStyles(() =>
  createStyles({
    serviceCard: {
      margin: "10px"
    },
    servicesWrapper: {
      marginTop: "3vh",
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
      justifyContent: "space-evenly",
      padding: "10px",
      flexWrap: "wrap"
    },
    bottom: {
      display: "flex",
      justifyContent: "center",
      padding: "30px"
    }
  })
)
export default function Services () {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box id="servicesAppWebContainer" className={classes.servicesWrapper}>
        <Box className={classes.serviceCard}>
          <ServiceCardWeb />
        </Box>
        <Box className={classes.serviceCard}>
          <ServiceCardApp />
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <ServiceCardExtra />
      </Box>
    </React.Fragment>
  )
}