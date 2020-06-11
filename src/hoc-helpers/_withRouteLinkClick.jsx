import React from 'react';

const withRouteLinkClick = (Component) => (props) => {
  const {
    history,
    collapseMenu,
    rotateMenu,
    label,
    setIsMenuCollapseAnimation,
  } = props;
  const { pathname } = history.location;

  const path = label === 'about' ? '/' : `/${label}`;
  const isMenuCollapsed = pathname !== '/';
  const isPathFromEqualPathTo = path === pathname;
  const isPathToEqualRoot = path === '/';

  const handleOnClick = (event) => {
    if (isMenuCollapsed || isPathFromEqualPathTo || isPathToEqualRoot) {
      setIsMenuCollapseAnimation(false);
      rotateMenu(label);

      return;
    }

    event.preventDefault();

    collapseMenu(label);

    window.setTimeout(() => {
      history.push(path);
    }, 2500);
  };

  return (
    <Component {...props} handleOnClick={handleOnClick} path={path} />
  );
};

export default withRouteLinkClick;
