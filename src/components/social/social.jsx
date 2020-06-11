import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Social = ({ className }) => (
  <ul className={`${className} social`}>
    <li className="social__item social__item_linkedin">
      <a><FontAwesomeIcon className="social__icon" icon={faLinkedin} /></a>
    </li>
    <li className="social__item social__item_github">
      <a><FontAwesomeIcon className="social__icon" icon={faGithub} /></a>
    </li>
  </ul>
);

export default Social;
