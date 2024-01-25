import { gql } from 'apollo-server-micro'
import { userSchema } from '@/graphql/schema/userSchema'
import { assetSchema } from '@/graphql/schema/assetSchema'
import { borrowingSchema } from '@/graphql/schema/borrowingSchema'

const rootSchema = gql`
  type Query {
    _empty: String
  }
`

export const schema = [rootSchema, userSchema, assetSchema, borrowingSchema]
