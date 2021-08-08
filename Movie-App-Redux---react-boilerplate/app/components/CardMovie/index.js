import { Box, makeStyles, Typography } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DEFAULT_IMAGE, IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: 'auto',
  },
}));

function CardMovie({ img, alt, name, character }) {
  const classes = useStyles();
  return (
    <Box bgcolor="#47474754" height="100%">
      <img
        className={classes.img}
        src={img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : DEFAULT_IMAGE}
        alt={alt}
      />
      <Box textAlign="center" py={2}>
        <Typography color="secondary" variant="h6">
          {name}
        </Typography>
        {character && <Typography color="secondary">{character}</Typography>}
      </Box>
    </Box>
  );
}

CardMovie.propTypes = {
  img: PropTypes.any,
  alt: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
const withConnect = connect(
  null,
  null,
);
export default compose(
  withConnect,
  memo,
)(CardMovie);
