import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../../components/SearchBar';
import BooksList from '../../components/BooksList';

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <BooksList />
    </Container>
  );
};

export default Home;
