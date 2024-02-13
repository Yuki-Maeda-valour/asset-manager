import { PopoverButton } from '@/components/button/PopoverButton'
import { Button, Container, Text } from '@chakra-ui/react'
import {
  BorrowingsDocument,
  useDeleteBorrowingMutation,
} from '@/graphql/client/gqlhooks'
import type { Borrowing } from '@/graphql/client/gqlhooks'

type DeleteBorrowingButtonProps = {
  // 削除対象の予約ID
  borrowingId: Borrowing['id']
}

/**
 * 予約を削除するボタンコンポーネント
 * @param borrowingId - 削除対象の予約ID
 * @returns 削除ボタンを含むコンポーネント
 */
export const DeleteBorrowingButton = ({
  borrowingId,
}: DeleteBorrowingButtonProps) => {
  const [deleteBorrowing] = useDeleteBorrowingMutation({
    refetchQueries: [BorrowingsDocument],
  })
  const handleClick = async () => {
    await deleteBorrowing({ variables: { deleteBorrowingId: borrowingId } })
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
