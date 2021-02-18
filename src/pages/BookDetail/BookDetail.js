import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import PageLoader from '../../components/ui/PageLoader';
import BookDetailInfo from '../../components/BookDetailInfo';
import getBook from '../../store/actions/bookActions';

const BookDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBook(id));
  }, []);
  const { data, loading } = useSelector(({ book }) => ({ ...book }));
  if (loading) {
    return <PageLoader />;
  }
  return (
    <Container>
      <BookDetailInfo book={data} />
    </Container>
  );
};
export default BookDetail;
