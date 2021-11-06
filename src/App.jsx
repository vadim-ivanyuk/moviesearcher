import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './components/Header';
import { MoviesPage } from './pages/MoviesPage';
import { SearchPage } from './pages/SearchPage';
import { MoviePage } from './pages/MoviePage';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <BrowserRouter basename='/moviesearcher/'>
      <Header />
      <Switch>
        <Route exact path='/' component={MoviesPage} />
        <Route exact path='/:searchParams' component={SearchPage} />
        <Route exact path='/movie/:id' component={MoviePage} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
