import { gql } from 'graphql-tag'
import { userSchema } from '@/graphql/server/schema/userSchema'
import { assetSchema } from '@/graphql/server/schema/assetSchema'
import { borrowingSchema } from '@/graphql/server/schema/borrowingSchema'

const rootSchema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export const typeDefs = [rootSchema, userSchema, assetSchema, borrowingSchema]
