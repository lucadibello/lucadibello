import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  createStyles,
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
import { Trans, useTranslation } from 'react-i18next';

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
    },
    cardActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }),
);

export default function ServiceCardApp (...props: any) {
  const classes = useStyles()
  const { t } = useTranslation()

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
          <Trans i18nKey="serviceAppDesc">
            Sviluppo di applicazioni multipiattaforma native (quindi utilizzabili sia su dispositivi con Android che su dispositivi Apple)
            usando&nbsp; 
            <Link href="https://reactnative.dev/" rel="noopener" target="_blank">React Native</Link>
          </Trans>
        </Typography>
        <br />
        <Typography variant="body1" color="textPrimary" component="p">
          {t("serviceSubtitleFeatures")}
        </Typography>
        <List className={classes.services}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.checkIcon}>
                <CallSplitIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cross-Platform" secondary={t("serviceAppFeatureTwo").toString()} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.hostingIcon}>
                <SpeedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t("serviceAppFeatureTwoTitle").toString()} secondary={t("serviceAppFeatureTwo").toString()} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pwaIcon}>
                <VerifiedUserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User-Friendly" secondary={t("serviceAppFeatureThree").toString()} />
          </ListItem>
        </List>
        <Typography variant="body1" color="textPrimary" component="p">
          {t("serviceSubtitleTech")}
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