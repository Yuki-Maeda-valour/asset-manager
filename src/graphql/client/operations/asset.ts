import { gql } from 'graphql-tag'

export const AssetQuery = gql`
  query Assets {
    assets {
      id
      name
      type
    }
  }
`
