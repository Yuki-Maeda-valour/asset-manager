import { VStack } from '@chakra-ui/react'
import type { User } from '@/graphql/client/gqlhooks'
import { UserCard } from '@/features/user/UserCard'

/**
 * ユーザーカードリストコンポーネント
 * @param users ユーザーオブジェクト
 * @returns VStack > UserCard
 */
export const UserCardList = ({
  users,
}: {
  users: (User | null)[] | null | undefined
}) => {
  return (
    <VStack w="full">
      {users?.map((user) => <UserCard key={user?.id} user={user} />)}
    </VStack>
  )
}
