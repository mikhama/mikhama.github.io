import React from 'react';

const withAnimation = (Component) => (props) => {
  const { history, isMenuCollapseAnimation: isAnimationStarted } = props;
  const isAnimationEnded = history.location.pathname !== '/';

  let classNames;

  if (isAnimationStarted && !isAnimationEnded) {
    classNames = {
      about: ' app__about_animation',
      menu: ' app__menu_animation',
      menuContainer: ' app__menu-container_animation',
      pageTitle: ' app__page-title_animation',
      backgroundBoxContainer: ' app__header-background-box-container_animation',
    };
  } else if (isAnimationEnded) {
    classNames = {
      about: ' app__about_animation-ended',
      menu: ' app__menu_animation-ended',
      menuContainer: ' app__menu-container_animation-ended',
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
