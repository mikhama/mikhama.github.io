import React from 'react';

const BackgroundBox = ({ children, className, containerClassName }) => (
  <div className={`${className} background-box`}>
    <div className={`${containerClassName} background-box__container`}>
      {children}
    </div>
  </div>
);

export default BackgroundBox;
