import { gql } from 'graphql-tag'
import { userSchema } from '@/graphql/schema/userSchema'
import { assetSchema } from '@/graphql/schema/assetSchema'
import { borrowingSchema } from '@/graphql/schema/borrowingSchema'

const rootSchema = gql`
  type Query {
    _empty: String
  }
`

export const typeDefs = [rootSchema, userSchema, assetSchema, borrowingSchema]
