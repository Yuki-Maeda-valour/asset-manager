import { gql } from 'apollo-server-micro'

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
`
