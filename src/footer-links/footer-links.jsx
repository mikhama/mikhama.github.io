import React from 'react';

import FooterLink from '../footer-link';

const links = [
  'about',
  'education',
  'experience',
  'portfolio',
  'skills',
];

const FooterLinks = ({ className, collapseMenu, setIsMenuCollapseAnimation }) => {
  const renderLinks = () => links.map((link) => (
    <li key={link}>
      <FooterLink label={link} collapseMenu={collapseMenu} className="footer-links__item" setIsMenuCollapseAnimation={setIsMenuCollapseAnimation} />
    </li>
  ));

  return (
    <ul className={`${className} footer-links`}>
      {renderLinks()}
    </ul>
  );
};

export default FooterLinks;
