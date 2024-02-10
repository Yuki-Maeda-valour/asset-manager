import { CreateUserModalButton, UserListContainer } from '@/features/user'
import { Box } from '@chakra-ui/react'

/**
 * ユーザーコンテンツ
 * @returns Text, UserListContainer
 */
export default function UserContents() {
  return (
    <Box display={'flex'} flexFlow={'column'} gap={4}>
      <CreateUserModalButton />
      <UserListContainer />
    </Box>
  )
}
