import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography
} from '@material-ui/core';

import {
  Speed as SpeedIcon,
  CallSplit as CallSplitIcon,
  VerifiedUser as VerifiedUserIcon,
  PhoneIphone as PhoneIcon
} from '@material-ui/icons'

import ReactLogo from './ReactLogo';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 400,
      height: "100%"
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
      backgroundColor: "#DE1833"
    },
    iconContainer: {
      marginTop: "10px",
      height: "42px",
      width: "42px"
    },
    icon: {
      height: "42px",
      width: "42px"
    }
  }),
);

export default function ServiceCardApp (...props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <PhoneIcon />
          </Avatar>
        }
        title="Sviluppo App"
        titleTypographyProps={{
          component: "h1",
          variant: "h5"
        }}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Sviluppo di applicazioni multipiattaforma native (quindi utilizzabili sia su dispositivi con Android che su dispositivi Apple)
          usando&nbsp; 
          <Link href="https://reactnative.dev/" rel="noopener" target="_blank">React Native</Link>
        </Typography>
        <br />
        <Typography variant="body1" color="textPrimary" component="p">
          Informazioni aggiuntive:
        </Typography>
        <List className={classes.services}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.checkIcon}>
                <CallSplitIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cross-Platform" secondary="Applicazione subito utilizzabile sia da dispositivi con Android che dispositivi Apple (iOS e iPadOS)" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.hostingIcon}>
                <SpeedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Velocità" secondary="Processo di sviluppo più veloce dato che il prodotto è sin da subito cross-platform" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pwaIcon}>
                <VerifiedUserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User-Friendly" secondary="Interfaccie grafiche semplici, moderne e chiare per offrire una migliore esperienza agli utenti" />
          </ListItem>
        </List>
        <Typography variant="body1" color="textPrimary" component="p">
          Tecnologie utilizzate:
        </Typography>
        <Box className={classes.iconContainer}>
          <Tooltip title="React Native">
           <Box>
             <ReactLogo />
           </Box>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}