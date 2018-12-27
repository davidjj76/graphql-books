module.exports = (
  { createAuthor, deleteAuthor, getAuthor, getAuthors, getBooks },
  { gql },
) => ({
  typeDef: gql`
    """
    Describes an author type
    """
    type Author {
      id: ID!
      name: String!
      books: [Book!]!
    }

    """
    Describes an author input type
    """
    input AuthorInput {
      name: String!
    }

    extend type Query {
      """
      Gets an author by id
      """
      getAuthor(id: ID!): Author
      """
      Gets all authors
      """
      getAuthors: [Author!]!
    }

    extend type Mutation {
      """
      Creates a new author
      """
      createAuthor(author: AuthorInput!): Author!
      """
      Deletes an author by id
      """
      deleteAuthor(id: ID!): ID
    }
  `,

  resolvers: {
    Author: {
      books: getBooks,
    },
    Query: {
      getAuthor,
      getAuthors,
    },
    Mutation: {
      createAuthor,
      deleteAuthor,
    },
  },
});
