import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
export const CreateUserModal = () => {
  const { onOpen, ModalContainer } = useModal()

  return (
    <>
      <Button onClick={onOpen}>ユーザー作成</Button>
      <ModalContainer title="ユーザー作成">
        <p>テスト</p>
      </ModalContainer>
    </>
  )
}
