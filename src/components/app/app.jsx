import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Skills from '../skills';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/skills" component={Skills} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
