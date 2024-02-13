import { Container } from '@chakra-ui/react'
import {
  DeleteBorrowingButton,
  EditBorrowingModalButton,
} from '@/features/borrowing'
import { Borrowing } from '@/graphql/client/gqlhooks'

type BorrowingCardMenuProps = {
  // 予約オブジェクト
  borrowing: Borrowing
}

/**
 * 予約カードのメニューを表示するコンポーネント
 * 編集と削除の操作が可能
 *
 * @param {BorrowingCardMenuProps} props
 * @returns Container > EditBorrowingModalButton, DeleteBorrowingButton
 */
export const BorrowingCardMenu = ({ borrowing }: BorrowingCardMenuProps) => {
  return (
    <Container display="flex" justifyContent="flex-end" gap="2" p="0">
      <EditBorrowingModalButton borrowing={borrowing} />
      <DeleteBorrowingButton borrowingId={borrowing.id} />
    </Container>
  )
}
