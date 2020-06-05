import React from 'react';

import Menu from '../menu';
import About from '../about';
import Logo from '../logo';
import BackgroundBox from '../background-box';
import PageTitle from '../page-title';

const Header = (props) => {
  const { isMenuCollapseAnimation, activeMenuItem } = props;

  return (
    <header className="header">
      <BackgroundBox
        className="header__background-box"
        containerClassName={`header__background-box-container app__header-background-box-container${
          isMenuCollapseAnimation
            ? ' app__header-background-box-container_animation'
            : ''}`}
      >
        <Logo className="header__logo" />
        <About
          {...props}
          className={`header__about app__about${isMenuCollapseAnimation ? ' app__about_animation' : ''}`}
        />
      </BackgroundBox>

      <Menu
        {...props}
        className={`header__menu app__menu${isMenuCollapseAnimation ? ' app__menu_animation' : ''}`}
        containerClassName={`app__menu-container${isMenuCollapseAnimation ? ' app__menu-container_animation' : ''}`}
        activeItem={activeMenuItem}
      />

      <PageTitle
        className={`app__page-title${isMenuCollapseAnimation ? ' app__page-title_animation' : ''}`}
        titleLabel={activeMenuItem}
      />
    </header>
  );
};

export default Header;
