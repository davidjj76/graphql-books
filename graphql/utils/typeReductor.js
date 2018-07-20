module.exports = type => ({ resolvers, ...dependencies }) =>
  Object.keys(type).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        ...type[key](dependencies),
        resolve: resolvers[key],
      },
    }),
    {},
  );
