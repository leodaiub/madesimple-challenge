/**
 *
 * Albumss
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectAlbums } from './selectors';
import { albumsSaga } from './saga';
import { Grid, Container, Box, CircularProgress } from '@material-ui/core';
import { Album } from 'app/components/Album';
import { AlbumsHeader } from 'app/components/AlbumsHeader';
import { show } from 'redux-modal';
import DeleteDialog from 'app/components/DeleteDialog';
import InfoDialog from 'app/components/InfoDialog';
import Pagination from '@material-ui/lab/Pagination';
import { AlbumForm } from 'app/components/AlbumForm';
import { useLocation } from 'react-router-dom';
import { selectArtists } from '../Artists/selectors';
import {
  reducer as artistReducer,
  sliceKey as artistSlice,
  actions as artistAction,
} from '../Artists/slice';
import { artistsSaga } from '../Artists/saga';

interface Props {}

export const Albums = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: albumsSaga });
  useInjectReducer({ key: artistSlice, reducer: artistReducer });
  useInjectSaga({ key: artistSlice, saga: artistsSaga });
  const albums = useSelector(selectAlbums);
  const artists = useSelector(selectArtists);
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 8;
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.getAlbums());
    dispatch(artistAction.getArtists());
  }, [dispatch]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleOpen = (name: string, props: any) => {
    dispatch(show(name, props));
  };

  return (
    <>
      <Helmet>
        <title>Albums</title>
        <meta name="description" content="Description of Albumss" />
      </Helmet>
      {pathname.includes('create') ? (
        <AlbumForm
          title="Create"
          handleSubmit={data => dispatch(actions.createAlbum(data))}
          artists={artists.artists}
          loading={albums.loading}
          errors={albums.errors}
        />
      ) : pathname.includes('edit') ? (
        <AlbumForm
          title="Edit"
          showAlbum={id => dispatch(actions.showAlbum(id))}
          album={albums.album}
          loading={albums.loading}
          artists={artists.artists}
          handleSubmit={data => dispatch(actions.updateAlbum(data))}
          errors={albums.errors}
        />
      ) : (
        <>
          <AlbumsHeader />
          {albums.loading ? (
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
            <Container maxWidth="xl">
              <Grid container spacing={2} wrap="wrap" justify="center">
                {albums.albums
                  .slice((page - 1) * PER_PAGE, page * PER_PAGE)
                  .map(album => (
                    <Grid item sm={3} xs={10}>
                      <Album
                        album={album}
                        artist={artists.artists.filter(
                          artist => artist.id === album.artist_id,
                        )}
                        handleModal={handleOpen}
                      />
                    </Grid>
                  ))}
              </Grid>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                marginTop={4}
              >
                <Pagination
                  color="primary"
                  count={Math.ceil(albums.albums.length / PER_PAGE)}
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            </Container>
          )}
        </>
      )}

      <InfoDialog />
      <DeleteDialog handleDelete={id => dispatch(actions.deleteAlbum(id))} />
    </>
  );
});
