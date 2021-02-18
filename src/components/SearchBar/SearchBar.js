import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { onSearchQueryChange, getBooks } from '../../store/actions/booksListActions';

const useStyles = makeStyles({
  textField: {
    width: 500,
    '& .MuiOutlinedInput-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  button: {
    height: 56,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { searchQuery } = useSelector(({ books }) => ({ ...books }));

  const handleSearchChange = (e) => {
    dispatch(onSearchQueryChange(e.target.value));
  };

  const onSearch = () => {
    dispatch(getBooks({ searchQuery: searchQuery.trim().replace(/ /g, '+'), pageNumber: 1 }));
  };

  return (
    <Grid container justify="center">
      <TextField
        className={classes.textField}
        value={searchQuery}
        onChange={handleSearchChange}
        variant="outlined"
        helperText="Enter text to search the books"
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={onSearch}
        disabled={!searchQuery}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Grid>
  );
};

export default SearchBar;
