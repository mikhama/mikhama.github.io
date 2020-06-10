import React from 'react';

import FooterLinks from '../footer-links';
import Social from '../social';
import BackgroundBox from '../background-box';

const Footer = ({ collapseMenu, setIsMenuCollapseAnimation }) => (
  <footer className="footer">
    <BackgroundBox
      className="footer__background-box"
      containerClassName="footer__background-box-container"
    >
      <div>
        <FooterLinks className="footer__links" collapseMenu={collapseMenu} setIsMenuCollapseAnimation={setIsMenuCollapseAnimation} />
        <p className="footer__copyright">Copyright © 2020 by Dzmitry Tsebruk</p>
      </div>
      <Social className="footer__social" />
    </BackgroundBox>
  </footer>
);

export default Footer;
