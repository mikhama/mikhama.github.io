import React, { useState } from 'react';

import Header from '../header';
import Footer from '../footer';

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

  const collapseMenu = (selectedItem) => {
    setIsMenuCollapseAnimation((state) => !state);
    setTimeout(scrollToTop, 1200);
    setActiveMenuItem(selectedItem);
  };

  return (
    <div className="app">
      <Header
        isMenuCollapseAnimation={isMenuCollapseAnimation}
        collapseMenu={collapseMenu}
        activeMenuItem={activeMenuItem}
      />
      <Footer />
    </div>
  );
};

export default App;
