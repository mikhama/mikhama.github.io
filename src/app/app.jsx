import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Header, Footer } from '../components';
import {
  Skills,
  Education,
  Experience,
  Portfolio,
} from '../pages';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
