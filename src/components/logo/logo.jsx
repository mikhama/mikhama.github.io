import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { compose, withRouterLinkClick } from '../../hoc-helpers';

const Logo = ({ className, onLinkClick }) => (
  <h1 className={`${className} logo`}>
    <Link
      to="/"
      onClick={onLinkClick}
    >
      mikhama.art
    </Link>
  </h1>
);

export default compose(withRouterLinkClick, withRouter)(Logo);
