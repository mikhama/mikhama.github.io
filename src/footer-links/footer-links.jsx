import React from 'react';

const FooterLinks = ({ className }) => (
  <ul className={`${className} footer-links`}>
    <li>
      <a className="footer-links__item footer-links__item_active">#about</a>
    </li>
    <li>
      <a className="footer-links__item">#education</a>
    </li>
    <li>
      <a className="footer-links__item">#experience</a>
    </li>
    <li>
      <a className="footer-links__item">#portfolio</a>
    </li>
    <li>
      <a className="footer-links__item">#skills</a>
    </li>
  </ul>
);

export default FooterLinks;
