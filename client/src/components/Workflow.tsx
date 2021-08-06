import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper
} from '@material-ui/core'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,

} from '@material-ui/lab'

import {
  AccessAlarm as AccessAlarmIcon,
  Person as PersonIcon,
  DeveloperMode as DeveloperIcon,
  Check as CheckIcon
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  titleBold: {
    fontWeight: 'bold'
  },
  newWorkIcon: {
    backgroundColor: 'white'
  },
  deployIcon: {
    backgroundColor: 'green'
  },
  developmentIcon: {
    backgroundColor: 'orange'
  }
}));

export default function BioSchools () {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={classes.newWorkIcon}>
          <AccessAlarmIcon color="secondary" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h2" className={classes.titleBold}>
            Nuova richiesta
          </Typography>
          <Typography>Richiesta di lavoro ricevuta</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <PersonIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1" className={classes.titleBold}>
            Colloquio con il cliente
          </Typography>
          <Typography>Analisi dei requisiti del prodotto tramite un colloquio di persona o da remoto</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={classes.developmentIcon}>
          <DeveloperIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1" className={classes.titleBold}>
            Sviluppo
          </Typography>
          <Typography>Processo di sviluppo del prodotto dove il cliente potrà in ogni momento vedere lo stato del lavoro.</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={classes.deployIcon}>
          <CheckIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1" className={classes.titleBold}>
            Consegna
          </Typography>
          <Typography>Prodotto consegnato al cliente</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  )
} 