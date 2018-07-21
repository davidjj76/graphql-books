module.exports = ({ connection, types, dependencies: { uuid } }) =>
  connection.define(
    'book',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: types.UUID,
        defaultValue: uuid,
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
