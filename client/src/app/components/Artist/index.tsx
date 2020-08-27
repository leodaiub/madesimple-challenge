/**
 *
 * Artist
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Artist as ArtistType } from 'app/containers/Artists/types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, CardContent } from '@material-ui/core';

interface Props {
  artist: ArtistType;
  handleModal: any;
}

export function Artist(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Box
          key={props.artist.id}
          maxWidth="100%"
          display="flex"
          flexDirection="column"
          onClick={e => {
            e.stopPropagation();
            props.handleModal('artistModal', { artistId: props.artist.id });
          }}
        >
          <Box display="flex" fontWeight={900}>
            <Typography variant="inherit">{t('Name')}: </Typography>
            <Typography variant="body2"> {props.artist.name}</Typography>
          </Box>
          <Box display="flex" fontWeight={900}>
            <Typography variant="inherit">Twitter: </Typography>
            <Typography variant="body2"> {props.artist.twitter}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
