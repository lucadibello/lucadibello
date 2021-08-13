import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';

import {
  VerifiedUser as VerifiedUserIcon,
  Dns as DnsIcon,
  Build as BuildIcon,
  Add as AddIcon
} from '@material-ui/icons'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      maxWidth: "400px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    services: {
      color: 'black'
    },
    checkIcon: {
      backgroundColor: "#ED3E2B",
      color: 'white',
    },
    hostingIcon: {
      backgroundColor: "#10B5C7",
    },
    pwaIcon: {
      backgroundColor: "#0E7682"
    },
    centered: {
      textAlign: "center"
    },
    avatar: {
      backgroundColor: "#60AB9A"
    }
  }),
);

export default function ServiceCardExtra (...props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <AddIcon />
          </Avatar>
        }
        title="Servizi aggiuntivi"
        titleTypographyProps={{
          component: "h1",
          variant: "h5"
        }}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Servizi aggiuntivi disponibili durante e dopo il processo di sviluppo o di consegna del prodotto &nbsp; 
        </Typography>
        <br />
          <List className={classes.services}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.checkIcon}>
                  <DnsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Web Server Personale" secondary='Configurazione e management di un server personale (privato) pronto per ospitare siti web in totale sicurezza. Generazione certificati SSL totalmente gratuita' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.hostingIcon}>
                  <BuildIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Docker!" secondary="Docker permette di impacchettare, spedire ed eseguire facilmente qualsiasi applicazione come un contenitore leggero, portatile e autosufficiente." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.pwaIcon}>
                  <VerifiedUserIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Multi-Lingua" secondary="Supporto multi-lingua per il tuo sito web e la tua app!" />
            </ListItem>
          </List>
      </CardContent>
    </Card>
  );
}