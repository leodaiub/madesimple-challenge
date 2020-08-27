/**
 *
 * Artists
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectArtists } from './selectors';
import { artistsSaga } from './saga';
import { Grid, Container, Box, CircularProgress } from '@material-ui/core';
import { Artist } from 'app/components/Artist';
import { ArtistsHeader } from 'app/components/ArtistsHeader';
import { show } from 'redux-modal';
import DeleteDialog from 'app/components/DeleteDialog';
import InfoDialog from 'app/components/InfoDialog';
import Pagination from '@material-ui/lab/Pagination';

interface Props {}

export const Artists = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: artistsSaga });
  const artists = useSelector(selectArtists);
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 4;
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.getArtists());
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
        <title>Artists</title>
        <meta name="description" content="Description of Artists" />
      </Helmet>

      <>
        <ArtistsHeader />
        {artists.loading ? (
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
              {artists.artists
                .slice((page - 1) * PER_PAGE, page * PER_PAGE)
                .map(artist => (
                  <Grid item sm={3} xs={10}>
                    <Artist artist={artist} handleModal={handleOpen} />
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
                count={Math.ceil(artists.artists.length / PER_PAGE)}
                page={page}
                onChange={handleChange}
              />
            </Box>
          </Container>
        )}
      </>

      <InfoDialog />
      <DeleteDialog handleDelete={id => dispatch(actions.deleteArtist(id))} />
    </>
  );
});
