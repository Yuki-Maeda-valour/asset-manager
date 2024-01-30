import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { schema } from '@/graphql/server/schema'
import { createContext } from '@/graphql/server/context'

const server = new ApolloServer({
  schema,
})

export default startServerAndCreateNextHandler(server, {
  context: createContext,
})
