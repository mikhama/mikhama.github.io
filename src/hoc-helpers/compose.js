const compose = (...functions) => (Component) => (
  functions.reduce((prevResult, fn) => fn(prevResult), Component)
);

export default compose;
