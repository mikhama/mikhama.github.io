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

const Menu = ({
  className,
  containerClassName,
  collapseMenu,
  activeItem,
  setIsMenuCollapseAnimation,
}) => {
  const renderMenuItems = () => menuItems.map((props) => (
    <MenuLink
      {...props}
      key={props.label}
      className={`menu__menu-link${activeItem === props.label ? ' menu__menu-link_active' : ''}`}
      collapseMenu={collapseMenu}
      setIsMenuCollapseAnimation={setIsMenuCollapseAnimation}
    />
  ));

  return (
    <nav className={`${className} menu`}>
      <div className={`${containerClassName} menu__container`}>
        {renderMenuItems()}
      </div>
    </nav>
  );
};

export default Menu;
