import { gql } from 'apollo-server-micro'

export const userSchema = gql`
  type User {
    id: ID!
    username: String!
    role: String!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
`
