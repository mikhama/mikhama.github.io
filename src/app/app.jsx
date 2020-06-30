import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Header, Footer } from '../components';
import {
  Skills,
  Education,
  Experience,
  Portfolio,
} from '../pages';

const App = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  const [activePage, setActivePage] = useState(null);

  const toggleAnimation = () => setIsAnimationEnabled((state) => !state);

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          isAnimationEnabled={isAnimationEnabled}
          activePage={activePage}
          toggleAnimation={toggleAnimation}
          setActivePage={setActivePage}
        />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer
          isAnimationEnabled={isAnimationEnabled}
          setActivePage={setActivePage}
        />
      </BrowserRouter>
    </div>
  )
};

export default App;
