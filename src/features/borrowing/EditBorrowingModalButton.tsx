import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
import { EditBorrowingForm } from '@/features/borrowing'
import type { Borrowing } from '@/graphql/client/gqlhooks'
type EditBorrowingModalButtonProps = {
  //  編集する予約の情報
  borrowing: Borrowing
}
/**
 * EditBorrowingModalButton
 * 予約を編集するためのモーダルを開くボタンコンポーネント
 * @param borrowing 編集する予約
 * @returns Button, ModalContainer > EditBorrowingForm
 */
export const EditBorrowingModalButton = ({
  borrowing,
}: EditBorrowingModalButtonProps) => {
  const { onOpen, onClose, ModalContainer } = useModal()

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        編集
      </Button>
      <ModalContainer title="予約の編集">
        <EditBorrowingForm borrowing={borrowing} onClose={onClose} />
      </ModalContainer>
    </>
  )
}
