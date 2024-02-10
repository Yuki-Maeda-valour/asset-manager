import { useUsersQuery } from '@/graphql/client/gqlhooks'
import { UserCardList } from '@/features/user/UserCardList'
import { Container, Spinner } from '@chakra-ui/react'

/**
 * ユーザーリストコンポーネント
 * @returns UserCardList
 */
export const UserListContainer = () => {
  const { data, loading } = useUsersQuery()
  if (loading) {
    return (
      <Container centerContent>
        <Spinner />
      </Container>
    )
  }
  if (!data) {
    return <div>No data</div>
  }
  return <UserCardList users={data.users} />
}
