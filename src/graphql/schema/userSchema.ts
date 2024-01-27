import { gql } from 'graphql-tag'

export const userSchema = gql`
  enum Role {
    USER
    ADMIN
  }

  type User {
    id: Int!
    username: String!
    role: Role!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }
  extend type Query {
    user(id: Int!): User
    users: [User!]
  }
  extend type Mutation {
    createUser(username: String!, role: String!): User
    updateUser(id: Int!, username: String, role: String): User
    deleteUser(id: Int!): User
  }
`
