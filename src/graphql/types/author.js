module.exports = (
  { createAuthor, getAuthor, getAuthors, getBooks },
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
    },
  },
});
