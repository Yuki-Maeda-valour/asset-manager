import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { User } from '@/graphql/client/gqlhooks'
import { DeleteUserButton } from '@/features/user/DeleteUserButton'
import { EditUserModalButton } from '@/features/user/EditUserModalButton'

type UserCardProps = {
  // ユーザーオブジェクト
  user: User | null
}

/**
 * ユーザーカードコンポーネント
 * @param user ユーザーオブジェクト
 * @returns Card > CardBody > Text
 */
export const UserCard = ({ user }: UserCardProps) => {
  if (!user) return null

  return (
    <Card w="full">
      <CardBody display="flex" justifyContent="space-between" gap={2}>
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{user.id}</Text>
          <Text>{user.username}</Text>
          <Text>{user.role}</Text>
        </Container>
        <Container display="flex" justifyContent="flex-end" gap={2} p={0}>
          <EditUserModalButton user={user} />
          <DeleteUserButton userId={user.id} />
        </Container>
      </CardBody>
    </Card>
  )
}
