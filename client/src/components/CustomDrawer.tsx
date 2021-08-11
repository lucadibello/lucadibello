import React from 'react'

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Button,
  Typography,
  Box
} from '@material-ui/core';

import {
  MailOutlineOutlined as MailIcon,
  EmojiPeople as PeopleIcon,
  Work as WorkIcon,
  AccountTree as ProjectIcon,
  Close as CloseIcon,
  SvgIconComponent
} from '@material-ui/icons';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface LucaDrawerProps {
  open: boolean,
  onClose: React.ReactEventHandler<{}>,
  onOpen: React.ReactEventHandler<{}>
}

interface DrawerItem {
  text: string,
  icon: SvgIconComponent
}

const listItems: DrawerItem[] = [
  {
    text: "Bio",
    icon: PeopleIcon
  },
  {
    text: "WorkFlow",
    icon: ProjectIcon
  },
  {
    text: "Progetti",
    icon: WorkIcon
  },
  {
    text: "Servizi offerti",
    icon: MailIcon
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerListItems: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center !important',
      justifyContent: 'center'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'center',
      background: '#161819',
      color: 'white'
    },
    listItem: {
      height: "10vh"
    },
    drawerSpacer: {
      flexGrow: 1
    }
  })
)

export default function CustomDrawer (props: LucaDrawerProps) {
  const classes = useStyles()
  return (
    <nav aria-label="swipable menu">
      <SwipeableDrawer
        anchor={"left"}
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}
        disableBackdropTransition={false}
        className={classes.drawerListItems}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h5" component="h2">
            Navigazione
          </Typography>
        </div>
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#161819" fillOpacity="1" d="M0,160L205.7,160L411.4,288L617.1,192L822.9,64L1028.6,160L1234.3,160L1440,288L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"></path>
          </svg>
        </Box>
        <List>
          {listItems.map((item) => (
            <ListItem button key={item.text} className={classes.listItem}>
              <ListItemIcon>
                <SvgIcon component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <div className={classes.drawerSpacer} />
        <Button
          color="secondary"
          onClick={props.onClose}
          startIcon={<CloseIcon />}
        >
          Chiudi
        </Button>
      </SwipeableDrawer>
    </nav>
  )
}