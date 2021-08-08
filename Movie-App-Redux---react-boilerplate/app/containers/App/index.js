import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DetailMoive from '../DetailMoive';
import HomeMovie from '../HomeMovie/Loadable';
export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeMovie} />
        <Route path="/:id" component={DetailMoive} />
      </Switch>
      <Footer />
    </>
  );
}
