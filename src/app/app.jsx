import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, Main } from '../components';

const App = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  const [activePage, setActivePage] = useState(null);
  const [items, setItems] = useState(['experience', 'skills', 'education', 'portfolio']);

  const toggleAnimation = () => setIsAnimationEnabled((state) => !state);

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          isAnimationEnabled={isAnimationEnabled}
          activePage={activePage}
          toggleAnimation={toggleAnimation}
          setActivePage={setActivePage}
          setItems={setItems}
          items={items}
        />
        <Main isAnimationEnabled={isAnimationEnabled} activePage={activePage} />
        <Footer
          isAnimationEnabled={isAnimationEnabled}
          setItems={setItems}
          setActivePage={setActivePage}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
