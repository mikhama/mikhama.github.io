import React from 'react';

import FooterLink from '../footer-link';

const links = [
  'about',
  'education',
  'experience',
  'portfolio',
  'skills',
];

const FooterLinks = ({ className, ...props }) => {
  const renderLinks = () => links.map((link) => (
    <li key={link}>
      <FooterLink
        {...props}
        label={link}
        className="footer-links__item"
      />
    </li>
  ));

  return (
    <ul className={`${className} footer-links`}>
      {renderLinks()}
    </ul>
  );
};

export default FooterLinks;
