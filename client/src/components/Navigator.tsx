import React from 'react'
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Typography
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  MailOutlineOutlined as MailIcon
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '13px',
      textTransform: 'uppercase'
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      color: 'black',
      backgroundColor: '#E4E4E4'
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    spacer: 
    {
      marginLeft: "10px",
      cursor: "pointer",
      fontWeight: 600
    },
    active: {
      color: "red"
    }
  }),
);

interface NavigatorProps {
  onMenuToggle: (event: React.MouseEvent<HTMLElement>) => void,
  onModalToggle: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Navigator (props: NavigatorProps) {
  const {i18n} = useTranslation()
  const classes = useStyles();

  function setActive(prefix: string, activeClass: string): string {
    if (i18n !== null && i18n !== undefined) {
      if (i18n.language !== undefined) {
        if (i18n.language.toLowerCase() === prefix.toLowerCase()) {
          return activeClass
        }
      }
    }
    return ""
  }

  function setLang (locale: string): void {
    i18n.changeLanguage(locale)
  }

  return (
    <React.Fragment>  
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open menu"
            role="presentation"
            component="span"
            onClick={props.onMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Fab 
            color="secondary" 
            aria-label="add"
            className={classes.fabButton}
            onClick={props.onModalToggle}
          >
            <MailIcon />
          </Fab>
          <div className={classes.grow} />
          <Typography 
            className={classes.spacer + " " + (setActive("IT", classes.active))}
            onClick={() => setLang("it")}
          >
            IT
          </Typography>
          <Typography
            className={classes.spacer + " " + (setActive("FR", classes.active))}
            onClick={() => setLang("fr")}
          >
            FR    
          </Typography>
          <Typography
            className={classes.spacer + " " + (setActive("DE", classes.active))}
            onClick={() => setLang("de")}
          >
            DE    
          </Typography>
          <Typography
            className={classes.spacer + " " + (setActive("EN", classes.active))}
            onClick={() => setLang("en")}
          >
            EN    
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
