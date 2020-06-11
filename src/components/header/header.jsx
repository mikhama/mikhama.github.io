import React from 'react';
import { withRouter } from 'react-router-dom';

import Menu from '../menu';
import About from '../about';
import Logo from '../logo';
import BackgroundBox from '../background-box';
import PageTitle from '../page-title';

const Header = ({ history }) => {
  const { pathname } = history.location;

  const isRoot = pathname === '/';
  const activeItem = pathname.slice(1);

  const about = isRoot
    ? (
      <About
        className="header__about"
      />
    )
    : '';

  const backgroundBoxContainerClassName = `header__background-box-container ${
    isRoot
      ? ''
      : 'header__background-box-container_collapsed'
  }`;

  const menuClassName = `header__menu ${
    isRoot
      ? ''
      : 'header__menu_collapsed'
  }`;

  const menuContainerClassName = `${
    isRoot
      ? ''
      : 'menu__container_collapsed'
  }`;

  const pageTitleClassName = `header__page-title ${
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
        <Logo className="header__logo" />
        {about}
      </BackgroundBox>

      <Menu
        className={menuClassName}
        containerClassName={menuContainerClassName}
        activeItem={activeItem}
      />

      <PageTitle
        className={pageTitleClassName}
        titleLabel={activeItem}
      />
    </header>
  );
};

export default withRouter(Header);
