import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { compose, withRouteLinkClick } from '../hoc-helpers';

const MenuLink = ({
  className,
  icon,
  label,
  handleOnClick,
}) => (
  <Link
    className={`${className} menu-link`}
    onClick={handleOnClick}
    to={`/${label}`}
  >
    <FontAwesomeIcon className="menu-link__icon" icon={icon} />
    <span className="menu-link__hidden-name">{ label }</span>
  </Link>
);

export default compose(withRouteLinkClick, withRouter)(MenuLink);
