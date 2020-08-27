/**
 *
 * NaverForm
 *
 */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Container,
  Box,
  Grid,
  Typography,
  CircularProgress,
  MenuItem,
} from '@material-ui/core';

import { ArrowBackIosSharp } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { Album } from 'app/containers/Albums/types';
import { Artist } from 'app/containers/Artists/types';
interface Props {
  handleSubmit: any;
  title: string;
  album?: Album;
  artists: Artist[];
  showAlbum?: any;
  loading?: boolean;
  errors: any;
}

export const AlbumForm = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '' as any,
    year: '' as any,
    artist_id: '' as any,
  });

  useEffect(() => {
    id && props.showAlbum(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    id &&
      setFormData({
        name: props.album?.name,
        year: props.album?.year,
        artist_id: props.album?.artist_id,
      });
  }, [id, props.album]);

  return (
    <Container
      maxWidth="sm"
      component="form"
      onSubmit={e => {
        e.preventDefault();
        props.handleSubmit({ data: formData, id: props.album?.id });
      }}
    >
      <Box marginY={5} width="100%">
        <Link
          to="/albums"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ArrowBackIosSharp color="primary" />
          <Typography variant="h5" color="primary">
            {props.title === 'Edit' ? t('Edit Album') : t('Add Album')}
          </Typography>
        </Link>
      </Box>
      {props.loading ? (
        <Box
          width="100%"
          height="30vh"
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container wrap="wrap" justify="center" spacing={4}>
          <Grid item sm={8} xs={5}>
            <TextField
              error={!!props.errors.name}
              helperText={props.errors.name}
              value={formData.name}
              type="text"
              margin="dense"
              variant="outlined"
              label={t('Name')}
              placeholder={t('Name')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </Grid>

          <Grid item sm={8} xs={5}>
            <TextField
              error={!!props.errors.year}
              helperText={props.errors.year}
              value={formData.year}
              type="number"
              margin="dense"
              variant="outlined"
              label={t('Year')}
              placeholder={t('Year')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => setFormData({ ...formData, year: e.target.value })}
            />
          </Grid>

          <Grid item sm={8} xs={5}>
            <TextField
              error={!!props.errors.artist_id}
              helperText={props.errors.artist_id}
              select
              value={formData.artist_id}
              type="text"
              margin="dense"
              variant="outlined"
              label={t('Artist')}
              placeholder={t('Artist')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e =>
                setFormData({ ...formData, artist_id: e.target.value })
              }
            >
              {props.artists.map(artist => (
                <MenuItem key={artist.id} value={artist.id}>
                  {artist.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid container justify="center" item sm={12} xs={12}>
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                {t('Save')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
