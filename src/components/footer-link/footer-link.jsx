import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { compose, withRouterLinkClick } from '../../hoc-helpers';

const FooterLink = ({
  label,
  className,
  location,
  onLinkClick,
}) => {
  const { pathname } = location;

  const path = label === 'about' ? '/' : `/${label}`;
  const activeLinkClassName = pathname === path ? 'footer-links__item_active' : '';

  return (
    <Link
      className={`${className} ${activeLinkClassName}`}
      to={path}
      onClick={onLinkClick}
    >
      #
      {label}
    </Link>
  );
};

export default compose(withRouterLinkClick, withRouter)(FooterLink);
