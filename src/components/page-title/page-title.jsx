import React from 'react';

const PageTitle = ({ titleLabel, className }) => (
  <div className={`${className} page-title`}>
    <h2 className="page-title__label">{titleLabel}</h2>
  </div>
);

export default PageTitle;
