import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { User } from '@/graphql/client/gqlhooks'

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
      </CardBody>
    </Card>
  )
}
