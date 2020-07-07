const toKebabCase = (string) => string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/\s+/g, '-')
  .toLowerCase();

const getAnimationType = (from, to) => {
  const isFromPathRoot = from === '/';
  const isToPathRoot = to === '/';
  const isFromEqualsTo = from === to || to === null;

  let animationType = '';
  if (isFromPathRoot && !isToPathRoot) {
    animationType = 'root-to-page';
  } else if (!isFromPathRoot && !isToPathRoot && !isFromEqualsTo) {
    animationType = 'page-to-page';
  } else if (!isFromPathRoot && isToPathRoot) {
    animationType = 'page-to-root';
  } else if (!isFromPathRoot && !isToPathRoot && isFromEqualsTo) {
    animationType = 'page-opened';
  }
  return animationType;
};

const getAnimationTimeout = (animationType) => {
  switch (animationType) {
    case 'root-to-page': {
      return {
        scrollingTimeout: 1200,
        animationTimeout: 2500,
      };
    }
    case 'page-to-page': {
      return {
        scrollingTimeout: 0,
        animationTimeout: 0,
      };
    }
    case 'page-to-root': {
      return {
        scrollingTimeout: 0,
        animationTimeout: 0,
      };
    }
    default: {
      return {
        scrollingTimeout: 0,
        animationTimeout: 0,
      };
    }
  }
};

const shiftItems = (items, activeItem) => {
  console.log(activeItem);
  const newItems = [...items];

  newItems.push(newItems.shift());
  return newItems;
};

export {
  toKebabCase,
  getAnimationType,
  getAnimationTimeout,
  shiftItems,
};
