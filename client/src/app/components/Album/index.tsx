/**
 *
 * Album
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Album as AlbumType } from 'app/containers/Albums/types';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { EditSharp, DeleteSharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@material-ui/core';
import Can from '../Can';

interface Props {
  album: AlbumType;
  artist: any;
  handleModal: any;
}

export function Album(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Box
          key={props.album.id}
          maxWidth="100%"
          display="flex"
          flexDirection="column"
          onClick={e => {
            e.stopPropagation();
            props.handleModal('albumModal', { albumId: props.album.id });
          }}
        >
          <Box display="flex" fontWeight={900}>
            <Typography variant="inherit">{t('Name')}: </Typography>
            <Typography variant="body2">{props.album.name}</Typography>
          </Box>
          <Box display="flex" fontWeight={900}>
            <Typography variant="inherit">{t('Artist Name')}: </Typography>
            <Typography variant="body2">{props.artist[0]?.name}</Typography>
          </Box>
          <Box display="flex" fontWeight={900}>
            <Typography variant="inherit">{t('Year')}: </Typography>
            <Typography variant="body2">{props.album.year}</Typography>
          </Box>

          <Box marginRight={-3}>
            <IconButton
              edge="start"
              onClick={e => {
                e.stopPropagation();
                props.handleModal('deleteDialog', { id: props.album.id });
              }}
            >
              <Can do="delete" on="Album">
                <DeleteSharp color="primary" />
              </Can>
            </IconButton>
            <Link
              to={'albums/edit/' + props.album.id}
              onClick={e => e.stopPropagation()}
            >
              <IconButton edge="start">
                <EditSharp color="primary" />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
