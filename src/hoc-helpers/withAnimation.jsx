import React from 'react';

import { toKebabCase, getAnimationType } from '../utils';

const withAnimation = (Component) => (props) => {
  const {
    isAnimationEnabled,
    location,
    activePage,
  } = props;

  const animatedElements = {
    about: '',
    menu: '',
    menuContainer: '',
    pageTitle: '',
    backgroundBoxContainer: '',
    mainContainer: '',
    main: '',
  };

  if (!isAnimationEnabled) {
    return (
      <Component {...props} classNames={animatedElements} />
    );
  }

  const { pathname } = location;

  const animationType = getAnimationType(pathname, activePage);

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

  const menuIconsDegree = items.find(({ label }) => label === activePage?.slice(1))?.deg;

  if (animationType) {
    Object.keys(animatedElements).forEach((key) => {
      animatedElements[key] = `app__${toKebabCase(key)}_${animationType}-animation`;
    });

    if (menuIconsDegree) {
      animatedElements.menuContainer += ` ${animatedElements.menuContainer}-${menuIconsDegree}`;
    }
  }

  return (
    <Component {...props} classNames={animatedElements} />
  );
};

export default withAnimation;
