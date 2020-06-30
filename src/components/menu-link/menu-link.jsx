import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { compose, withRouterLinkClick } from '../../hoc-helpers';

const MenuLink = ({
  className,
  icon,
  label,
  onLinkClick,
}) => {
  const page = `/${label}`;

  return (
    <Link
      className={`${className} menu-link`}
      to={page}
      onClick={onLinkClick}
    >
      <FontAwesomeIcon className="menu-link__icon" icon={icon} />
      <span className="menu-link__hidden-name">{label}</span>
    </Link>
  );
};

export default compose(withRouterLinkClick, withRouter)(MenuLink);
