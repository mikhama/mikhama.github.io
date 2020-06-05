import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLink = ({
  className,
  icon,
  label,
  onClick,
}) => (
  <a className={`${className} menu-link`} onClick={onClick}>
    <FontAwesomeIcon className="menu-link__icon" icon={icon} />
    <span className="menu-link__hidden-name">{ label }</span>
  </a>
);

export default MenuLink;
