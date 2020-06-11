import React from 'react';

const withAnimation = (Component) => (props) => {
  const {
    history,
    activeMenuItem,
    isAnimation,
    isMenuCollapseAnimation: isAnimationStarted,
  } = props;
  const { pathname } = history.location;

  const isAnimationEnded = pathname !== '/';
  const activeItem = activeMenuItem || pathname.slice(1);

  console.log('isAnimation:', isAnimation);

  const items = [
    {
      label: 'experience',
      deg: 180,
    },
    {
      label: 'skills',
      deg: 90,
    },
    {
      label: 'education',
      deg: 270,
    },
    {
      label: 'portfolio',
      deg: 360,
    },
  ];

  const menuIconsDegree = items.find(({ label }) => label === activeItem)?.deg;

  console.log(activeMenuItem);
  console.log(menuIconsDegree);
  let classNames;

  if (isAnimationStarted && !isAnimationEnded) {
    classNames = {
      about: ' app__about_animation',
      menu: ' app__menu_animation',
      menuContainer: ` app__menu-container_animation ${menuIconsDegree ? `app__menu-container_animation-${menuIconsDegree}` : ''}`,
      pageTitle: ' app__page-title_animation',
      backgroundBoxContainer: ' app__header-background-box-container_animation',
    };
  } else if (isAnimationEnded) {
    classNames = {
      about: ' app__about_animation-ended',
      menu: ' app__menu_animation-ended',
      menuContainer: ` app__menu-container_animation-ended ${menuIconsDegree ? `app__menu-container_animation-${menuIconsDegree}-ended` : ''}`,
      pageTitle: ' app__page-title_animation-ended',
      backgroundBoxContainer: ' app__header-background-box-container_animation-ended',
    };
  } else {
    classNames = {
      about: '',
      menu: '',
      menuContainer: '',
      pageTitle: '',
      backgroundBoxContainer: '',
    };
  }

  return <Component {...props} classNames={classNames} />;
};

export default withAnimation;
