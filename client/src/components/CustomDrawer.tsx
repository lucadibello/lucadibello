import React from 'react'

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from '@material-ui/core';

import {
  MailOutlineOutlined as MailIcon,
  SvgIconComponent
} from '@material-ui/icons';

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
    icon: MailIcon
  },
  {
    text: "WorkFlow",
    icon: MailIcon
  },
  {
    text: "Progetti",
    icon: MailIcon
  },
  {
    text: "Servizi",
    icon: MailIcon
  },
]

export default function CustomDrawer (props: LucaDrawerProps) {
  return (
    <nav aria-label="mailbox folders">
      <SwipeableDrawer
        anchor={"left"}
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}
        disableBackdropTransition={false}
      >
        <List>
          {listItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>
                <SvgIcon component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </nav>
  )
}