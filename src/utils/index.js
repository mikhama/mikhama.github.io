const toKebabCase = (string) => string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/\s+/g, '-')
  .toLowerCase();

// eslint-disable-next-line import/prefer-default-export
export { toKebabCase };
