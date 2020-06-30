import React from 'react';

const withRouterLinkClick = (Component) => (props) => {
  const {
    setActivePage,
    label,
    history,
    isAnimationEnabled,
  } = props;
  const page = label && label !== 'about'
    ? `/${label}`
    : '/';

  const onClick = (event) => {
    if (isAnimationEnabled) {
      event.preventDefault();

      setActivePage(page);

      setTimeout(() => history.push(page), 2500);
    }
  };

  return (
    <Component
      {...props}
      onLinkClick={onClick}
    />
  );
};

export default withRouterLinkClick;
