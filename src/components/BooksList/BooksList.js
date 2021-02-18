import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PageLoader from '../ui/PageLoader';
import BookCard from '../BookCard';
import { getBooks } from '../../store/actions/booksListActions';

const useStyles = makeStyles({
  container: {
    margin: '32px 0',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
});

const BooksList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { searchQuery, data, loading } = useSelector(({ books }) => ({ ...books }));

  const onPageChange = (event, pageNumber) => {
    dispatch(getBooks({ searchQuery: searchQuery.trim().replace(/ /g, '+'), pageNumber }));
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <Grid container justify="center">
          <PageLoader />
        </Grid>
      ) : (
        <>
          <Grid container spacing={3}>
            {data?.docs?.map((item) => (
              <Grid item xs={3}>
                <BookCard book={item} />
              </Grid>
            ))}
          </Grid>
          {data?.docs?.length > 0 && (
            <Pagination
              className={classes.pagination}
              count={Math.ceil(data.numFound / 12)}
              page={data.start / 12 + 1}
              onChange={onPageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BooksList;
