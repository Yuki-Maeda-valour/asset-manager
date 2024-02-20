import { gql } from 'graphql-tag'

export const UserQuery = gql`
  query Users {
    users {
      id
      username
      uid
      role
    }
  }
`
export const UserMutation = gql`
  mutation CreateUser($username: String, $uid: String, $role: Role) {
    createUser(username: $username, uid: $uid, role: $role) {
      id
      username
      uid
      role
      createdAt
      updatedAt
    }
  }

  mutation UpdateUser(
    $updateUserId: Int
    $username: String
    $uid: String
    $role: Role
  ) {
    updateUser(id: $updateUserId, username: $username, uid: $uid, role: $role) {
      id
      username
      uid
      role
      createdAt
      updatedAt
    }
  }

  mutation DeleteUser($deleteUserId: Int) {
    deleteUser(id: $deleteUserId) {
      id
      username
      uid
      role
      createdAt
      updatedAt
    }
  }
`
