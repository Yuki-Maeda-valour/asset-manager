import { gql } from 'graphql-tag'

export const assetSchema = gql`
  type Asset {
    id: Int!
    name: String!
    type: String!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }

  extend type Query {
    asset(id: Int!): Asset
    assets: [Asset!]
  }
`