module.exports = ({ author, book }) => {
  book.belongsTo(author, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE',
  });
};
