import { gql } from 'apollo-server-micro'

export const assetSchema = gql`
  type Asset {
    id: ID!
    name: String!
    type: String!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }

  extend type Query {
    asset(id: ID!): Asset
    assets: [Asset!]
  }
`
