module.exports = ({ connection, types, dependencies }) =>
  connection.define(
    'author',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: types.UUID,
        defaultValue: dependencies.uuid,
      },
      name: {
        allowNull: false,
        type: types.STRING,
        unique: true,
      },
    },
    { indexes: [{ fields: ['name'], unique: true }] },
  );
