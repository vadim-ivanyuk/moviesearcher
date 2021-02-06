import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MoviesPage } from "./components/pages/MoviesPage";

export const App = () => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter basename="/moviesearcher/">
      <Header />
      <Route path="/" component={MoviesPage} />
    </BrowserRouter>
  );
};
