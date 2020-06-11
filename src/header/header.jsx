import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../menu';
import About from '../about';
import Logo from '../logo';
import BackgroundBox from '../background-box';
import PageTitle from '../page-title';
import { compose, withAnimation } from '../hoc-helpers';

const Header = (props) => {
  const {
    activeMenuItem,
    history,
    classNames,
    setActiveMenuItem,
  } = props;

  const isMenuCollapsed = history.location.pathname !== '/';
  const activeItem = history.location.pathname.slice(1) || activeMenuItem;

  useEffect(() => {
    setActiveMenuItem(activeItem);
  }, [activeItem]);

  const about = !isMenuCollapsed
    ? (
      <About
        {...props}
        className={`header__about app__about${classNames.about}`}
      />
    )
    : '';

  return (
    <header className="header">
      <BackgroundBox
        className="header__background-box"
        containerClassName={`header__background-box-container app__header-background-box-container${classNames.backgroundBoxContainer}`}
      >
        <Logo className="header__logo" />
        {about}
      </BackgroundBox>

      <Menu
        {...props}
        className={`header__menu app__menu${classNames.menu}`}
        containerClassName={`app__menu-container${classNames.menuContainer}`}
        activeItem={activeItem}
      />

      <PageTitle
        className={`app__page-title${classNames.pageTitle}`}
        titleLabel={activeItem}
      />
    </header>
  );
};

export default compose(withAnimation, withRouter)(Header);
