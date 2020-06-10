import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { compose, withRouteLinkClick } from '../hoc-helpers';

const FooterLink = ({
  label,
  className,
  history,
  handleOnClick,
  path,
}) => {
  const { pathname } = history.location;

  const activeLinkClassName = pathname === path ? 'footer-links__item_active' : '';

  return (
    <Link onClick={handleOnClick} className={`${className} ${activeLinkClassName}`} to={path}>
      #
      {label}
    </Link>
  );
};

export default compose(withRouteLinkClick, withRouter)(FooterLink);
