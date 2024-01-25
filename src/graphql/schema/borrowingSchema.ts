import { gql } from 'apollo-server-micro'

export const borrowingSchema = gql`
  enum Status {
    RESERVED
    LENT
    AVAILABLE
    SUSPENDED
  }

  type Borrowing {
    id: ID!
    borrowedAt: String!
    returnedAt: String
    deadline: String!
    status: Status!
    userId: ID!
    assetId: ID!
    createdAt: String!
    updatedAt: String!
    user: User!
    asset: Asset!
  }

  extend type Query {
    borrowing(id: ID!): Borrowing
    borrowings: [Borrowing!]
  }
`
