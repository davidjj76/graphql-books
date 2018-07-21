module.exports = ({ define, types, dependencies: { uuid } }) =>
  define('author', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: types.UUID,
      defaultValue: uuid,
    },
    name: {
      allowNull: false,
      type: types.STRING,
      unique: true,
    },
  }, { indexes: [{ fields: ['name'], unique: true }] });
