import { gql } from 'graphql-tag'

export const BorrowingQuery = gql`
  query Borrowings {
    borrowings {
      id
      borrowedAt
      returnedAt
      deadline
      createdAt
      updatedAt
      userId
      assetId
      user {
        username
        role
      }
      asset {
        name
        type
        status
      }
    }
  }
`

export const BorrowingMutation = gql`
  mutation CreateBorrowing(
    $borrowedAt: String
    $deadline: String
    $userId: Int
    $assetId: Int
  ) {
    createBorrowing(
      borrowedAt: $borrowedAt
      deadline: $deadline
      userId: $userId
      assetId: $assetId
    ) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
    }
  }
  mutation UpdateBorrowing(
    $borrowedAt: String
    $deadline: String
    $userId: Int
    $assetId: Int
    $updateBorrowingId: Int
  ) {
    updateBorrowing(
      borrowedAt: $borrowedAt
      deadline: $deadline
      userId: $userId
      assetId: $assetId
      id: $updateBorrowingId
    ) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
      user {
        id
        username
        role
      }
      asset {
        id
        name
        type
        status
      }
    }
  }
  mutation DeleteBorrowing($deleteBorrowingId: Int) {
    deleteBorrowing(id: $deleteBorrowingId) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
    }
  }
`
