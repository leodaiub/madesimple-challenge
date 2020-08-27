/**
 *
 * DeleteDialog
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connectModal } from 'redux-modal';
import { Box } from '@material-ui/core';
import { InjectedProps } from 'redux-modal';

interface Props extends InjectedProps {
  show: boolean;
  handleHide: any;
  handleDelete: any;
  id: string;
}

function DeleteDialog(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={props.show}
        onClose={props.handleHide}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('Delete Record')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Are you sure you want to delete this Record?')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box
            padding={4}
            clone
            color="primary"
            bgcolor="secondary"
            borderColor="primary"
          >
            <Button variant="outlined" onClick={props.handleHide}>
              {t('Cancel')}
            </Button>
          </Box>
          <Box padding={4} clone>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.handleDelete(props.id)}
            >
              {t('Delete')}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connectModal({ name: 'deleteDialog' })(DeleteDialog);
