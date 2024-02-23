import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? '/api/graphql'
      : 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})
