import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const FooterLink = ({
  label,
  className,
  location,
}) => {
  const { pathname } = location;

  const activeLinkClassName = pathname === `/${label}` ? 'footer-links__item_active' : '';

  return (
    <Link className={`${className} ${activeLinkClassName}`} to={`/${label}`}>
      #
      {label}
    </Link>
  );
};

export default withRouter(FooterLink);
