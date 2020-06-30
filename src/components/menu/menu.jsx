import React from 'react';
import {
  faBrain,
  faGraduationCap,
  faPuzzlePiece,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import MenuLink from '../menu-link';

const menuItems = [
  {
    icon: faCodeBranch,
    label: 'experience',
  },
  {
    icon: faBrain,
    label: 'skills',
  },
  {
    icon: faGraduationCap,
    label: 'education',
  },
  {
    icon: faPuzzlePiece,
    label: 'portfolio',
  },
];

const Menu = (props) => {
  const {
    className,
    containerClassName,
    activeItem,
  } = props;

  const renderMenuItems = () => menuItems.map((item) => {
    const classes = `menu__menu-link${activeItem === item.label ? ' menu__menu-link_active' : ''}`;

    return (
      <MenuLink
        {...props}
        {...item}
        key={item.label}
        className={classes}
      />
    );
  });

  return (
    <nav className={`${className} menu`}>
      <div className={`${containerClassName} menu__container`}>
        {renderMenuItems()}
      </div>
    </nav>
  );
};

export default Menu;
