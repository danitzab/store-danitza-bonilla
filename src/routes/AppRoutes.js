import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:id" component={Home} />
        </Switch>
      </div>
      <br/>
      <br/>
      <Footer />
    </Router>
  );
};
