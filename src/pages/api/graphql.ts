import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from '@/graphql/server/schema/schema'
import { resolvers } from '@/graphql/server/resolvers/resolvers'

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server)
