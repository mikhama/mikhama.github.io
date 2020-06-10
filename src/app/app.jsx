import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Skills from '../skills';

const scrollToTop = () => {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const App = () => {
  const [isMenuCollapseAnimation, setIsMenuCollapseAnimation] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const collapseMenu = async (selectedItem) => {
    setIsMenuCollapseAnimation(true);
    setTimeout(scrollToTop, 1200);
    setActiveMenuItem(selectedItem);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          isMenuCollapseAnimation={isMenuCollapseAnimation}
          collapseMenu={collapseMenu}
          activeMenuItem={activeMenuItem}
          setIsMenuCollapseAnimation={setIsMenuCollapseAnimation}
        />
        <Switch>
          <Route path="/skills" component={Skills} />
        </Switch>
        <Footer
          collapseMenu={collapseMenu}
          setIsMenuCollapseAnimation={setIsMenuCollapseAnimation}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
