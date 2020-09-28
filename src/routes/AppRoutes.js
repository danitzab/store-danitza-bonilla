import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import { Header } from '../components/Header';
import { StoreGrid } from '../components/StoreGrid';
import { Footer } from '../components/Footer';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={StoreGrid} />
        </Switch>
      </div>
      <br/>
      <br/>
      <Footer />
    </Router>
  );
};
