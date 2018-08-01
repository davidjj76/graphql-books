module.exports = (
  reducer = (acc, value, key) => ({ ...acc, [key]: value }),
  initial = {},
) => obj => (...args) =>
  Object.keys(obj).reduce((acc, key) => {
    const value =
      typeof obj[key] === 'function' ? obj[key].apply(null, args) : obj[key];
    return reducer(acc, value, key);
  }, initial);
