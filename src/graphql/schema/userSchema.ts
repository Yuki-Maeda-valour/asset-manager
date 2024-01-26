import { gql } from 'graphql-tag'

export const userSchema = gql`
  type User {
    id: Int!
    username: String!
    role: String!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }

  extend type Query {
    user(id: Int!): User
    users: [User!]
  }
`
