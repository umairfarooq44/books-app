// eslint-disable-next-line import/prefer-default-export
export const parseDate = (date) => {
  const abc = new Date(Date.parse(date));
  const [, day, month, year] = abc.toString().split(' ');
  return `${day} ${month} ${year}`;
};
export const getImageUrl = (book) => {
  let path = '';
  if (book.cover_i) {
    path = `id/${book.cover_i}`;
  } else if (book.isbn && book.isbn.length > 0) {
    path = `isbn/${book.isbn[0]}`;
  } else if (book.oclc && book.oclc.length > 0) {
    path = `oclc/${book.oclc[0]}`;
  } else if (book.lccn && book.lccn.length > 0) {
    path = `lccn/${book.lccn[0]}`;
  } else if (book.olid && book.olid.length > 0) {
    path = `olid/${book.olid[0]}`;
  } else if (book.covers && book.covers.length > 0) {
    path = `id/${book.covers[0]}`;
  }
  return `http://covers.openlibrary.org/b/${path}-M.jpg`;
};
