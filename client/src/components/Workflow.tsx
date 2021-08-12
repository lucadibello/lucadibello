import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import i18n from '../services/TranslateService'

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
            {i18n.t("Nuova richiesta")}
          </Typography>
          <Typography>{i18n.t("Richiesta di lavoro ricevuta")}</Typography>
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
            {i18n.t("Colloquio con il cliente")}
          </Typography>
          <Typography>{i18n.t("Analisi dei requisiti del prodotto tramite un colloquio di persona o da remoto")}</Typography>
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
            {i18n.t("Sviluppo")}
          </Typography>
          <Typography>{i18n.t("Processo di sviluppo del prodotto dove il cliente potrà in ogni momento vedere lo stato del lavoro")}</Typography>
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
            {i18n.t("Consegna")}
          </Typography>
          <Typography>{i18n.t("ConsegnaDescrizione")}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  )
} 