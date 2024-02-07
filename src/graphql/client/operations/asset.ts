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
export const AssetMutation = gql`
  mutation CreateAsset($name: String, $type: AssetType) {
    createAsset(name: $name, type: $type) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }

  mutation UpdateAsset($updateAssetId: Int, $name: String, $type: AssetType) {
    updateAsset(id: $updateAssetId, name: $name, type: $type) {
      id
      name
      type
      updatedAt
    }
  }

  mutation DeleteAsset($deleteAssetId: Int) {
    deleteAsset(id: $deleteAssetId) {
      id
      name
      type
    }
  }
`
