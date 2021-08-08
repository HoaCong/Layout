/**
 *
 * DetailMoive
 *
 */
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CardMovie from '../../components/CardMovie';
import { DEFAULT_IMAGE, IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { getDetailMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectActor, makeSelectDetailMoive } from './selectors';
const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '100%',
    minHeight: '492px',
  },
  root: {
    backgroundSize: 'cover',
  },
}));

export function DetailMoive({ triggerDetailMovie, detailMoive, actors }) {
  const classes = useStyles();
  useInjectReducer({ key: 'detailMoive', reducer });
  useInjectSaga({ key: 'detailMoive', saga });

  const { id } = useParams();
  useEffect(() => {
    triggerDetailMovie(id);
  }, [id]);
  return (
    <>
      {detailMoive && (
        <>
          <Box
            className={classes.root}
            py={15}
            style={{
              backgroundImage: `url(${IMAGE_BASE_URL}original${
                detailMoive.backdrop_path
              })`,
            }}
          >
            <Grid container justifyContent="center">
              <Container>
                <Box display="flex" flexWrap="wrap">
                  <Grid item xs={12} sm={6} md={5}>
                    <img
                      className={classes.img}
                      src={
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${
                          detailMoive.poster_path
                        }` || DEFAULT_IMAGE
                      }
                      alt={detailMoive.poster_path}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={7}>
                    <Box color="#fff" p={5} bgcolor="#000000ab" height="100%">
                      <Typography variant="h4" gutterBottom>
                        Movie: {detailMoive.title}
                      </Typography>
                      <Typography gutterBottom>
                        Overview: {detailMoive.overview}
                      </Typography>
                      <Typography gutterBottom>
                        TOTAL RATING: {detailMoive.vote_count}
                      </Typography>

                      <Box borderColor="transparent">
                        <Typography component="legend">IMDB RATING:</Typography>
                        <Rating
                          name="read-only"
                          value={detailMoive.vote_average}
                          readOnly
                          max={10}
                        />
                      </Box>
                      <Typography gutterBottom>
                        #Tag_line: {detailMoive.tagline}
                      </Typography>
                      <Typography gutterBottom>
                        Running Time: {detailMoive.runtime}
                      </Typography>
                      <Typography gutterBottom>
                        Budget: {detailMoive.budget}
                      </Typography>
                      <Typography gutterBottom>
                        Revenue: {detailMoive.revenue}
                      </Typography>
                      <Typography gutterBottom>
                        release_date: {detailMoive.release_date}
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Container>
            </Grid>
          </Box>
        </>
      )}
      <Box mx={2} mt={2}>
        <Typography color="secondary" variant="h3" gutterBottom>
          Actors
        </Typography>
        <Grid container spacing={2}>
          {actors &&
            actors.cast.map((i, index) => (
              <Grid item xs={6} sm={4} md={2} key={(() => `${index}`)()}>
                <CardMovie
                  img={i.profile_path}
                  alt={i.name}
                  name={i.name}
                  character={i.character}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

DetailMoive.propTypes = {
  triggerDetailMovie: PropTypes.func,
  detailMoive: PropTypes.any,
  actors: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  detailMoive: makeSelectDetailMoive(),
  actors: makeSelectActor(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerDetailMovie: id => dispatch(getDetailMovies(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailMoive);
