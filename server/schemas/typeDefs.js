const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type bookInput{
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(bookId: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
