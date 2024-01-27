import { userResolvers } from '@/graphql/resolvers/userResolvers'
import { assetResolvers } from '@/graphql/resolvers/assetResolvers'
import { borrowingResolvers } from '@/graphql/resolvers/borrowingResolvers'

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...assetResolvers.Query,
    ...borrowingResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...assetResolvers.Mutation,
  },
}
