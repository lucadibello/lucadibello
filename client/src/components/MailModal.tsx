import React from 'react';

import { Trans, useTranslation } from 'react-i18next';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@material-ui/core'

import {
  Close as CloseIcon,
  Delete as DeleteIcon,
  MarkunreadMailbox as MarkunreadMailboxIcon
} from '@material-ui/icons'

import { TransitionProps } from '@material-ui/core/transitions';

interface MailModalProps {
  open: boolean,
  onClose: Function
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactMe: {
      backgroundColor: "#54c754"
    }
  })
)

export default function MailModal(props: MailModalProps) {
  // Load languages
  const {t} = useTranslation()

  // Load style
  const classes = useStyles()

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.onClose()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t("modalTitle")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Trans i18nKey="modalPhraseOne">
              Necessiti un <b>sito web</b>? Un <b>applicazione</b> per <b>Android</b> o <b>iOS</b>?
            </Trans>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <Trans i18nKey="modalPhraseContactMe">
              Contattami semplicemente per E-Mail e discuteremo insieme la tua idea! 
            </Trans>
          </DialogContentText>
          <Button
            variant="contained"
            className={classes.contactMe}
            color="primary"
            startIcon={<MarkunreadMailboxIcon />}
            href="mailto:info@lucadibello.ch"
          >
            {t("modalContactButton")}
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => props.onClose()}
            startIcon={<CloseIcon />}
          >
            {t("chiudi")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}