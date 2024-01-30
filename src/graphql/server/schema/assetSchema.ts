import { gql } from 'graphql-tag'

export const assetSchema = gql`
  enum Type {
    PC
    SP
    WIFI
    MONITOR
  }

  type Asset {
    id: Int!
    name: String!
    type: Type!
    createdAt: String!
    updatedAt: String!
    borrowings: [Borrowing]
  }

  extend type Query {
    asset(id: Int!): Asset
    assets: [Asset!]
  }

  extend type Mutation {
    createAsset(name: String!, type: String!): Asset
    updateAsset(id: Int!, name: String, type: String): Asset
    deleteAsset(id: Int!): Asset
  }
`
