module.exports = obj => args =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        typeof obj[key] === 'function' ? obj[key].call(null, args) : obj[key],
    }),
    {},
  );
