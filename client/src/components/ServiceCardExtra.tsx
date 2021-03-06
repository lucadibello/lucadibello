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
  Dns as DnsIcon,
  Build as BuildIcon,
  Add as AddIcon,
  GTranslate as TranslateIcon
} from '@material-ui/icons'
import { Trans, useTranslation } from 'react-i18next';

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
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Card className={classes.root} {...props}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <AddIcon />
          </Avatar>
        }
        title={t("serviceExtraTitle").toString()}
        titleTypographyProps={{
          component: "h1",
          variant: "h5"
        }}
      />
      <CardContent>
        <Trans i18nKey="serviceExtraDesc">
          <Typography variant="body1" color="textSecondary" component="p">
            Servizi aggiuntivi disponibili durante e dopo il processo di sviluppo o di consegna del prodotto &nbsp; 
          </Typography>
        </Trans>
        <br />
          <List className={classes.services}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.checkIcon}>
                  <DnsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={t("serviceExtraFeatureOneTitle")} secondary={t("serviceExtraFeatureOne")} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.hostingIcon}>
                  <BuildIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={t("serviceExtraFeatureTwoTitle")} secondary={t("serviceExtraFeatureTwo")} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.pwaIcon}>
                  <TranslateIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={t("serviceExtraFeatureThreeTitle")} secondary={t("serviceExtraFeatureThree")} />
            </ListItem>
          </List>
      </CardContent>
    </Card>
  );
}