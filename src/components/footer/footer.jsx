import React from 'react';

import FooterLinks from '../footer-links';
import Social from '../social';
import BackgroundBox from '../background-box';

const Footer = (props) => (
  <footer className="footer">
    <BackgroundBox
      className="footer__background-box"
      containerClassName="footer__background-box-container"
    >
      <div>
        <FooterLinks
          {...props}
          className="footer__links"
        />
        <p className="footer__copyright">Copyright © 2020 by Dzmitry Tsebruk</p>
      </div>
      <Social className="footer__social" />
    </BackgroundBox>
  </footer>
);

export default Footer;
