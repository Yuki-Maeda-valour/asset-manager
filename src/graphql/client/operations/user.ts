import { gql } from 'graphql-tag'

export const UserQuery = gql`
  query Users {
    users {
      id
      username
      role
    }
  }
`
export const UserMutation = gql`
  mutation CreateUser($username: String, $role: Role) {
    createUser(username: $username, role: $role) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }

  mutation UpdateUser($updateUserId: Int, $username: String, $role: Role) {
    updateUser(id: $updateUserId, username: $username, role: $role) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }

  mutation DeleteUser($deleteUserId: Int) {
    deleteUser(id: $deleteUserId) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }
`
