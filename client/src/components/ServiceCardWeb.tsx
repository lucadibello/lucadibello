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
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Language as LanguageIcon,
  Storage as StorageIcon,
  WifiOff as WifiOffIcon,
  Check as CheckIcon
} from '@material-ui/icons'
import ReactLogo from './ReactLogo';
import DockerLogo from './DockerLogo';
import NuxtLogo from './NuxtLogo';
import VueLogo from './VueLogo';
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
      backgroundColor: "green",
      color: 'white',
    },
    hostingIcon: {
      backgroundColor: "#F74F5A",
    },
    pwaIcon: {
      backgroundColor: "#0275d8"
    },
    centered: {
      textAlign: "center"
    },
    avatar: {
      backgroundColor: "#DE1833"
    },
    iconContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      marginTop: "10px"
    },
    icon: {
      height: "42px",
      width: "42px"
    },
    cardActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },
    grow: {
      flexGrow: 1  
    }
  }),
);

export default function ServiceCardWeb (...props: any) {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <LanguageIcon />
          </Avatar>
        }
        title={t("serviceWebTitle").toString()}
        titleTypographyProps={{
          component: "h1",
          variant: "h5"
        }}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          <Trans i18nKey="serviceWebDesc">
            Sviluppo di pagine web utilizzabili su qualsiasi tipo di dispositivo tramite
            nuove tecnologie di sviluppo come&nbsp; 
            <Link href="https://reactjs.org/" rel="noopener" target="_blank">ReactJS</Link>
            &nbsp;oppure&nbsp;
            <Link href="https://vuejs.org/" rel="noopener" target="_blank">VueJS</Link>
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
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="SEO-Ready" secondary={t("serviceWebFeatureOne").toString()} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.hostingIcon}>
                <StorageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Hosting" secondary={t("serviceWebFeatureOne").toString()} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pwaIcon}>
                <WifiOffIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="PWA" secondary={t("serviceWebFeatureThree").toString()} />
          </ListItem>
        </List>
        <Typography variant="body1" color="textPrimary" component="p">
          {t("serviceSubtitleTech")}
        </Typography>
        <Box className={classes.iconContainer}>
          <Tooltip title="ReactJS">
            <Box className={classes.icon}>
                <ReactLogo />
            </Box>
          </Tooltip>
          <Tooltip title="NuxtJS">
            <Box className={classes.icon}>
              <NuxtLogo />
            </Box>
          </Tooltip>
          <Tooltip title="VueJS">
            <Box className={classes.icon}>
              <VueLogo />
            </Box>
          </Tooltip>
          <Tooltip title="Docker">
            <Box className={classes.icon}>
              <DockerLogo />
            </Box>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}