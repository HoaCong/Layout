import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import _debounce from 'lodash/debounce';
import _trim from 'lodash/trim';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CardMovie from '../../components/CardMovie';
import Introduce from '../../components/Introduce';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { getMovies, getSearchResult, loadMore } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectHomeMovie, {
  makeSelectCurrentPage,
  makeSelectTotalPage,
} from './selectors';
export function HomeMovie({
  triggerListMovie,
  listMovie,
  triggerLoadMore,
  currentPage,
  totalPage,
  triggerSearch,
}) {
  useInjectReducer({ key: 'homeMovie', reducer });
  useInjectSaga({ key: 'homeMovie', saga });

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    triggerListMovie({ lang: 'en-US', page: 1, query: searchValue });
  }, []);

  const handleLoadMore = () => {
    triggerLoadMore({
      lang: 'en-US',
      page: currentPage + 1,
      query: searchValue,
    });
  };

  const delayedQuery = useCallback(
    _debounce(valueSearch => {
      // trigger call API
      triggerSearch({
        lang: 'en-US',
        query: valueSearch,
        page: 1,
      });
      setSearchValue(valueSearch);
    }, 500),
    [],
  );

  const getValueInput = e => {
    delayedQuery(_trim(e.target.value));
  };

  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <Introduce />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box
            width="100%"
            bgcolor="#fff"
            display="flex"
            flexDirection="column"
            mx="auto"
            borderRadius="5px"
          >
            <TextField
              variant="outlined"
              placeholder="Tìm kiếm phim"
              onChange={getValueInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box color="red" component="h4" fontSize={36}>
        {searchValue && searchValue !== ''
          ? `Kết quả tìm kiếm cho: ${searchValue}`
          : 'Các bộ phim phổ biến'}
      </Box>
      <Grid container spacing={2}>
        {listMovie.length > 0 &&
          listMovie.map(i => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={`${i.title}${i.id}`}>
              <Link to={`/${i.id}`}>
                <CardMovie img={i.poster_path} alt={i.title} name={i.title} />
              </Link>
            </Grid>
          ))}
      </Grid>
      <Box textAlign="center" my={5}>
        {currentPage < totalPage && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLoadMore}
          >
            <Box px={5} py={1} fontSize={20}>
              Xem Thêm
            </Box>
          </Button>
        )}
      </Box>
    </Box>
  );
}

HomeMovie.propTypes = {
  listMovie: PropTypes.any,
  triggerListMovie: PropTypes.func,
  triggerSearch: PropTypes.func,
  triggerLoadMore: PropTypes.any,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  listMovie: makeSelectHomeMovie(),
  currentPage: makeSelectCurrentPage(),
  totalPage: makeSelectTotalPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    triggerListMovie: data => dispatch(getMovies(data)),
    triggerLoadMore: data => dispatch(loadMore(data)),
    triggerSearch: data => dispatch(getSearchResult(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomeMovie);
