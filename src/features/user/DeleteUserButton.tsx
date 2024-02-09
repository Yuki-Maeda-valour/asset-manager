import { PopoverButton } from '@/components/button/PopoverButton'
import { Button, Container, Text } from '@chakra-ui/react'
import { UsersDocument, useDeleteUserMutation } from '@/graphql/client/gqlhooks'
import type { User } from '@/graphql/client/gqlhooks'

type DeleteUserButtonProps = {
  // ユーザーID
  userId: User['id']
}

/**
 * ユーザーを削除するボタンコンポーネント
 * @param userId - 削除対象ユーザーID
 * @returns 削除ボタンを含むコンポーネント
 */
export const DeleteUserButton = ({ userId }: DeleteUserButtonProps) => {
  const [deleteUser] = useDeleteUserMutation({
    refetchQueries: [UsersDocument],
  })
  const handleClick = async () => {
    await deleteUser({ variables: { deleteUserId: userId } })
  }

  return (
    <PopoverButton buttonLabel="削除" placement="left-start">
      <Container
        {...{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          p: 0,
        }}
      >
        <Text>本当に削除しますか?</Text>
        <Button colorScheme="red" size="sm" onClick={handleClick}>
          削除
        </Button>
      </Container>
    </PopoverButton>
  )
}
