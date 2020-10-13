import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Pages
import { Home } from '../pages/Home';
import { History } from '../pages/History';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={History} />
        </Switch>
      </div>
      <br />
      <br />
      <Footer />
    </Router>
  );
};
