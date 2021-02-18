import React from 'react';
import { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getImageUrl } from '../../utils';

const useStyles = makeStyles({
  container: {
    minHeight: 500,
  },
});

const BookDetailInfo = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <img src={getImageUrl(book)} alt="book" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h3">{book.title}</Typography>
          <Typography gutterBottom>{book?.description?.value}</Typography>
          <Typography variant="subtitle2">Type: {book.subjects?.join(', ')}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

BookDetailInfo.propTypes = {
  book: object,
};

export default BookDetailInfo;
