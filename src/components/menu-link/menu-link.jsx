import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLink = ({
  className,
  icon,
  label,
}) => (
  <Link
    className={`${className} menu-link`}
    to={`/${label}`}
  >
    <FontAwesomeIcon className="menu-link__icon" icon={icon} />
    <span className="menu-link__hidden-name">{ label }</span>
  </Link>
);

export default MenuLink;
