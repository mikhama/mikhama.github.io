import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faMale } from '@fortawesome/free-solid-svg-icons';

const AnimationSwitcher = ({ className, isAnimationEnabled, toggleAnimation }) => (
  <button
    className={`${className} animation-switcher`}
    type="button"
    onClick={toggleAnimation}
  >
    <span className={`animation-switcher__icon-wrapper ${
      isAnimationEnabled
        ? ' animation-switcher__icon-wrapper_active'
        : ''}`}
    >
      <FontAwesomeIcon className="animation-switcher__icon" icon={faWalking} />
    </span>
    <span className={`animation-switcher__icon-wrapper ${
      !isAnimationEnabled
        ? ' animation-switcher__icon-wrapper_active'
        : ''}`}
    >
      <FontAwesomeIcon className="animation-switcher__icon" icon={faMale} />
    </span>
  </button>
);

export default AnimationSwitcher;
