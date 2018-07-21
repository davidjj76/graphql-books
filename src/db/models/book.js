module.exports = ({ connection, types, dependencies }) =>
  connection.define(
    'book',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: types.UUID,
        defaultValue: dependencies.uuid,
      },
      title: {
        allowNull: false,
        type: types.STRING,
      },
      pages: {
        allowNull: false,
        type: types.INTEGER,
      },
    },
    { indexes: [{ fields: ['title'] }] },
  );
