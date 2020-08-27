/**
 *
 * InfoDialog
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connectModal } from 'redux-modal';
import { Box, IconButton } from '@material-ui/core';
import { InjectedProps } from 'redux-modal';
import { CloseSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

interface Props extends InjectedProps {
  show: boolean;
  handleHide: any;
  title: string;
  message: string;
}

function InfoDialog(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const history = useHistory();
  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={props.show}
        onClose={() => {
          history.push('/albums');
          props.handleHide();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            {props.title}

            <IconButton
              onClick={() => {
                history.push('/albums');
                props.handleHide();
              }}
            >
              <CloseSharp />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default connectModal({ name: 'infoDialog' })(InfoDialog);
