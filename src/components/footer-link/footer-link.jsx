import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const FooterLink = ({
  label,
  className,
  location,
}) => {
  const { pathname } = location;

  const path = label === 'about' ? '/' : `/${label}`;
  const activeLinkClassName = pathname === path ? 'footer-links__item_active' : '';

  return (
    <Link className={`${className} ${activeLinkClassName}`} to={path}>
      #
      {label}
    </Link>
  );
};

export default withRouter(FooterLink);
