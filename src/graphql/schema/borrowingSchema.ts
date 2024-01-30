import { gql } from 'graphql-tag'

export const borrowingSchema = gql`
  enum Status {
    RESERVED
    LENT
    AVAILABLE
    SUSPENDED
  }

  type Borrowing {
    id: Int!
    borrowedAt: String!
    returnedAt: String
    deadline: String!
    status: Status!
    userId: Int!
    assetId: Int!
    createdAt: String!
    updatedAt: String!
    user: User!
    asset: Asset!
  }

  extend type Query {
    borrowing(id: Int!): Borrowing
    borrowings: [Borrowing!]
  }

  extend type Mutation {
    createBorrowing(
      borrowedAt: String!
      deadline: String!
      status: String!
      userId: Int!
      assetId: Int!
    ): Borrowing
    updateBorrowing(
      id: Int!
      borrowedAt: String
      deadline: String
      status: String
      userId: Int
      assetId: Int
    ): Borrowing
    deleteBorrowing(id: Int!): Borrowing
  }
`
