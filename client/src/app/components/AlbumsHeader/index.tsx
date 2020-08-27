/**
 *
 * AlbumsHeader
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

interface Props {}

export const AlbumsHeader = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Box boxShadow={0} clone marginY={3}>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box padding={4} clone>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/artists"
              >
                {t('Artists')}
              </Button>
            </Box>{' '}
            <Box padding={4} clone>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/albums/create"
              >
                {t('Add Album')}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
