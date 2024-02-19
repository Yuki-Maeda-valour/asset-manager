import { useModal } from '@/features/hooks/useModal'
import { Button, Container } from '@chakra-ui/react'
import { CreateBorrowingForm } from '@/features/borrowing'

/**
 * 予約の登録モーダル
 * @returns Button, ModalContainer
 */
export const CreateBorrowingModalButton = () => {
  const { onOpen, onClose, ModalContainer } = useModal()

  return (
    <>
      <Container display="flex" justifyContent="flex-end">
        <Button colorScheme="primary" onClick={onOpen}>
          登録
        </Button>
      </Container>
      <ModalContainer title="予約の登録">
        <CreateBorrowingForm onClose={onClose} />
      </ModalContainer>
    </>
  )
}
