import { UserListContainer } from '@/features/user'
import { Text } from '@chakra-ui/react'

/**
 * ユーザーコンテンツ
 * @returns Text, UserListContainer
 */
export default function UserContents() {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl">
        ユーザー一覧
      </Text>
      <UserListContainer />
    </>
  )
}
