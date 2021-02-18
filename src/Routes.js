import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageLoader from './components/ui/PageLoader';
import Header from './components/ui/Header';
// Components
const Home = lazy(() => import('./pages/Home'));
const BookDetail = lazy(() => import('./pages/BookDetail'));

const Routes = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book/:id" component={BookDetail} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
