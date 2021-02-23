import React from 'react';
import { object } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getImageUrl } from '../../utils';

const useStyles = makeStyles({
  img: {
    height: 300,
    backgroundSize: '100% 100%',
  },
  container: {
    cursor: 'pointer',
  },
});

const BookCard = ({ book }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    const [, , id] = book.key.split('/');
    history.push(`/book/${id}`);
  };

  return (
    <Card onClick={handleClick} className={classes.container}>
      <CardMedia className={classes.img} image={getImageUrl(book)} title="Paella dish" />
      <CardContent>
        <Tooltip title={book.title}>
          <Typography variant="h6">
            {book.title?.length > 20 ? `${book.title?.substring(0, 20)}...` : book.title}
          </Typography>
        </Tooltip>
        <Typography> by {book.author_name ? book.author_name[0] : 'UnKnown'}</Typography>
        <Typography variant="caption" color="textSecondary" display="block">
          First published in {book.first_publish_year}
        </Typography>
        <Typography variant="caption">
          {book.edition_count} Editions in {book.language?.length} language
          {book.language?.length > 1 ? 's' : ''}
        </Typography>
      </CardContent>
    </Card>
  );
};

BookCard.propTypes = {
  book: object,
};

export default BookCard;
