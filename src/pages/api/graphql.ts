import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from '@/graphql/schema/schema'
import { resolvers } from '@/graphql/resolvers/resolvers'

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server)