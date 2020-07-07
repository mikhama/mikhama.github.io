import React from 'react';
import {
  faBrain,
  faGraduationCap,
  faPuzzlePiece,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import MenuLink from '../menu-link';

const itemsIcons = {
  experience: faCodeBranch,
  skills: faBrain,
  education: faGraduationCap,
  portfolio: faPuzzlePiece,
};

const Menu = (props) => {
  const {
    className,
    containerClassName,
    activeItem,
    items,
  } = props;

  const renderMenuItems = () => items.map((label) => {
    const classes = `menu__menu-link${activeItem === label ? ' menu__menu-link_active' : ''}`;

    return (
      <MenuLink
        {...props}
        label={label}
        icon={itemsIcons[label]}
        key={label}
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
