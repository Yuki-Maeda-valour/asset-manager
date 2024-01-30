import { userResolvers } from '@/graphql/server/resolvers/userResolvers'
import { assetResolvers } from '@/graphql/server/resolvers/assetResolvers'
import { borrowingResolvers } from '@/graphql/server/resolvers/borrowingResolvers'

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...assetResolvers.Query,
    ...borrowingResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...assetResolvers.Mutation,
    ...borrowingResolvers.Mutation,
  },
}
