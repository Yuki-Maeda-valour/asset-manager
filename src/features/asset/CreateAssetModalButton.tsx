import { useModal } from '@/features/hooks/useModal'
import { Button, Container } from '@chakra-ui/react'
import { CreateAssetForm } from '@/features/asset'

/**
 * 資産の登録モーダル
 * @returns Button, ModalContainer
 */
export const CreateAssetModalButton = () => {
  const { onOpen, onClose, ModalContainer } = useModal()

  return (
    <>
      <Container display="flex" justifyContent="flex-end">
        <Button colorScheme="primary" onClick={onOpen}>
          登録
        </Button>
      </Container>
      <ModalContainer title="資産の登録">
        <CreateAssetForm onClose={onClose} />
      </ModalContainer>
    </>
  )
}
