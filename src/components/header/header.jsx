import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../menu';
import About from '../about';
import Logo from '../logo';
import AnimationSwitcher from '../animation-switcher';
import BackgroundBox from '../background-box';
import PageTitle from '../page-title';
import { compose, withAnimation } from '../../hoc-helpers';

const Header = (props) => {
  const {
    history,
    isAnimationEnabled,
    toggleAnimation,
    setActivePage,
    activePage,
    classNames,
  } = props;
  const { pathname } = history.location;

  const isRoot = pathname === '/';
  const activeItem = pathname.slice(1);
  const newActiveItem = activePage?.slice(1);

  useEffect(() => setActivePage(pathname), []);

  const about = isRoot
    ? (
      <About
        className={`${classNames.about} header__about`}
      />
    )
    : '';

  const backgroundBoxContainerClassName = `${classNames.backgroundBoxContainer} header__background-box-container ${
    isRoot
      ? ''
      : 'header__background-box-container_collapsed'
  }`;

  const menuClassName = `${classNames.menu} header__menu ${
    isRoot
      ? ''
      : 'header__menu_collapsed'
  }`;

  const menuContainerClassName = `${classNames.menuContainer} ${
    isRoot
      ? ''
      : 'menu__container_collapsed'
  }`;

  const pageTitleClassName = `${classNames.pageTitle} header__page-title ${
    isRoot
      ? ''
      : 'header__page-title_collapsed'
  }`;

  return (
    <header className="header">
      <BackgroundBox
        className="header__background-box"
        containerClassName={backgroundBoxContainerClassName}
      >
        <Logo
          {...props}
          className="header__logo"
        />
        <div className="header__column">
          <AnimationSwitcher
            className="header__animation-switcher"
            isAnimationEnabled={isAnimationEnabled}
            toggleAnimation={toggleAnimation}
          />
          {about}
        </div>
      </BackgroundBox>

      <Menu
        {...props}
        className={menuClassName}
        containerClassName={menuContainerClassName}
        activeItem={activeItem}
      />

      <PageTitle
        className={pageTitleClassName}
        titleLabel={activeItem || newActiveItem}
      />
    </header>
  );
};

export default compose(withAnimation, withRouter)(Header);
