import React from 'react';

import { getAnimationType, getAnimationTimeout, shiftItems } from '../utils';

const withRouterLinkClick = (Component) => (props) => {
  const {
    setActivePage,
    setItems,
    label,
    history,
    location,
    isAnimationEnabled,
  } = props;
  const page = label && label !== 'about'
    ? `/${label}`
    : '/';

  const scrollToTop = () => {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const onClick = (event) => {
    if (isAnimationEnabled) {
      event.preventDefault();

      setActivePage(page);

      const animationType = getAnimationType(location.pathname, page);
      const { scrollingTimeout, animationTimeout } = getAnimationTimeout(animationType);

      setTimeout(scrollToTop, scrollingTimeout);

      setTimeout(() => {
        history.push(page);

        if (page !== '/') {
          // setItems((items) => shiftItems(items, page.slice(1)));
        }
      }, animationTimeout);
    } else {
      scrollToTop();
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
