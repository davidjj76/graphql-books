module.exports = type => dependencies =>
  Object.keys(type).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        typeof type[key] === 'function'
          ? type[key].call(null, dependencies)
          : type[key],
    }),
    {},
  );
