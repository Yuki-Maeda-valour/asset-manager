import { gql } from 'graphql-tag'

export const UserQuery = gql`
  query Users {
    users {
      id
      username
    }
  }
`
