import React from 'react';

const Article = ({ children, className }) => (
  <article className={`${className} article`}>
    {children}
  </article>
);

export default Article;
