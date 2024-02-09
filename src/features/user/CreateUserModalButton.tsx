import { useModal } from '@/features/hooks/useModal'
import { Button, Container } from '@chakra-ui/react'
import { CreateUserForm } from '@/features/user'

/**
 * ユーザーの登録モーダル
 * @returns Button, ModalContainer
 */
export const CreateUserModalButton = () => {
  const { onOpen, ModalContainer, onClose } = useModal()
  return (
    <>
      <Container display="flex" justifyContent="flex-end">
        <Button colorScheme="primary" onClick={onOpen}>
          ユーザーの登録
        </Button>
      </Container>
      <ModalContainer title="ユーザーの登録">
        <CreateUserForm onClose={onClose} />
      </ModalContainer>
    </>
  )
}
