const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    password: String
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    description: String
    title: String
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    User: User
  }

  type Query {
    me: User
  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    
    login(email: String!, password: String!): Auth

    saveBook(authors: [String]!, description: String!, title: String!, bookId: String!, image:String!, link: String!): User
    
    removeBook(bookId: ID!): User
    
  }
`;

module.exports = typeDefs;
