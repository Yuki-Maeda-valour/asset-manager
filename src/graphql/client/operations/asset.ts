import { gql } from 'graphql-tag'

export const AssetQuery = gql`
  query Assets {
    assets {
      id
      name
      type
      status
    }
  }
`
export const AssetMutation = gql`
  mutation CreateAsset($name: String, $type: AssetType, $status: AssetStatus) {
    createAsset(name: $name, type: $type, status: $status) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }

  mutation UpdateAsset(
    $name: String
    $type: AssetType
    $updateAssetId: Int
    $status: AssetStatus
  ) {
    updateAsset(name: $name, type: $type, id: $updateAssetId, status: $status) {
      id
      name
      type
      status
      updatedAt
    }
  }

  mutation DeleteAsset($deleteAssetId: Int) {
    deleteAsset(id: $deleteAssetId) {
      id
      name
      type
      status
    }
  }
`
