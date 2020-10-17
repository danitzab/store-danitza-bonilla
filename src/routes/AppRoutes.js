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
      <div className="main-page">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route
            component={() => (
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      className="img-fluid"
                      src="https://cdn.dribbble.com/users/1197927/screenshots/8062981/media/498b9f796d031f3c2370130510d63f2f.gif"
                      alt="not-found"
                    />
                    <h3 className="mt">La página no existe</h3>
                  </div>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
      <br />
      <br />
      <Footer />
    </Router>
  );
};
